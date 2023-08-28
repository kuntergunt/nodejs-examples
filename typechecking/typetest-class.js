// @ts-check

/** 
 * @import { Test1, Test2 } from "./types"; 
 * 
 * @typedef { import("./types").Test1 } 
 * import("./types").Test1 
 * */

testMe.age = 23
testMe.name = 'Kilory'
//testMe.notexist = 'mustFail'
//testMe.age      = 'mustFail'


/** @type { import("./types").Test1 } */
let testMe2 = {}

testMe2.age = 23
testMe2.name = 'Kilroy'
//testMe2.notexist = 'mustFail'
//testMe2.age      = 'mustFail'

/** @implements { import("./types").Test2 } */
class TypeTest1 {


    /**
     * @param {string} name: string
     * @param {number} age: number
     */
    constructor(name, age) {
        this.name = name;
        this.age = age;
        /** 
         this.age = name;  // error
         */
    }

    /**
     * @param {string} name
     */
    setName(name) {
        this.name = name
    }

    /**
     * @returns string
     */
    getName() {
        return this.name
    }

    /**
     * @param {any} years
     */
    incrementAge(years) {
        this.age = this.age + years
    }

    /**
       * @method
       * @public
       * @param {String} paramEins
       * @param {import("./types").Test1} paramZwei
       * @returns String
       */
    method1(paramEins, paramZwei) {
        /** @type {import("./types").Test1} */
        let innerEins = {
            name: paramEins,
            age: paramZwei.age
        }

        /** 
          this.age      = 'mustFail'
          innerEins.age = 'mustFail'
        */


        return innerEins.name
    }
}


/** @extends {TypeTest1} */
class TypeTest2 {

    /**
     * @param {string} name
     */
    setName(name) {
        this.name = name
    }
}