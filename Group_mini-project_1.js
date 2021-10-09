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

let six = " _  \n|_ \n|_| \n"
    let sixLines = [" _ ", "|_ ", "|_|"];

let seven = "__\n  |\n  |\n";
    let sevenLines = ["__ ", "  |", "  |"];

let eight = " _  \n|_| \n|_| \n";
    let eightLines = [" _  ","|_| ","|_| "];

let nine = " _  \n|_| \n _| \n";
    let nineLines = [" _ ", "|_|", " _|"];



let digitsLines = [zeroLines, oneLines, twoLines, threeLines, fourLines,fiveLines, sixLines, sevenLines, eightLines, nineLines];


let printDoubleDigit = function(tensDigit){
    let innerPrintDoubleDigit = function() {
        for (let i = 0; i < digitsLines.lenght; i++){
        let twoDigits = "";
        let secDigit = digitsLines[i];
        for (let j = 0; j < 3; j++){
            twoDigits += tensDigit[j] + secDigit[j] + "\n";
        }
        console.log(twoDigits);
    }
}
return innerPrintDoubleDigit;

}


let printSingles = printDoubleDigit(zeroLines);
let printTeens = printDoubleDigit(oneLines);
let printTwenties = printDoubleDigit(twoLines);
let printThirties = printDoubleDigit(threeLines);
let printFourties = printDoubleDigit(fourLines);
let printFifties = printDoubleDigit(fiveLines);
let printSixties = printDoubleDigit(sixLines);
let printSeventies = printDoubleDigit(sevenLines);
let printEighties = printDoubleDigit(eightLines);
let printNinties = printDoubleDigit(nineLines);


printSingles();
printTeens();
printThirties();
printFourties();
printFifties();
printSixties();
printSeventies();
printEighties();
printNinties();

