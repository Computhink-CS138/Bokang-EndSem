let pokemons = ["Pikachu","Raichu","Bulbasaur","Mewtwo","Charizard"];
let yPos;

function setup(){
    createCanvas(200, 300);
    yPos = 100;

    for(let i = 0; i < 6; i++){
        text(pokemons[i - 1], 100, yPos);

        fill("pink");
        textAlign(CENTER, TOP);
        textSize(20);

        yPos += 30;
    }
}


