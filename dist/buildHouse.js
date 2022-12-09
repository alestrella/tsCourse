"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Key {
    constructor() {
        this.signature = Math.random();
    }
    getSignature() {
        return this.signature;
    }
}
class Person {
    constructor(key) {
        this.key = key;
    }
    getKey() {
        return this.key;
    }
}
class House {
    constructor(key) {
        this.key = key;
        this.door = false;
        this.tenants = [];
    }
    comeIn(person) {
        if (!this.door) {
            throw new Error('Door is close');
        }
        this.tenants.push(person);
        console.log('Person inside');
    }
}
class MyHouse extends House {
    openDoor(key) {
        if (key.getSignature() !== this.key.getSignature()) {
            throw new Error('Key not for this door');
        }
        return this.door = true;
    }
}
const key = new Key();
const myHouse = new MyHouse(key);
const newPerson = new Person(key);
myHouse.openDoor(newPerson.getKey());
myHouse.comeIn(newPerson);
//# sourceMappingURL=buildHouse.js.map