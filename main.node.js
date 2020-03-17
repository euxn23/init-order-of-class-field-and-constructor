class Foo {
  constructor() {
    this.buz = (() => console.log('buz'))();
  }
  bar = (() => console.log('bar'))();
}

new Foo();

