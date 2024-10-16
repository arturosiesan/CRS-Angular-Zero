export interface Passenger {
    name: string,
    children?: string[]
}

const passenger1:  Passenger = {
    name: 'Arturo'
}

const passenger2: Passenger = {
    name: 'Alicia',
    children: ['Jager', 'Marta']
}

const printChildren = ( passenger: Passenger ) => {
    
    const howManyChildren = passenger.children?.length || 0;

    console.log(howManyChildren);
}

printChildren( passenger1 );
printChildren( passenger2 );