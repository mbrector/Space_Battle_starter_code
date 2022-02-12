class Ships{
    constructor(hull, firepower, accuracy){
    this.hull = hull
    this.firepower = firepower
    this.accuracy = accuracy
    this.alive = true
}
}

class USSSchwarzenegger extends Ships{
    constructor(hull, firepower, accuracy){
        super(hull, firepower, accuracy)
}
attack(opp)
    {
        let rdmN = Math.random();

        if (this.accuracy > rdmN) 
        {
            alert('We hit ' + this.firepower + ' on their ' + opp.hull + ' hull')
            console.log('We hit ' + this.firepower + ' on their ' + opp.hull + ' hull')
            opp.hull -= this.firepower;
            if (opp.hull <= 0) {
                opp.alive = false;
                alert('We eradicated the enemy!')
                console.log('We eradicated the enemy!');
            }
        } 
        else 
        {
            alert('We missed!')
            console.log('We missed!')
        }
        alert('Alien has ' + opp.hull + ' hull left.')
        console.log('Alien has ' + opp.hull + ' hull left.');
    }
}

class Enemy extends Ships{
    constructor(hull, firepower, accuracy){
        super(hull, firepower, accuracy)
        this.hull = Math.floor(Math.random() * 4) + 3
        this.firepower = Math.floor(Math.random() * 3) + 2
        this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10  
}
attack(opp)
{
    let random = Math.random();
    
    if (this.accuracy > random)
    {
        alert('They hit ' + this.firepower + ' on our ' + opp.hull + ' hull!')
        console.log('They hit ' + this.firepower + ' on our ' + opp.hull + ' hull!')
        opp.hull -= this.firepower;
        if (opp.hull <= 0) {
            opp.alive = false;
            alert('We have perished.')
            console.log('We have perished.');
        }
    } 
    else 
    {
        alert('They missed!')
        console.log('They missed!')
    }
    alert('We have ' + opp.hull + ' hull left!')
    console.log('We have ' + opp.hull + ' hull left!');
}
}

let killerB = new USSSchwarzenegger(20, 5, 0.7)

let enemies = [];
for (let i = 0; i < 6; i++)
{
    enemies[i] = new Enemy();
}

function continueBattle (){
    let cont = prompt("Should we attack the enemy?", "Yes or No")
        if(cont.toLowerCase() === "yes"){
          return true
     
      }else{
          
          (cont.toLowerCase()==='no')
              alert("Mission failed.")
              return false
  
      }
  }

function battle(we, enemy){
    for(let i = 0; i < enemy.length; i++){
        document.querySelector("#enemyNums").innerHTML = `Hull : ${enemy[i].hull} <br> FirePower : ${enemy[i].firepower} <br> Accuracy : ${enemy[i].accuracy}`
        document.querySelector("#playerNums").innerHTML = `Hull : ${we.hull} <br> FirePower : ${we.firepower} <br> Accuracy : ${we.accuracy}`
        if(we.alive){
            alert("\n\nBattle " + (i+1))      
            console.log("\n\nBattle " + (i+1))
        }
        if(continueBattle()=== true){
        while (we.alive && enemy[i].alive){  
            we.attack(enemy[i]);
            document.querySelector("#enemyNums").innerHTML = `Hull : ${enemy[i].hull} <br> FirePower : ${enemy[i].firepower} <br> Accuracy : ${enemy[i].accuracy}`
            if (enemy[i].alive == true)
            {
                enemy[i].attack(we);
                document.querySelector("#playerNums").innerHTML = `Hull : ${we.hull} <br> FirePower : ${we.firepower} <br> Accuracy : ${we.accuracy}`
            }
        }
    }
    else{break}
    }
}


console.log(enemies)

// console.log(killerB)

battle(killerB, enemies)

