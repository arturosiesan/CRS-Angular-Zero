const skills: string[] = ['Correr', 'Saltar', 'Nadar'];

interface Character {
    name: string,
    hp: number,
    skills: string[],
    hometown?: string
}

const heroe: Character = {
    name: 'Batman',
    hp: 100,
    skills: ['Correr', 'Saltar']
};

heroe.hometown=  'Gotham';

console.log({heroe, skills})