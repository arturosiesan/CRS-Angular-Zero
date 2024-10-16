function addNumber ( a: number, b: number ): number {
    return a + b;
}

const result = addNumber(1,2);

console.log({result});




const addNumberArrow = ( a: number, b: number ): string => {
    return `${a + b}`;
}

const result2 = addNumberArrow(1,2);

console.log({result2});



function multiply ( firstNumber: number, secondNumber?: number, base: number = 2 ) {
    secondNumber = secondNumber;
    return firstNumber * base;
}

const result3 = multiply(1);

console.log({result3});




interface Character {
    name: string,
    hp: number,
    showHp: () => void
}

const healCharacter = ( character: Character, amount: number ) => {
    character.hp += amount;
}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos devida ${this.hp}`);
        
    }
}

healCharacter(strider, 10);