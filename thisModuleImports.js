//this module is importing informatuon from thisModuleExports

// var xmasTrees = require("./thisModuleExports");

// console.log(xmasTrees.treeKinds);

// xmasTrees.treeKinds();

var coolTrees = require("./thisModuleExports");

console.log(coolTrees.trees);  // log a Number

coolTrees.explain();  // invokes the function `explain`
