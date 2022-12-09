export{}

class Key{
    private signature: number;
    constructor() {
        this.signature = Math.random();
    }

    getSignature():number {
        return this.signature;
    }
}

class Person{
    constructor(private key: Key) {}

    getKey():Key {
        return this.key;
    }
}

abstract class House{
    protected door = false;
    protected tenants: Person[] = [];

    constructor(protected key: Key) { }
    
    comeIn(person:Person):void {
        if (!this.door) {
            throw new Error('Door is close');
        }
        this.tenants.push(person);
        console.log('Person inside');
    }
    abstract openDoor(key: Key): boolean;
    
}

class MyHouse extends House{
    openDoor(key: Key) {
       if (key.getSignature() !== this.key.getSignature()) {
        throw new Error('Key not for this door')
       }
        return this.door = true;
    }
}

const key = new Key();
const myHouse = new MyHouse(key);
const newPerson = new Person(key);

myHouse.openDoor(newPerson.getKey());
myHouse.comeIn(newPerson);