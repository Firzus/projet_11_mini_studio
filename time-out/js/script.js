var config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    scene: {
        preload: preload,
        create: create,
    }  
};

var game = new Phaser.Game(config);

function preload() {
    this.load.image('start_map', 'assets/map.png'); 
    this.load.image('player1', 'assets/player1.png');
}

function create() {
    this.add.image(960, 540, 'start_map');
    var r1 = this.add.rectangle(1200, 110, 40, 40);
    var r2 = this.add.rectangle(1100, 110, 40, 40);
    var r3 = this.add.rectangle(1000, 110, 40, 40);
    r1.setStrokeStyle(2, 0x1a65ac);
    r2.setStrokeStyle(2, 0x008000);
    r3.setStrokeStyle(2, 0xff0000); 

    //création du sprite
    //var sprite = game.add.sprite(640, 360, 'player');
    const sprite = this.add.image(x, y, 'player1');         


    //taille du joueur
    sprite.widht = 100
    sprite.height = 100
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