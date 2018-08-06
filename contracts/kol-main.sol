pragma solidity ^0.4.24; 

/** 
* @title Kings Of London DApp
* @author Frederico Lacs and Jard Binks
**/

import "../node_modules/openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "../node_modules/openzeppelin-solidity/contracts/payment/PullPayment.sol";

contract MyContract is Ownable {
    
    constructor (uint8 _blockCreationValue) public {
        // constructor for contract
        blockCreationValue = _blockCreationValue;
    }

    // data structures needed for storage
    struct Block{
        bytes32 imageURL;
        bytes32 description;
        address blockOwner;
        bool forSale;
        uint256 price;
    }
    
    mapping(bytes32 => Block) public blocks;
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
        if(bytes(blocks[blockID]) == 0) {
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