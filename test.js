const expect = require('chai').expect;
const myapp = require(".");

describe('Testing - "Hello World!" ', () => {
	it('Should Return Hello World!', () => {
         	expect(myapp.printMsg()).to.equal("Hello World!");
	});
});