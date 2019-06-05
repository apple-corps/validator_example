import {validation} from '../src/validator.js'

var expect = require('chai').expect

console.log("Given a valid three letter Country Code and corresponding valid national Phone Number");

var countryCode = "US"
var phoneNumber = "2063291212"

console.log("When validation(pn,cc) is called")

var validated = validation(phoneNumber,countryCode)

console.log("Then true is returned")

expect(validated).to.be.a('boolean')
console.log(validated)


