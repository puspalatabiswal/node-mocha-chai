var assert = require('chai').assert,//assert called as property
    expect = require('chai').expect,
    should = require('chai').should() // method



describe("this is my first test case " , function(){
it("my first test case", function(){
		console.log("my first test case")
})

it("my second test case", function(){
		console.log("my second test case")
})

it("my third test case", function(){
		console.log("my third test case")
})



})





describe.only("this is my second test case  " , function(){

it("my first test case " , function(){
	var foo = "pooja";
    var tea = {
    	flavors: "hii"
    };
	//assert example=======
	/*assert.typeOf(foo,"string")
	console.log("this is my techera testcases")*/
	//============

	foo.should.be.a('string');
	foo.should.equal("pooja");
	foo.should.have.lengthOf(5);
	tea.should.have.property('flavors')
})




//========================================================================
/*before("before hook", function(){
	console.log("this is before hook")
})

after("after hook", function(){
	console.log("this is after hook")
})

beforeEach("beforeEach hook", function(){
	console.log("this is beforeEach hook")
})

afterEach("afterEach hook", function(){
	console.log("this is afterEach hook")

})*/
//===========================================================================

//you can use .only in (it) method also//

//=======================================================================

// it("my first test case", function(){
// 		console.log("my first test case")
// })

// it("my second test case", function(){
// 		console.log("my second test case")
// })

// it("my third test case", function(){
// 		console.log("my third test case")
// })
//=========================================================================


});




