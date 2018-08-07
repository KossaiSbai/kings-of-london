pragma solidity ^0.4.24; 

/** 
* @title Kings Of London DApp
* @author Frederico Lacs
* @audit Jardin Omidvaran
**/

import "../node_modules/openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "../node_modules/openzeppelin-solidity/contracts/payment/PullPayment.sol";

contract KOLogic is Ownable, PullPayment {
    constructor (uint256 _blockCreationValue, address _storageAddress) public {
        blockCreationValue = _blockCreationValue;
        emit UpdatedBlockCreationValue(_blockCreationValue);
        s = KOLstorage(_storageAddress);
        emit UpdatedStorageAddress(_storageAddress);
    }

    KOLstorage internal s;
    uint256 internal blockCreationValue;
    mapping(string => bool) internal isValidUniversity;

    event NewValidUniversity (string _name);
    event InvalidUniversityAttempt (string _name);
    event UpdatedBlockCreationValue (uint256 value);
    event UpdatedStorageAddress (address newStorageAddress);
    event BlockBought (
        uint256 x, 
        uint256 y, 
        string indexed universityName, 
        address indexed oldOwner, 
        address indexed newOwner, 
        uint256 price
    );
    event BlockInformationUpdated (
        uint256 x, 
        uint256 y, 
        string indexed universityName, 
        bytes32 _imageURL, 
        bytes32 _description, 
        address indexed _blockOwner, 
        bool indexed _forSale, 
        uint256 _price
    );

    function setBlockCreationValue(uint256 _newBlockCreationValue) public onlyOwner {
        blockCreationValue = _newBlockCreationValue;
        emit UpdatedBlockCreationValue(_newBlockCreationValue);
    }

    function setStorageAddress(address _storageAddress) public onlyOwner {
        s = KOLstorage(_storageAddress);
        emit UpdatedStorageAddress(_storageAddress);
    }

    function addValidUniversity(string _name) public onlyOwner {
        isValidUniversity[_name] = true;
        emit NewValidUniversity(_name);
    }

    /*
     *   Could have made this a pure function and added the uni verification somewhere else.
     *   Maybe verify for valid universities in the frontend input?
     */
    function getBlockID(uint256 _x, uint256 _y, string _uniName) internal returns (bytes32 id) {
        if(isValidUniversity[_uniName]){
            id = keccak256(_x + ":" + _y + "@" + _uniName);
        }
        else{
            emit InvalidUniversityAttempt(_uniName);
        }
        // returns 0 if not from a valid uni
    }

    function buyBlock (
        uint256 _x, 
        uint256 _y, 
        string _uniName,
        bytes32 _imageURL,
        bytes32 _description
    )
        public 
        payable 
        returns (bool success)
    {
        bytes32 blockID = getBlockID(_x, _y, _uniName);

        // check if block is already created
        if(s.getIsEntity(blockID)) {
            require(s.getForSale(blockID), "Block is not for sale.");
            require(msg.value >= s.getPrice(blockID), "Not enough ether to buy block.");
            
            address oldOwner = s.getBlockOwner(blockID);
            require(s.updateBlock(blockID, _imageURL, _description, msg.sender, false, msg.value), "Failed to update block.");

            // TODO: send money to necessary people

            emit BlockBought(_x, _y, _uniName, oldOwner, msg.sender, msg.value);
            success = true;
        }
        else{
            // created new variable to have it in scope and not read from blockchain twice
            uint256 _blockCreationValue = blockCreationValue;
            require(msg.value >= _blockCreationValue, "Not enough ether to create block.");

            require(s.newBlock(blockID, _imageURL, _description, msg.sender, _blockCreationValue), "Failed to create new block.");
            // when new block is created, block is being bought from this contract.
            emit BlockBought(_x, _y, _uniName, this, msg.sender, msg.value);
            success = true;
        }
    }

    function updateBlock (
        uint256 _x, 
        uint256 _y, 
        string _uniName,
        bytes32 _imageURL, 
        bytes32 _description, 
        bool _forSale, 
        uint256 _price
    )
        public
        returns (bool success)
    {
        bytes32 blockID = getBlockID(_x, _y, _uniName);
        
        address blockOwner = s.getBlockOwner(blockID);
        // Added admin access in case we need to change inappropriate content
        require(msg.sender == blockOwner || msg.sender == owner, "Not block owner.");
        require(_price > 0, "Can't put selling price lower than zero.");
        
        s.updateBlock(blockID, _imageURL, _description, blockOwner, _forSale, _price);
        emit BlockInformationUpdated(_x, _y, _uniName, _imageURL, _description, blockOwner, _forSale, _price);
        success = true;
    }
}


contract KOLstorage is Ownable {
    struct Block{
        bytes32 imageURL;
        bytes32 description;
        address blockOwner;
        bool forSale;
        uint256 price;
        // If block is available, means it is not an entity
        bool isEntity;
    }
    
    mapping(bytes32 => Block) internal blocks;
    
    function newBlock (
        bytes32 _blockID, 
        bytes32 _imageURL, 
        bytes32 _description, 
        address _blockOwner, 
        uint256 _price
    ) 
        public 
        onlyOwner 
        returns (bool success) 
    {
        require(blocks[_blockID].isEntity == false, "Block was already created.");
        blocks[_blockID] = Block(_imageURL, _description, _blockOwner, false, _price, true);
        success = true;
    }

    function updateBlock (
        bytes32 _blockID, 
        bytes32 _imageURL, 
        bytes32 _description, 
        address _blockOwner, 
        bool _forSale, 
        uint256 _price
    ) 
        public 
        onlyOwner 
        returns (bool success) 
    {
        require(blocks[_blockID].isEntity == true, "Block was not created, can't be updated.");
        blocks[_blockID] = Block(_imageURL, _description, _blockOwner, _forSale, _price, true);
        success = true;
    }

    function deleteBlock(bytes32 _blockID) public onlyOwner returns (bool success) {
        blocks[_blockID].isEntity = false;
        success = true;
    }

    // getters
    function getImageURL(bytes32 _blockID) public onlyOwner view returns (bytes32 imageURL) {
        imageURL = blocks[_blockID].imageURL;
    }

    function getDescription(bytes32 _blockID) public onlyOwner view returns (bytes32 description) {
        description = blocks[_blockID].description;
    }

    function getBlockOwner(bytes32 _blockID) public onlyOwner view returns (address blockOwner) {
        blockOwner = blocks[_blockID].blockOwner;
    }

    function getForSale(bytes32 _blockID) public onlyOwner view returns (bool forSale) {
        forSale = blocks[_blockID].forSale;
    }

    function getPrice(bytes32 _blockID) public onlyOwner view returns (uint256 price) {
        price = blocks[_blockID].price;
    }

    function getIsEntity(bytes32 _blockID) public onlyOwner view returns (bool isEntity) {
        isEntity = blocks[_blockID].isEntity;
    }
}