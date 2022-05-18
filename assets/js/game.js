// GAME STATES
// "WIN" - Player robot has defeated all enemy-robots
//      * Fight all enemy-robots
//      * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name? 🤖")
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);
  return value;
};

console.log(playerName, playerAttack, playerHealth);
console.log(enemyNames);
console.log(enemyNames[0]);
console.log(enemyNames[1]);
console.log(enemyNames[2]);
console.log(enemyNames.length);



// ⚠️ ––––––––––––––––––– FIGHT FUNCTION ––––––––––––––––––– ⚠️
var fight = function(enemyName) {
  // ⬇︎ repeat and execute as long as enemy-robot is alive
  while(playerHealth > 0 && enemyHealth > 0) {
    // ✕  DISABLED –– window.prompt("Welcome to Robot Gladiators!");

    // ⬇︎ ask player if they'd like to fight or skip
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose");

    // ⬇︎ if picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // ⬇︎ confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to skip?");

      // ⬇︎ if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // ⬇︎ subtract money from playerMoney for skipping
        playerMoney = Math.max(0,playerMoney - 10);
        console.log("playerMoney", playerMoney);
        break;
      }
    }

    // ⬇︎ subtract playerAttack variable from enemyHealth
    var damage = randomNumber(playerAttack -3, playerAttack);
    enemyHealth = Math.max(0, enemyHealth - damage);
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    // ⬇︎ check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");

      // award player money for winning
      playerMoney = playerMoney + 20;
      // leave while() since enemy is dead
      break;
    } 
    else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.")
    }

    // ⬇︎ subtract enemyAttack variable from playerHealth
    var damage = randomNumber(enemyAttack - 3, enemyAttack);
    playerHealth = Math.max(0, playerHealth - damage);
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    // ⬇︎ check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      // ⬇︎ leave while loop if player is dead
      break;
    } 
    else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    
    // ✕ DISABLED –– Invalid entry
    //else {
      //window.alert("You need to choose a valid option. Try again!");
    
  }
}; // ⚠️ ––––––––––––––––––– END OF FIGHT FUNCTION ––––––––––––––––––– ⚠️



// ⚠️ ––––––––––––––––––– START GAME FUNCTION ––––––––––––––––––– ⚠️
var startGame = function () {
  // ⬇︎ reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10; 
  for(var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      // ⬇︎ let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it// let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1) + " 🏁");

      // ⬇︎ pick new enemy to fight based on the index of the enemyNames array
      var pickedEnemyName = enemyNames[i];

      // ⬇︎ reset enemyHealth before starting new fight
      enemyHealth = randomNumber(40, 60);

      // ⬇︎ pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter// pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
      fight(pickedEnemyName);

      // ⬇︎ if we're not at the last enemy in the array
      if (playerHealth > 0 && i < enemyNames.length - 1) {
        // ⬇︎ ask player wants to shop before next round
        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
      
        // ⬇︎ if yes, take player to store() function
        if (storeConfirm) {
          shop();
        } 
      }
    }   
    else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
  }
  // ⬇︎ after loop ends, player either out of health or enemies to fight, so run endGame function
  endGame();
};
// ⚠️ ––––––––––––––––––– End of START GAME FUNCTION ––––––––––––––––––– ⚠️



// ⚠️ ––––––––––––––––––– END GAME FUNCTION ––––––––––––––––––– ⚠️
var endGame = function() {
  // ⬇︎ if player still alive, player wins!
  if (playerHealth > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + " 🎉");
  }
  else {
    window.alert("You've lost your robot in battle.");
  }
  // ⬇︎ ask player if they'd like to play again
  var playerAgainConfirm = window.confirm("Would you like to play again?");

  if (playerAgainConfirm) {
    // ⬇︎ restart the game
    startGame();
  }
  else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};
// ⚠️ ––––––––––––––––––– End of END GAME FUNCTION ––––––––––––––––––– ⚠️



// ⚠️ –––––––––––––––––––  SHOP FUNCTION ––––––––––––––––––– ⚠️
var shop = function() {
  // ⬇︎ ask player what they'd like to do
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
  );

  // ⬇︎ use switch to carry out action
  switch (shopOptionPrompt) {
    case "REFILL":
    case "refill":
      if (playerMoney >= 7) {
        window.alert("Refilling player's health by 20 for 7 dollars.");

        // ⬇︎ increase health and decrease money
        playerHealth = playerHealth + 20;
        playerMoney = playerMoney - 7;
      } 
      else {
        window.alert("You don't have enough money!")
      }

      break;
    case "UPGRADE":
    case "upgrade":
      if (playerMoney >= 7) {
        window.alert("Upgrading player's attack by 6 for 7 dollars.");

        // ⬇︎ increase attack and decrease money
        playerAttack = playerAttack + 6;
        playerMoney = playerMoney - 7;
      }
      else {
        window.alert("You don't have enough money!");
      }

      break;
    case "LEAVE":
    case "leave":
      window.alert("Leaving the store.");

      // ⬇︎ do nothing, so function will end
      break;
    default:
      window.alert("You did not pick a valid option. Try again.");

      // ⬇︎ call shop() again to force player to pick a valid option
      shop();
      break;
  }
};
// ⚠️ –––––––––––––––––––  End of SHOP FUNCTION ––––––––––––––––––– ⚠️






// ⚠️ –––– START GAME WHEN PAGE LOADS
startGame();
