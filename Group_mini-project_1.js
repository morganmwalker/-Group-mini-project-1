let zero = " _  \n| |\n|_|\n";
    let zeroLines = [" _ ","| |","|_|"];

let one = "   \n|   \n|  \n";
    let oneLines = ["   ","|  ","|  "];

let two = " _ \n _|\n|_ \n";
    let twoLines = [" _ "," _|","|_ "];

let three = " _ \n _|\n _|\n";
    let threeLines = [" _ " , " _|" , " _|"];

let four = "   \n|_|\n  |";
    let fourLines = ["   ", "|_|", "  |"];

let five = " __\n|__\n __|\n";
    let fiveLines = [" __ ", "|__ ", " __|"];


let eight = " _  \n|_| \n|_| \n";


let six = " _  \n|_ \n|_| \n"

let seven = "__\n  |\n  |\n"


let nine = " _  \n|_| \n _| \n";



let digitsLines = [zeroLines, oneLines, twoLines, threeLines, fourLines,fiveLines]

for (let k = 0; k <6; k++){
    let firstDigit = digitsLines[k]
    let teen = "";
    for (let j = 0; j<5; j++){

        ;
        let secondDigit = digitsLines[j];
    
        for (let i = 0; i<3; i++){
            teen += firstDigit[i] + secondDigit[i];
            teen += "\n";
        }
    }
    console.log(teen);
}

