// Event handler for the button element
document.getElementById("button").onclick = startBattle;

// Define startBattle
function startBattle() {
    // Clear old messages in the document from previous runs
    document.getElementById("victory").textContent = "";
    document.getElementById("defeat").textContent = "";

    let action = window.prompt("You're walking through New York City, and The Spot appears with the threat of creasing your Jays. \n\nDo you FIGHT The Spot? \n\nDo you RUN from The Spot? \n\nDo you ROAST The Spot?");

    // Check the user's choice
    if (action !== null) {
        action = action.toUpperCase();
        switch (action) {
            case "FIGHT":
                fightBattle();
                break;
            case "RUN":
                runBattle();
                break;
            case "ROAST":
                roastBattle();
                break;
            default:
                // Handle an invalid choice
                window.alert("Invalid choice. Please choose FIGHT, RUN, or ROAST.");
                break;
        }
    }
}

// Define the fightBattle function
function fightBattle() {
    let question1 = window.prompt("The Spot challenges you to a dance-off. Do you accept the challenge? (YES/NO)");
    let question2 = window.prompt("The dance battle begins. Are your dance moves better than The Spot's? (YES/NO)");

    question1 = question1.toUpperCase();
    question2 = question2.toUpperCase();

    if (question1 === "YES" && question2 === "YES") {
        document.getElementById("victory").textContent = "You accepted the dance-off and outshined The Spot with your incredible dance moves. You win!";
        document.getElementById("win").play();
    } else {
        document.getElementById("defeat").textContent = "You accepted the dance-off, but The Spot's dance moves were too good. You lost the battle!";
        document.getElementById("lose").play();
    }
}

// Define the runBattle function
function runBattle() {
    let question1 = window.prompt("The Spot starts chasing you. Do you run faster than The Spot? (YES/NO)");
    let question2 = window.prompt("You come across a hidden alley. Do you escape into it without getting caught? (YES/NO)");

    question1 = question1.toUpperCase();
    question2 = question2.toUpperCase();

    if (question1 === "YES" && question2 === "YES") {
        document.getElementById("victory").textContent = "You managed to outrun The Spot and escaped safely. You win!";
        document.getElementById("win").play();
    } else {
        document.getElementById("defeat").textContent = "You tried to run, but The Spot was faster and caught you. You lost the battle!";
        document.getElementById("lose").play();
    }
}

// Define the roastBattle function
function roastBattle() {
    let question1 = window.prompt("You start roasting The Spot with your clever insults. Is your roasting game strong? (YES/NO)");
    let question2 = window.prompt("The Spot is getting embarrassed. Do you keep roasting until it leaves in shame? (YES/NO)");

    question1 = question1.toUpperCase();
    question2 = question2.toUpperCase();

    if (question1 === "YES" && question2 === "YES") {
        document.getElementById("victory").textContent = "Your witty insults drove The Spot away in shame. You win!";
        document.getElementById("win").play();
    } else {
        document.getElementById("defeat").textContent = "Your roasting game wasn't strong enough, and The Spot stood its ground. You lost the battle!";
        document.getElementById("lose").play();
    }
}
