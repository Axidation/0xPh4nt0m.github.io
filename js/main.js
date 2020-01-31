// Dynmaically load the sites games
const Games = document.getElementsByClassName("games")[0];
const gamelist = document.getElementById("gamelist");

$("#gamelist").on("change", () => {

    let ChosenGame = gamelist.options;
    let ChosenGameIndex = gamelist.selectedIndex;
    switch (ChosenGameIndex) {
        case 0:
            Games.innerHTML = `<embed src="./games/${ChosenGame[ChosenGameIndex].value}.swf" width="550" height="400"> </embed>`
            console.log("test")
            break;
        case 1:
            console.log("test 1")
            break;
        case 2:
            console.log("test2 ")
            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            break;
        case 6:
            break;
        case 7:
            break;
        case 8:
            break;
        case 9:
            break;
        default:
            console.log("no game")

    }

})