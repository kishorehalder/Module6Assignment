// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Module6Contract is Ownable {
    string private _stateVariable;

    function getStateVariable() external view returns (string memory) {
        return _stateVariable;
    }

    function setStateVariable(string memory newValue) external onlyOwner {
        _stateVariable = newValue;
    }
}
