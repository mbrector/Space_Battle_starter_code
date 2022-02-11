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
            console.log('We hit ' + this.firepower + ' on their ' + opp.hull + ' hull')
            opp.hull -= this.firepower;
            if (opp.hull <= 0) {
                opp.alive = false;
                console.log('We eradicated the enemy!');
            }
        } 
        else 
        {
            console.log('We missed!')
        }
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
            console.log('They hit ' + this.firepower + ' on our ' + opp.hull + ' hull!')
            opp.hull -= this.firepower;
            if (opp.hull <= 0) {
                opp.alive = false;
                console.log('We have perished.');
            }
        } 
        else 
        {
            console.log('They missed!')
        }
        console.log('We have ' + opp.hull + ' hull left!');
    }
}

function battle(we, enemy)
{
    for(let i = 0; i < enemy.length; i++)
    {
        if(we.alive){
                  console.log("\n\nBattle " + (i+1))
        }
        while (we.alive && enemy[i].alive)
        {  
            we.attack(enemy[i]);
            if (enemy[i].alive == true)
            {
                enemy[i].attack(we);
            }
        }
    }
}

let killerB = new USSSchwarzenegger(20, 5, 0.7)

let enemies = [];

for (let i = 0; i < 6; i++)
{
    enemies[i] = new Enemy();
}

console.log(enemies)

// console.log(killerB)

battle(killerB, enemies)

let start = prompt('Can you defend your universe?', 'Yes or No')