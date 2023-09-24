// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/common/ERC2981.sol";

error FanToken__NotTrustee();

contract FanToken is ERC1155, ERC2981 {
    uint256 public MAX_TOKENS_PER_ID = 100;
    uint256 public MAX_DIFFERENT_IDS = 48;

    struct TokenData {
        uint256 id;
        uint256 amount;
    }

    mapping(address => bool) private trusteeAddress;
    mapping(uint256 => uint256) public mintedTokensPerID;
    mapping(address => mapping(uint256 => uint256)) private _tokenOwnership;

    modifier onlyTrustee() {
        if (!trusteeAddress[msg.sender]) revert FanToken__NotTrustee();
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

    function mint(
        address to,
        uint256 tokenId,
        uint256 amount
    ) external onlyTrustee {
        require(tokenId < MAX_DIFFERENT_IDS, "Invalid tokenId");
        require(
            mintedTokensPerID[tokenId] + amount <= MAX_TOKENS_PER_ID,
            "Max tokens per ID exceeded"
        );

        mintedTokensPerID[tokenId] += amount;
        _tokenOwnership[to][tokenId] += amount;

        _mint(to, tokenId, amount, "");
    }

    function getTokenAmount(uint256 tokenId) public view returns (uint256) {
        return mintedTokensPerID[tokenId];
    }

    function getTokensOfAddress(
        address owner
    )
        public
        view
        returns (uint256[] memory tokenIds, uint256[] memory amounts)
    {
        uint256 tokenCount = 0;

        for (uint256 i = 0; i < MAX_DIFFERENT_IDS; i++) {
            if (_tokenOwnership[owner][i] > 0) {
                tokenCount++;
            }
        }

        tokenIds = new uint256[](tokenCount);
        amounts = new uint256[](tokenCount);
        uint256 index = 0;

        for (uint256 i = 0; i < MAX_DIFFERENT_IDS; i++) {
            if (_tokenOwnership[owner][i] > 0) {
                tokenIds[index] = i;
                amounts[index] = _tokenOwnership[owner][i];
                index++;
            }
        }

        return (tokenIds, amounts);
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
