// Given a positive integer representing a duration of a bus ride and
// an array of positive integers representing song times, find a pair of two songs
// where the song pair ends 30 seconds before the bus ride ends.

// return an array of the song indexes or [-1, -1] if no pair is found.

// If there are multiple song pairs that match, return the pair that contains the
// longest song. The order of the returned indexes doesn't matter.
// 

const busDuration1 = 300;
const songDurations1 = [70, 120, 200, 45, 210, 40, 60, 50];
const expected1 = [4, 6]; // 210, 60 == 270
/* Explanation:
There are multiple pairs that add up to 30 seconds before the bus duration.
The pair at indexes 4 and 6 is the pair with the longest song that is chosen.
*/

const busDuration2 = 300;
const songDurations2 = [70, 120, 200, 230, 45, 210, 40, 60, 50];
const expected2 = [3, 6]; // 230, 40 == 270
/* Explanation:
This is the pair with the longest song.
*/

const busDuration3 = 300;
const songDurations3 = [70, 120, 20, 23, 45, 21, 40, 60, 50];
const expected3 = [-1, -1]; // not found.

/**
 * Finds the pair of song durations that adds up to 30 seconds before the bus
 * ride ends.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} busDuration Seconds.
 * @param {Array<number>} songDurations Seconds.
 * @returns {Array<number, number>} The song pair indexes, or [-1, -1] if no pair is found.
 *    If there were multiple solutions, the one with the longest song should be used.
 */
function musicRuntime(busDuration, songDurations) {
    // Hint: Remember we make sure the songs end 30 seconds before the bus ride ends, so we need to account for that.
    // Using a bit of Math.max() could be useful~
    // We're doing comparisons so a standard for loop may be the way to go. ☕
    let foundSongs = [-1,-1];
    let longSong = 0;
    for(let i in songDurations){
        for(let j in songDurations){
            if(songDurations[i]+songDurations[j] == busDuration - 30){
                let thisMax = Math.max(longSong, songDurations[i], songDurations[j])
                if(thisMax > longSong){
                    longSong = thisMax
                    foundSongs = [i,j]
                }
            }
        }
    }
    return foundSongs
}

console.log(musicRuntime(busDuration1,songDurations1),expected1);
console.log(musicRuntime(busDuration2,songDurations2),expected2);
console.log(musicRuntime(busDuration3,songDurations3),expected3);

function musicRuntime2(busDuration, songDurations) {
    busDuration = busDuration - 30
    let foundSongs = [-1,-1];
    let longSong = 0;
    songDurations.forEach( (val_i, i) =>{
        songDurations.forEach( (val_j, j) =>{
            if(val_i + val_j == busDuration){
                let thisMax = Math.max(val_i, val_j, longSong);
                if(thisMax > longSong){
                    longSong = thisMax;
                    foundSongs = [i,j];
                }
            }
        })
    });
    return foundSongs
}

console.log(musicRuntime2(busDuration1,songDurations1),expected1);
console.log(musicRuntime2(busDuration2,songDurations2),expected2);
console.log(musicRuntime2(busDuration3,songDurations3),expected3);

function musicRuntime3(busDuration, songDurations){
    busDuration = busDuration - 30
    let foundSongs = [];
    let longSong = 0;
    songDurations.forEach((val, idx) =>{
        if(val>longSong){
            longSong = val;
            foundSongs[0] = idx;
        }
    });
    songDurations.forEach((val, idx) =>{
        if(idx != foundSongs[0]){
            if(val + longSong == busDuration){
                foundSongs[1] = idx
            }
        }
    });
    return foundSongs.length > 1? foundSongs : [-1,-1];
}

console.log(musicRuntime3(busDuration1,songDurations1),expected1);
console.log(musicRuntime3(busDuration2,songDurations2),expected2);
console.log(musicRuntime3(busDuration3,songDurations3),expected3);