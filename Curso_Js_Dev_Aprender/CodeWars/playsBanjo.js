/*Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"

*/

areYouPlayingBanjo = (name) => {

      name[0] == 'R' || name[0] == 'r' ? console.log(`${name} Plays Banjo`):
      console.log(`${name} Does Not Play Banjo`)
          
}

areYouPlayingBanjo('Rafael')