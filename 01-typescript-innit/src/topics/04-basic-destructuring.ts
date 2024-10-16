interface AudioPlayer {
    audioVolume: number,
    songDuration: number,
    song: string,
    details: Details
}

interface Details  {
    author: string,
    year: number
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

const { song: anotherSong } = audioPlayer;

console.log(`${anotherSong} es igual que ${audioPlayer.song}`);






const dbz: string[] = ['Goku', 'Vegeta', 'Trunk'];
const [ , , p3 = 'Not found' ] = dbz;

console.log("Personaje 4: ", dbz[3] || 'No hay personaje 4');
console.log("Trunks ", p3);