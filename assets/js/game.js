// GAME STATES
// "WIN" - Player robot has defeated all enemy-robots
//      * Fight all enemy-robots
//      * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);
  return value;
};


// ⚠️ ––––––––––––––––––– FIGHT FUNCTION ––––––––––––––––––– ⚠️
var fight = function(enemy) {
  // ⬇︎ repeat and execute as long as enemy-robot is alive
  while(playerInfo.health > 0 && enemy.health > 0) {
    // ✕  DISABLED –– window.prompt("Welcome to Robot Gladiators!");

    // ⬇︎ ask player if they'd like to fight or skip
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose");

    // ⬇︎ if picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // ⬇︎ confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to skip?");

      // ⬇︎ if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
        // ⬇︎ subtract money from playerInfo.money for skipping
        playerInfo.money = Math.max(0,playerInfo.money - 10);
        console.log("playerInfo.money", playerInfo.money);
        break;
      }
    }

    // ⬇︎ subtract playerInfo.attack variable from enemy.health
    var damage = randomNumber(playerInfo.attack -3, playerInfo.attack);
    enemy.health = Math.max(0, enemy.health - damage);
    console.log(
      playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
    );

    // ⬇︎ check enemy's health
    if (enemy.health <= 0) {
      window.alert(enemy.name + " has died!");

      // award player money for winning
      playerInfo.money = playerInfo.money + 20;
      // leave while() since enemy is dead
      break;
    } 
    else {
      window.alert(enemy.name + " still has " + enemy.health + " health left.")
    }

    // ⬇︎ subtract enemy.attack variable from playerInfo.health
    var damage = randomNumber(enemy.attack - 3, enemy.attack);
    playerInfo.health = Math.max(0, playerInfo.health - damage);
    console.log(
      enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
    );

    // ⬇︎ check player's health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + " has died!");
      // ⬇︎ leave while loop if player is dead
      break;
    } 
    else {
      window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
    }
    
    // ✕ DISABLED –– Invalid entry
    //else {
      //window.alert("You need to choose a valid option. Try again!");
    
  }
}; // ⚠️ ––––––––––––––––––– END OF FIGHT FUNCTION ––––––––––––––––––– ⚠️



// ⚠️ ––––––––––––––––––– START GAME FUNCTION ––––––––––––––––––– ⚠️
var startGame = function () {

  // ⬇︎ reset player stats
  playerInfo.reset();
  for(var i = 0; i < enemyInfo.length; i++) {
    if (playerInfo.health > 0) {
      // ⬇︎ let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1) + " 🏁");

      // ⬇︎ pick new enemy to fight based on the index of the enemy.names array
      var pickedEnemyObj = enemyInfo[i];

      // ⬇︎ reset enemy.health before starting new fight
      pickedEnemyObj.health = randomNumber(40, 60);

      /* ⬇︎ pass the pickedEnemyObj variable's value into the fight function, where it will 
           assume the value of the enemy.name parameter */
      fight(pickedEnemyObj);

      // ⬇︎ if we're not at the last enemy in the array
      if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
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
  if (playerInfo.health > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + " 🎉");
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
      playerInfo.refillHealth();
      break;
    case "UPGRADE":
    case "upgrade":
      playerInfo.upgradeAttack();
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




// ⛔️ –––– GAME INFORMATION╱VARIABLES –––– ⛔️

// PLAYER INFO
var getPlayerName = function() {
  var name = "";
  while (name === "" || name === null) {
    name = prompt("What is your robot's name? 🤖");
  }
  console.log("Your robot's name is " + name);
  return name;
};

var playerInfo = {
  name: getPlayerName(),
  health: 100,
  attack: 10,
  money: 10,
  reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  },
  refillHealth: function() {
    if (this.money >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");
      this.health += 20;
      this.money -= 7;
    } 
    else {
      window.alert("You don't have enough money!");
    }
  },
  upgradeAttack: function () {
    if (this.money >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
      this.attack += 6;
      this.money -= 7;
    } 
    else {
      window.alert("You don't have enough money!");
    }
  }
};

console.log(playerInfo.name, playerInfo.attack, playerInfo.health);


// ENEMY INFO
var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(10, 14)
  },
  {
    name: "Amy Android",
    attack: randomNumber(10, 14)
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10, 14)
  }
];


console.log(enemyInfo);
console.log(enemyInfo[0]);
console.log(enemyInfo[0].name);
console.log(enemyInfo[0]['attack']);

// ⛔️ –––– End of GAME INFORMATION╱VARIABLES –––– ⛔️




// ✅ –––– START GAME WHEN PAGE LOADS╱RUN GAME –––– ✅
startGame();
