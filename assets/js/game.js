var playerName = window.prompt("What is your robot's name?")
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
  // ALERT PLAYERS THAT THEY'RE STARTING THE ROUND
  window.alert("Welcome to Robot Gladiators!");
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose");

  // IF PLAYER CHOOSES TO FIGHT, THEN FIGHT
  if (promptFight === "fight" || promptFight === "FIGHT") {
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    // CHECK ENEMY'S HEALTH
    if (enemyHealth <=0) {
      window.alert(enemyName + " had died!");
    }
    else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.")
    }

    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    // CHECK PLAYER'S HEALTH
    if (playerHealth <=0) {
      window.alert(playerName + " has died!");
    }
    else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    // IF PLAYER CHOOSES TO SKIP
  } else if (promptFight === "skip" || promptFight === "SKIP") {
    // CONFIRM PLAYER WANTS TO SKIP
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // IF YES (TRUE), LEAVE FIGHT
    if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
      // SUBTRACT MONEY FROM playerMoney FOR SKIPPING
      playerMoney = playerMoney - 2;
    }
    // IF NO (FALSE), ASK QUESTION AGAIN BY RUNNING FIGHT() AGAIN
    else {
      fight();
    }
  } else {
    window.alert("You need to choose a valid option. Try again!");
  }
  
  
};


fight();
