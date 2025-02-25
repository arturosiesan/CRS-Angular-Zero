function classDecorator<T extends { new (...args:any[]): {}}>(
    constructor: T
){
    return class extends constructor {
        newProperty = 'New Property';
        hello = 'override';
    }
}

@classDecorator
class SuperClass {

    public myProperty: string = 'Abc123';

    print() {
        console.log(this.myProperty);
        
    }
}

const myClass = new SuperClass();
console.log(myClass);
