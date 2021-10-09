let zeroLines = [" _ ","| |","|_|"];
let oneLines = ["   ","|  ","|  "];
let twoLines = [" _ "," _|","|_ "];
let threeLines = [" _ " , " _|" , " _|"];
let fourLines = ["   ", "|_|", "  |"];
let fiveLines = [" __ ", "|__ ", " __|"];
let sixLines = [" _ ", "|_ ", "|_|"];
let sevenLines = ["__ ", "  |", "  |"];
let eightLines = [" _  ","|_| ","|_| "];
let nineLines = [" _ ", "|_|", " _|"];


let digitsLines = [zeroLines, oneLines, twoLines, threeLines, fourLines,fiveLines, sixLines, sevenLines, eightLines, nineLines];


let printDoubleDigit = function(tensDigit){
    let innerPrintDoubleDigit = function() {
        for (let i = 0; i < digitsLines.length; i++){
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
printTwenties();
printThirties();
printFourties();
printFifties();
printSixties();
printSeventies();
printEighties();
printNinties();

