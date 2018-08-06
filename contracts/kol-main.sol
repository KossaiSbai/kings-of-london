pragma solidity ^0.4.24; 

/** 
* @title Kings Of London DApp
* @author Frederico Lacs and Jard Binks
**/

import "../node_modules/openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "../node_modules/openzeppelin-solidity/contracts/payment/PullPayment.sol";

contract KOLogic is Ownable, PullPayment {
    
    KOLstorage s;

    constructor (uint8 _blockCreationValue, address storageContract) public {
        // constructor for contract
        blockCreationValue = _blockCreationValue;
        s = storageContract;
    }

    // data structures needed for storage
    
    mapping(bytes8 => bool) internal validUnis;
    uint8 blockCreationValue;

    event NewUniversity(bytes8 _name);
    event NewBlock(uint8 _x, uint8 _y, bytes8 indexed _uniName);
    event UpdatedBlockCreationValue(uint8 indexed value);

    function setBlockCreationValue(uint8 _newBlockCreationValue) public onlyOwner {
        blockCreationValue = _newBlockCreationValue;
        emit UpdatedBlockCreationValue(_newBlockCreationValue);
    }
    function addUniversity(bytes8 _name) public onlyOwner {
        validUnis[_name] = true;
        emit NewUniversity(_name);
    }

    function getBlockID(uint8 _x, uint _y, bytes8 _uniName) internal returns (bytes32 id) {
        if(validUnis[_uniName]){
            id = keccak256(_x + ":" + _y + "@" + _uniName);
        }
    }

    function buyBlock(uint8 _x, uint _y, bytes8 _uniName)  public payable {
        bytes32 blockID = getBlockID(_x, _y, _uniName);

        // if block doesn't exist yet
        if() {
            require(msg.value > blockCreationValue);
            createBlock(blockID);
            throw;
        } 

        require(blocks[blockID].forSale);
        require(msg.value > blocks[blockID].price);

        
        
    }

    function createBlock(bytes32 _blockID) internal {
        blocks[_blockID] = Block(0,0,msg.sender,false,0);
    }    
}

contract KOLstorage {

    constructor (address _appContract) public {
        // constructor for contract
        appContract = _appContract;
    }

    struct Block{
        bytes32 imageURL;
        bytes32 description;
        address blockOwner;
        bool forSale;
        uint256 price;
        bool isEntity;
    }
    
    mapping(bytes32 => Block) public blocks;

    modifier onlyApplicationContract() {
        require(msg.sender == appContract);
        _;
    }

    function newBlock(bytes32 _blockID, bytes32 _imageURL, bytes32 _description, address _blockOwner, uint256 _price) public onlyApplicationContract returns (bool success) {
        require(blocks[_blockID].isEntity == false);
        blocks[_blockID] = Block(_imageURL, _description, _blockOwner, false, _price, true);
        success = true;
    }

    function updateBlock(bytes32 _blockID, bytes32 _imageURL, bytes32 _description, address _blockOwner, bool _forSale, uint256 _price) public onlyApplicationContract returns (bool success) {
        require(blocks[_blockID].isEntity == true);
        blocks[_blockID] = Block(_imageURL, _description, _blockOwner, _forSale, _price, true);
        success = true;
    }

    function deleteBlock(bytes32 _blockID) public onlyApplicationContract returns (bool success) {
        blocks[_blockID].isEntity = false;
        success = true;
    }

    function isEntity(bytes32 _blockID) public onlyApplicationContract  view returns (bool isEntity) {
        isEntity = blocks[_blockID].isEntity;
    }

}