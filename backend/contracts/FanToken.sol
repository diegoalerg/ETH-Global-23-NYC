// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/common/ERC2981.sol";

error CustodyVault__NotTrustee();

contract FanToken is ERC1155, ERC2981 {
    uint256 public MAX_TOKENS_PER_ID = 100;
    uint256 public MAX_DIFFERENT_IDS = 48;

    mapping(address => bool) private trusteeAddress;
    mapping(uint256 => uint256) public mintedTokensPerID;
    uint256 public numberOfIds = 0;

    modifier onlyTrustee() {
        if (!trusteeAddress[msg.sender]) revert CustodyVault__NotTrustee();
        _;
    }

    constructor() ERC1155("") {
        trusteeAddress[msg.sender] = true;
        _setDefaultRoyalty(address(this), 500);
    }

    function supportsInterface(
        bytes4 interfaceId
    ) public view override(ERC1155, ERC2981) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

    function mint(address to, uint256 tokenId, uint256 amount) external {
        if (mintedTokensPerID[tokenId] == 0) {
            require(
                numberOfIds < MAX_DIFFERENT_IDS,
                "Max different IDs reached"
            );
            numberOfIds += 1;
        }

        require(
            mintedTokensPerID[tokenId] + amount <= MAX_TOKENS_PER_ID,
            "Max tokens per ID exceeded"
        );

        mintedTokensPerID[tokenId] += amount;

        _mint(to, tokenId, amount, "");
    }

    function setApproval(
        address sender,
        address operator,
        bool approve
    ) external {
        _setApprovalForAll(sender, operator, approve);
    }

    function setTrusteeAddress(address _address) public onlyTrustee {
        trusteeAddress[_address] = true;
    }

    function removeTrusteeAddress(address _address) public onlyTrustee {
        trusteeAddress[_address] = false;
    }

    function setMaxTokenPerId(uint256 _maxTokensPerId) public onlyTrustee {
        MAX_TOKENS_PER_ID = _maxTokensPerId;
    }

    function setMaxDifferentIds(uint256 _maxDifferentIds) public onlyTrustee {
        MAX_TOKENS_PER_ID = _maxDifferentIds;
    }
}
