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
    this.load.image('start_map', 'assets/start_map.jpg');
    this.load.image('cle', 'assets/cle.png'); 

    for (var i = 1; i<9; i++) {
        this.load.image('player'+i,"assets/player"+i)
    }
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
    
    var inventaire = [];                            //création de l'inventaire sous forme de liste


    cursors = this.input.keyboard.createCursorKeys();
    player = this.physics.add.sprite(100, 450, 'player5');

    player.setBounce(0.2);
    player.setCollideWorldBounds(true);


    //interact = this.input.keyboard.addKey(Phaser.Input.keyboard.keyCodes.E);
    qkey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
    dkey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    zkey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
    skey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    ekey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);


    obj_clef = this.physics.add.group({             //création des objets que le joueur récupère
        key: 'cle',
        setSize: {width: 50, height: 50},
        setXY: { x: 500, y: 500}

    });
    obj_badge = this.physics.add.group({
        key: 'badge',
        setSize: {width: 50, height: 50},
        setXY: { x: 500, y: 500}

    });
    obj_bouteille_vide = this.physics.add.group({
        key: 'bouteille_vide',
        setSize: {width: 50, height: 50},
        setXY: { x: 500, y: 500}

    });

    obj_clef.children.iterate(function (child) {
    
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    
    });




}

function collectKey (player, obj_clef)
{
    obj_clef.disableBody(true, true);
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
    if (ekey.isDown)
    {
        this.physics.add.overlap(player, obj_clef, collectKey, null, this);       //ramasse la clé avec la touche 'E'
    }

    if (qkey.isDown)                            //Allez a gauche
    {
        player.setVelocityY(0);
        player.setVelocityX(-160);
        player.setTexture('player3');
        if (zkey.isDown && qkey.isDown)
        {
            player.setVelocity(-160,-160);
            player.setTexture('player4');
        }
        if (skey.isDown && qkey.isDown)
        {
            player.setVelocity(-160,160);
            player.setTexture('player2');
        }

    }
    else if (dkey.isDown)                      //Allez a droite
    {
        player.setVelocityY(0);
        player.setVelocityX(160);
        player.setTexture('player7');

        if (zkey.isDown && dkey.isDown)
        {
            player.setVelocity(160,-160);
            player.setTexture('player6');
        }
        if (skey.isDown && dkey.isDown)
        {
            player.setVelocity(160,160);
            player.setTexture('player8');
        }

    }
    else if (zkey.isDown)                         //Allez en haut
    {
        player.setVelocityX(0);
        player.setVelocityY(-160);
        player.setTexture('player5');
        if (zkey.isDown && qkey.isDown)
        {
            player.setVelocity(-160,-160);
            player.setTexture('player2');
        }
        if (zkey.isDown &&  dkey.isDown)
        {
            player.setVelocity(160,-160);
            player.setTexture('player6');
        }
    }
    else if (skey.isDown)                       //Allez en bas
    {
        player.setVelocityX(0);
        player.setVelocityY(160);
        player.setTexture('player1');
        if (skey.isDown && dkey.isDown)
        {
            player.setVelocity(160,160);
            player.setTexture('player8');
        }
        if (skey.isDown && qkey.isDown)
        {
            player.setVelocity(-160,160);
            player.setTexture('player2');
        }

    }
    else                                                //S'arreter (ne rien faire)
    {
        player.setVelocityX(0);
        player.setVelocityY(0);
    }
    
    if (zkey.isDown && player.body.touching.down)
    {
        player.setVelocityY(-330);
    }
}
