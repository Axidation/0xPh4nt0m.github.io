// Dynmaically load the sites games
const Games = document.getElementsByClassName("games")[0];
const gamelist = document.getElementById("gamelist");
const gameListLength = gamelist.length;
$("#gamelist").on("change", () => {

    let ChosenGame = gamelist.options;
    let ChosenGameIndex = gamelist.selectedIndex;

    for (i = 0; i < gameListLength; i++) {
        switch (ChosenGameIndex) {
            case i:
                Games.innerHTML = `<embed src="./games/${ChosenGame[ChosenGameIndex].value}.swf" width="720" height="400"> </embed>`
                break;
            default:
                console.log("no game")
        }
    }
})