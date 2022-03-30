document.addEventListener("dbclick", () => {
    document.documentElement.requestFullscreen().catch((e) => {
        console.log(e);
    });
});


var config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update,
    }  
};

var game = new Phaser.Game(config);


function preload() {
    this.load.image('start_map', 'assets/map.png'); 
    this.load.image('player1', 'assets/player1.png');
    this.load.image('player2', 'assets/player2.png');
    this.load.image('dude', 'assets/player1.png' );
}
var player;
var platforms;

function create() {
    this.add.image(0, 0,'start_map').setOrigin(0, 0); 
    var r1 = this.add.rectangle(1200, 110, 40, 40);
    var r2 = this.add.rectangle(1100, 110, 40, 40);
    var r3 = this.add.rectangle(1000, 110, 40, 40);
    r1.setStrokeStyle(2, 0x1a65ac);
    r2.setStrokeStyle(2, 0x008000);
    r3.setStrokeStyle(2, 0xff0000);
    
    //Création des cellules
    var cellule_part_top = this.add.triangle(800, 600, 0, 30, 50, 0, 100, 30);
    var cellule_part_bot = this.add.triangle(800, 600, 0, 30, 50, 60, 100, 30);
    cellule_part_top.setStrokeStyle(1, 0x333333);
    cellule_part_bot.setStrokeStyle(1, 0x333333);

    /*création du sprite
    var x=400;
    var y=400;
    var sprite = this.add.sprite(x, y, 'player1');
    //variable de déplacement du joueurs
    var cursors = this.input.keyboard.createCursorKeys();
    //taille du joueur
    player.widht = 60;
    player.height = 60;
    //changer le pooint d'encrage
    sprite.anchor.setTo(0.5, 0.9);
    //modifier sa position
    sprite.positioon.setToo(x, y);*/
    
    cursors = this.input.keyboard.createCursorKeys();
    player = this.physics.add.sprite(100, 450, 'dude');

    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

}

function update() {

    /*enregistrement d'un évènement du clavier

    if (cursors.up.isDown) {
        sprite.y = 500;
        x=500;sz
    }
    if (cursors.right.isDown) {
        sprite.x = 500;
    }
    if (cursors.down.isDown) {
        y--;
    }
    if (cursors.left.isDown) {
        y--;
    }*/

    if (cursors.left.isDown)
    {
        player.setVelocityX(-160);
        player('player2');git
    }
    else if (cursors.right.isDown)
    {
        player.setVelocityX(160);
    }
    else if (cursors.up.isDown)
    {
        player.setVelocityY(-160);
    }
    else if (cursors.down.isDown)
    {
        player.setVelocityY(160);
    }

    /*else if (cursors.left.isDown)
    {
        player.setVelocityX(-160);
        player.setVelocityY(-160);            
    }
    else if (cursors.right.isDown && cursors.up.isDown)
    {
        player.setVelocityX(160);
        player.setVelocityY(-160);            
    }
    else if (cursors.left.isDown && cursors.down.isDown)
    {
        player.setVelocityX(-160);
        player.setVelocityY(160);
    }
    else if (cursors.right.isDown && cursors.down.isDown)
    {
        player.setVelocityX(160);
        player.setVelocityY(160);
    }*/

    else
    {
        player.setVelocityX(0);
        player.setVelocityY(0);
    }
    
    if (cursors.up.isDown && player.body.touching.down)
    {
        player.setVelocityY(-330);
    }
}
