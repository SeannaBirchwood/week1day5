//testing export/import function

// var treeKinds = ["birch", "elm", "maple", "pine", "popular"]

// treeKinds.forEach(function(array) {
// 	if(array.length < 5)
// 		console.log(array);
// 	});

// module.exports = {
// 	treeKinds = ["birch", "elm", "maple", "pine", "popular"]
// 	treeKinds: function() {
// 		console.log("Some trees with names less than 5 characters are" + this.treeKinds);
// 	}
// }

module.exports = {
  trees: ["elm ", "birch ", "maple "],
  explain: function() {
    console.log("Some trees I like are: " + this.trees);
  }
};

