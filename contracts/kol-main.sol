pragma solidity ^0.4.24; 

/** 
* @title Kings Of London DApp
* @author Frederico Lacs
* @audit Jardin Omidvaran
**/

import "../node_modules/openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "../node_modules/openzeppelin-solidity/contracts/payment/PullPayment.sol";

contract KOLogic is Ownable, PullPayment {
    
    KOLstorage internal s;
    uint256 internal blockCreationValue;
    mapping(string => bool) internal isValidUniversity;

    event NewValidUniversity(string _name);
    event NewBlock(uint256 _x, uint256 _y, string indexed _uniName);
    event UpdatedBlockCreationValue(uint256 value);
    event UpdatedStorageAddress(address newStorageAddress);

    constructor (uint256 _blockCreationValue, address _storageAddress) public {
        blockCreationValue = _blockCreationValue;
        emit UpdatedBlockCreationValue(_blockCreationValue);
        s = KOLstorage(_storageAddress);
        emit UpdatedStorageAddress(_storageAddress);
    }

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
        // returns 0 if not from a valid uni
    }

    function buyBlock(uint _x, uint _y, string _uniName)  public payable {
        bytes32 blockID = getBlockID(_x, _y, _uniName);

        // check if block is already created
        if(s.getIsEntity(blockID)) {
            require(s.getForSale(blockID), "Block is not for sale.");
            require(msg.value >= s.getPrice(blockID), "Not enough ether to buy block.");
        } 
        else{
            require(msg.value >= blockCreationValue, "Not enough ether to create block.");
        }
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