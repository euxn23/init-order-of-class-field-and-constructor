"use strict";
class Foo {
    constructor() {
        this.bar = (() => console.log('bar'))();
        this.buz = (() => console.log('buz'))();
    }
}
new Foo();
