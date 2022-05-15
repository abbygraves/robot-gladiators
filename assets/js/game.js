// GAME STATES
// "WIN" - Player robot has defeated all enemy-robots
//      * Fight all enemy-robots
//      * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?")
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(playerName, playerAttack, playerHealth);

console.log(enemyNames);
console.log(enemyNames[0]);
console.log(enemyNames[1]);
console.log(enemyNames[2]);
console.log(enemyNames.length);



// ▬▬▬▬▬  FIGHT FUNCTION  ▬▬▬▬▬ 
var fight = function(enemyName) {
  // alert players that they're starting the round
  window.alert("Welcome to Robot Gladiators!");

  // ask player if they'd like to fight or skip
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose");

  // if player chooses to fight, then fight
  if (promptFight === "fight" || promptFight === "FIGHT") {
    // subtract amount in playerAttack from enemyHealth
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    // check enemy's health
    if (enemyHealth <=0) {
      window.alert(enemyName + " has died!");
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.")
    }

    // subtract amount in enemyAttack from playerHealth
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    // check player's health
    if (playerHealth <=0) {
      window.alert(playerName + " has died!");
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }

    // if player chooses to skip
  } else if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
      // subtract money from playermoney for skipping
      playerMoney = playerMoney - 2;
    }
    // if no (false), ask question again by running fight() again
    else {
      fight();
    }
    // if player types something other than "fight" or "skip" in prompt
  } else {
    window.alert("You need to choose a valid option. Try again!");
  }
}; // ▬▬▬▬▬ END OF FIGHT FUNCTION ▬▬▬▬▬


// ⬇︎ "RUN FIGHT" FUNCTION TO START GAME
for(var i = 0; i < enemyNames.length; i++) {
  fight(enemyNames[i]);
}
