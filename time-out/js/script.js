document.addEventListener("dbclick", () => {
    document.documentElement.requestFullscreen().catch((e) => {
        console.log(e);
    });
});


var config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    scene: {
        preload: preload,
        create: create,
        update: update
    }  
};

var game = new Phaser.Game(config);

function preload() {
    this.load.image('start_map', 'assets/start_map.jpg');
    this.load.image('player', 'assets/player1.png');
}

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

    //création du sprite
    var sprite = this.add.sprite(960, 540, 'player');
    //taille du joueur
    player.widht = 60;
    player.height = 60;
    //changer le pooint d'encrage
    sprite.anchor.setTo(0.5, 0.9);
    //modifier sa position
    sprite.positioon.setToo(x, y);

    var zKey = game.input.keyboard.addKey(Phaser.Keyboard.Z);
    var sKey = game.input.keyboard.addKey(Phaser.Keyboard.S);
    var dKey = game.input.keyboard.addKey(Phaser.Keyboard.D);
    var qKey = game.input.keyboard.addKey(Phaser.Keyboard.Q);
}

function update() {

    //enregistrement d'un évènement du clavier

    if (zkey.isDown) {
        sprite.y++
    }
    if (skey.isDown) {
        sprite.y--
    }
    if (dkey.isDown) {
        sprite.x++
    }
    if (qkey.isDown) {
        sprite.x--
    }
}

this.add.image(0, 0, 'sky').setOrigin(0, 0)