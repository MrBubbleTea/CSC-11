// Player 1 and 2's Total and Card Total
let p1total = 0;
let p1numcards = 2;
let p2total = 0;
let p2numcards = 2;

/* const suits = ["h", "s", "c", "d"];
const cards = ["a", 2, 3, 4, 5, 6, 7, 8, 9, 10, "j", "q", "k"];

let deck = [];

// Make deck
for (const x of suits) {
    for (const y of cards) {
        let card = {Suit: x, Card: cards[y]};
        deck.push(card);
    }
}

console.log(deck); */


/* const playerhand = [
    { house: "d", value: 2 },
    { house: "d", value: 2 },
    { house: "d", value: 2 },
    { house: "d", value: 2 },
    { house: "d", value: 2 }
];

let card = {}

playerhand.push(card);

playerhand[0].card

for (let i = 0; i < playerhand.length; i++) {
    if (typeof(playerhand.card) == number) {
        playerpoints += playerhand.card;
    } else if (playerhand.card == "j" || playerhand.card == "q" || playerhand.card == "k") {
        playerpoints += 10;
    } else if (playerhand.card == "a") {
        // Ace logic here
    }
} */

// Initialize card variables
let pcard3;
let pcard4;
let pcard5;
let pcard6;
let pcard7;



// Dealers Total and Card Total
let dealertotal = 0;
let dealernumcards = 1;

// Initilize Dealer's card variables
let dcard2;
let dcard4;
let dcard5;

// Player 1's Hit Function
function hitp1() {

    if (p1total >= 21) { return }

    // Player 1's Card 3 to 5 Math
    if (p1numcards == 2) {
        pcard3 = Math.floor(52 * Math.random()) + 1;
        document.getElementById("3").src = `images/${pcard3}.bmp`;
    } else if (p1numcards == 3) {
        pcard4 = Math.floor(52 * Math.random()) + 1;
        document.getElementById("4").src = `images/${pcard4}.bmp`;
    } else if (p1numcards == 4) {
        pcard5 = Math.floor(52 * Math.random()) + 1;
        document.getElementById("5").src = `images/${pcard5}.bmp`;
    }
    else if (p1numcards == 5) {
        pcard6 = Math.floor(52 * Math.random()) + 1;
        document.getElementById("6").src = `images/${pcard6}.bmp`;
    }
    else if (p1numcards == 6) {
        pcard7 = Math.floor(52 * Math.random()) + 1;
        document.getElementById("7").src = `images/${pcard7}.bmp`;
    }

    //Player 1's total Counter (Card 3 to 5)
    if((pcard3==1)||(pcard3==14)||(pcard3==27)||(pcard3==40)) { p1total=p1total+1; }

    if((pcard3==2)||(pcard3==15)||(pcard3==28)||(pcard3==41)) { p1total=p1total+2; }

    if((pcard3==3)||(pcard3==16)||(pcard3==29)||(pcard3==42)) { p1total=p1total+3; }

    if((pcard3==4)||(pcard3==17)||(pcard3==30)||(pcard3==43)) { p1total=p1total+4; }

    if((pcard3==5)||(pcard3==18)||(pcard3==31)||(pcard3==44)) { p1total=p1total+5; }

    if((pcard3==6)||(pcard3==19)||(pcard3==32)||(pcard3==45)) { p1total=p1total+6; }

    if((pcard3==7)||(pcard3==20)||(pcard3==33)||(pcard3==46)) { p1total=p1total+7; }

    if((pcard3==8)||(pcard3==21)||(pcard3==34)||(pcard3==47)) { p1total=p1total+8; }

    if((pcard3==9)||(pcard3==22)||(pcard3==35)||(pcard3==48)) { p1total=p1total+9; }

    if((pcard3==10)||(pcard3==23)||(pcard3==36)||(pcard3==49)) { p1total=p1total+10; }

    if((pcard3==11)||(pcard3==24)||(pcard3==37)||(pcard3==50)) { p1total=p1total+10; }

    if((pcard3==12)||(pcard3==25)||(pcard3==38)||(pcard3==51)) { p1total=p1total+10; }

    if((pcard3==13)||(pcard3==26)||(pcard3==39)||(pcard3==52)) { p1total=p1total+10; }

    document.getElementById("p1").innerHTML = p1total;

    p1numcards++;
}

// Reworked hitp1
function hitp1REWORK() {

    if (p1total >= 21) { return }

    // Deal card
    // TODO: sync x and y to coreect card in file system - might need to change filenames
    let x = Math.floor(4 * Math.random());
    let y = Math.floor(12 * Math.random());
    let card = { suit: x, card: y }


    
    if (p1numcards == 2) {
        pcard3 = Math.floor(52 * Math.random()) + 1;
        document.getElementById("3").src = `images/${pcard3}.bmp`;
    }

    document.getElementById("p1").innerHTML = p1total;

    p1numcards++;
}




// Player 1's Card 1 and 2 Math
let pcard1 = Math.floor(52 * Math.random()) + 1;
document.getElementById("1").src = `images/${pcard1}.bmp`;

let pcard2 = Math.floor(52 * Math.random()) + 1;
document.getElementById("2").src = `images/${pcard2}.bmp`;

document.getElementById("p1").innerHTML = p1total;

//Dealer's Card 1 and 2
let dcard1 = Math.floor(52 * Math.random()) + 1;
document.getElementById("dealer1").src = `images/${dcard1}.bmp`;

//Dealer's Hidden Card Math (2 to 4)
dcard2 = Math.floor(52 * Math.random()) + 1;
dcard2 = Math.floor(52 * Math.random()) + 1;
dcard4 = Math.floor(52 * Math.random()) + 1;

function standp1() {
    console.log(dealertotal);

    if (dealertotal >= 17) {return}
    
    while (dealertotal <= 17) { 
    
     document.getElementById("dealer").innerHTML = dealertotal;
        
        if (dealernumcards == 1) {
            document.getElementById("dealer2").src = `images/${dcard2}.bmp`;}
            else if (dealernumcards == 2) { 
            document.getElementById("dealer3").src = `images/${dcard3}.bmp`;}
            else if (dealernumcards == 3) {   
            document.getElementById("dealer4").src = `images/${dcard4}.bmp`;}

     dealernumcards++;
    }
}



//--------------------------Player 1's Total Counter (1&2)----------------------------------
if((pcard1==1)||(pcard1==14)||(pcard1==27)||(pcard1==40)) { p1total=p1total+1; }

if((pcard1==2)||(pcard1==15)||(pcard1==28)||(pcard1==41)) { p1total=p1total+2; }

if((pcard1==3)||(pcard1==16)||(pcard1==29)||(pcard1==42)) { p1total=p1total+3; }

if((pcard1==4)||(pcard1==17)||(pcard1==30)||(pcard1==43)) { p1total=p1total+4; }

if((pcard1==5)||(pcard1==18)||(pcard1==31)||(pcard1==44)) { p1total=p1total+5; }

if((pcard1==6)||(pcard1==19)||(pcard1==32)||(pcard1==45)) { p1total=p1total+6; }

if((pcard1==7)||(pcard1==20)||(pcard1==33)||(pcard1==46)) { p1total=p1total+7; }

if((pcard1==8)||(pcard1==21)||(pcard1==34)||(pcard1==47)) { p1total=p1total+8; }

if((pcard1==9)||(pcard1==22)||(pcard1==35)||(pcard1==48)) { p1total=p1total+9; }

if((pcard1==10)||(pcard1==23)||(pcard1==36)||(pcard1==49)) { p1total=p1total+10; }

if((pcard1==11)||(pcard1==24)||(pcard1==37)||(pcard1==50)) { p1total=p1total+10; }

if((pcard1==12)||(pcard1==25)||(pcard1==38)||(pcard1==51)) { p1total=p1total+10; }

if((pcard1==13)||(pcard1==26)||(pcard1==39)||(pcard1==52)) { p1total=p1total+10; }


if((pcard2==1)||(pcard2==14)||(pcard2==27)||(pcard2==40)) { p1total=p1total+1; }

if((pcard2==2)||(pcard2==15)||(pcard2==28)||(pcard2==41)) { p1total=p1total+2; }

if((pcard2==3)||(pcard2==16)||(pcard2==29)||(pcard2==42)) { p1total=p1total+3; }

if((pcard2==4)||(pcard2==17)||(pcard2==30)||(pcard2==43)) { p1total=p1total+4; }

if((pcard2==5)||(pcard2==18)||(pcard2==31)||(pcard2==44)) { p1total=p1total+5; }

if((pcard2==6)||(pcard2==19)||(pcard2==32)||(pcard2==45)) { p1total=p1total+6; }

if((pcard2==7)||(pcard2==20)||(pcard2==33)||(pcard2==46)) { p1total=p1total+7; }

if((pcard2==8)||(pcard2==21)||(pcard2==34)||(pcard2==47)) { p1total=p1total+8; }

if((pcard2==9)||(pcard2==22)||(pcard2==35)||(pcard2==48)) { p1total=p1total+9; }

if((pcard2==10)||(pcard2==23)||(pcard2==36)||(pcard2==49)) { p1total=p1total+10; }

if((pcard2==11)||(pcard2==24)||(pcard2==37)||(pcard2==50)) { p1total=p1total+10; }

if((pcard2==12)||(pcard2==25)||(pcard2==38)||(pcard2==51)) { p1total=p1total+10; }

if((pcard2==13)||(pcard2==26)||(pcard2==39)||(pcard2==52)) { p1total=p1total+10; }
//-------------------------------------END------------------------------------------

//----------------------------------Dealer's Total Counter (1&2)--------------------------
if((dcard1==1)||(dcard1==14)||(dcard1==27)||(dcard1==40)) { dealertotal=dealertotal+1; }

if((dcard1==2)||(dcard1==15)||(dcard1==28)||(dcard1==41)) { dealertotal=dealertotal+2; }

if((dcard1==3)||(dcard1==16)||(dcard1==29)||(dcard1==42)) { dealertotal=dealertotal+3; }

if((dcard1==4)||(dcard1==17)||(dcard1==30)||(dcard1==43)) { dealertotal=dealertotal+4; }

if((dcard1==5)||(dcard1==18)||(dcard1==31)||(dcard1==44)) { dealertotal=dealertotal+5; }

if((dcard1==6)||(dcard1==19)||(dcard1==32)||(dcard1==45)) { dealertotal=dealertotal+6; }

if((dcard1==7)||(dcard1==20)||(dcard1==33)||(dcard1==46)) { dealertotal=dealertotal+7; }

if((dcard1==8)||(dcard1==21)||(dcard1==34)||(dcard1==47)) { dealertotal=dealertotal+8; }

if((dcard1==9)||(dcard1==22)||(dcard1==35)||(dcard1==48)) { dealertotal=dealertotal+9; }

if((dcard1==10)||(dcard1==23)||(dcard1==36)||(dcard1==49)) { dealertotal=dealertotal+10; }

if((dcard1==11)||(dcard1==24)||(dcard1==37)||(dcard1==50)) { dealertotal=dealertotal+10; }

if((dcard1==12)||(dcard1==25)||(dcard1==38)||(dcard1==51)) { dealertotal=dealertotal+10; }

if((dcard1==13)||(dcard1==26)||(dcard1==39)||(dcard1==52)) { dealertotal=dealertotal+10; }


if((dcard2==1)||(dcard2==14)||(dcard2==27)||(dcard2==40)) { dealertotal=dealertotal+1; }

if((dcard2==2)||(dcard2==15)||(dcard2==28)||(dcard2==41)) { dealertotal=dealertotal+2; }
        
if((dcard2==3)||(dcard2==16)||(dcard2==29)||(dcard2==42)) { dealertotal=dealertotal+3; }
        
if((dcard2==4)||(dcard2==17)||(dcard2==30)||(dcard2==43)) { dealertotal=dealertotal+4; }
        
if((dcard2==5)||(dcard2==18)||(dcard2==31)||(dcard2==44)) { dealertotal=dealertotal+5; }
        
if((dcard2==6)||(dcard2==19)||(dcard2==32)||(dcard2==45)) { dealertotal=dealertotal+6; }
        
if((dcard2==7)||(dcard2==20)||(dcard2==33)||(dcard2==46)) { dealertotal=dealertotal+7; }
        
if((dcard2==8)||(dcard2==21)||(dcard2==34)||(dcard2==47)) { dealertotal=dealertotal+8; }
        
if((dcard2==9)||(dcard2==22)||(dcard2==35)||(dcard2==48)) { dealertotal=dealertotal+9; }
        
if((dcard2==10)||(dcard2==23)||(dcard2==36)||(dcard2==49)) { dealertotal=dealertotal+10; }
        
if((dcard2==11)||(dcard2==24)||(dcard2==37)||(dcard2==50)) { dealertotal=dealertotal+10; }
        
if((dcard2==12)||(dcard2==25)||(dcard2==38)||(dcard2==51)) { dealertotal=dealertotal+10; }
        
if((dcard2==13)||(dcard2==26)||(dcard2==39)||(dcard2==52)) { dealertotal=dealertotal+10; }
        
        

//------------------------------------------END-----------------------------------------



document.getElementById("dealer").innerHTML = dealertotal

