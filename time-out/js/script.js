
var game = new Phaser.Game(config);
<<<<<<< HEAD


function preload() {                                                //chargement des image du jeu

    this.load.image('start_map', 'assets/start_map.jpg');           //map teste

    this.load.image('cle', 'assets/props/Cle_blanche.png');         //objet recupérable
    this.load.image('badge', 'assets/props/Badge_v2.png');    
    this.load.image('crowbar', 'assets/props/crowbar.png'); 
    this.load.image('bouteille_vide', 'assets/props/Bouteille_vide_v2.png');
    this.load.image('bouteille_pleine', 'assets/props/Bouteille_pleine.png'); 
    this.load.image('outil', 'assets/props/clamp.png');
    this.load.image('pagaies', 'assets/props/paddle.png');
    this.load.image('cables', 'assets/props/Cables.png');
    this.load.image('volant', 'assets/props/car_wheel.png');

                                                                        //enigme
    this.load.image('porte_ferme', 'assets/props/porte_ferme.png');     //porte ferme a clé
    this.load.image('fontaine', 'assets/props/fontaine.png');

    for (var i = 1; i<9; i++) {                                     //différente façade du joueur
        this.load.image('player'+i,"assets/joueur/player"+i+".png")
    }
}



var player;                                 //variable joueur
=======
var player;
var platforms;
var monTexte;
>>>>>>> 3d8cdede9cf68fde830f23e34a69c7839a4c0aad

var haveKey, haveBadge, haveCrowbar, haveBouteilleVide, haveBouteillePleine, haveOutil, havePagaies, haveCables, haveVolant = false;          //variable si le joueur possède l'objet
        

this.pause = false;
this.one = false;

class Script extends Phaser.Scene {

<<<<<<< HEAD
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
    player = this.physics.add.sprite(100, 450, 'player5');

    player.setBounce(0.2);
    player.setCollideWorldBounds(true);


                                                                         //assignation des touches de jeux

    qkey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q); //allez a gauche
    dkey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D); //allez a droite
    zkey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z); //allez en haut
    skey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S); //allez en bas
    ekey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E); //interagir


                                                        //création des objets que le joueur peut récupèrer
    obj_clef = this.physics.add.group({                 //Clé
        key: 'cle',
        setSize: {width: 50, height: 50},
        setXY: { x: 200, y: 500}
    });
    obj_badge = this.physics.add.group({                //badge
        key: 'badge',
        setSize: {width: 50, height: 50},
        setXY: { x: 500, y: 500}
    });
    obj_crowbar = this.physics.add.group({              //pied de biche
        key: 'crowbar',
        setSize: {width: 50, height: 50},
        setXY: { x: 800, y: 500}
    });
    obj_bouteille_vide = this.physics.add.group({       //bouteille vide
        key: 'bouteille_vide',  
        setSize: {width: 50, height: 50},
        setXY: { x: 1100, y: 500}
    });
    obj_bouteille_pleine = this.physics.add.group({     //bouteille pleine
        key: 'bouteille_pleine',
        setSize: {width: 50, height: 50},
        setXY: { x: 1400, y: 500}
    });
    obj_outil = this.physics.add.group({                //outil de cablage
        key: 'outil',
        setSize: {width: 50, height: 50},
        setXY: { x: 500, y: 800}
    }); 
    obj_pagaies = this.physics.add.group({              //pagaies
        key: 'pagaies',
        setSize: {width: 50, height: 50},
        setXY: { x: 800, y: 800}
    });
    obj_cables = this.physics.add.group({               //cables
        key: 'cables',
        setSize: {width: 50, height: 50},
        setXY: { x: 1100, y: 800}
    });
    obj_volant = this.physics.add.group({               //volant de voiture
        key: 'volant',
        setSize: {width: 50, height: 50},
        setXY: { x: 1400, y: 800}
    });

                                                        //enigme / obstacle
    obj_porte_ferme = this.physics.add.group({               //porte ferme a clé
        key: 'porte_ferme',
        setSize: {width: 50, height: 50},
        setXY: { x: 1400, y: 800}
    });
    obj_fontaine = this.physics.add.group({               //fontaine pour remplir la bouteille
        key: 'fontaine',
        setSize: {width: 50, height: 50},
        setXY: { x: 1400, y: 800}
    });



}
function collectKey (player, obj_clef)
{
    obj_clef.disableBody(true, true);
    haveKey = true;
    return haveKey
}
function collectBadge (player, obj_badge)
{
    obj_badge.disableBody(true, true);
    haveBadge = true;
    return haveBadge
}
function collectCrowbar (player, obj_crowbar)
{
    obj_crowbar.disableBody(true, true);
    haveCrowbar = true;
    return haveCrowbar
}
function collectBouteilleVide (player, obj_bouteille_vide)
{
    obj_bouteille_vide.disableBody(true, true);
    haveBouteilleVide = true;
    return haveBouteilleVide
}
function collectBouteillePleine (player, obj_bouteille_pleine)
{
    obj_bouteille_pleine.disableBody(true, true);
    haveBouteillePleine = true;
    return haveBouteillePleine
}
function collectOutil (player, obj_outil)
{
    obj_outil.disableBody(true, true);
    haveOutil = true;
    return haveOutil
}
function collectPagaies (player, obj_pagaies)
{
    obj_pagaies.disableBody(true, true);
    havePagaies = true;
    return havePagaies
}
function collectCables (player, obj_cables)
{
    obj_cables.disableBody(true, true);
    haveCables = true;
    return haveCables
}
function collectVolant (player, obj_volant)
{
    obj_volant.disableBody(true, true);
    haveVolant = true;
    return haveVolant
}



function enigmePorte (player, obj_porte_ferme)
{
    obj_porte_ferme.disableBody(true, true);
}


function update() {

                                                //direction joueur
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
=======
    constructor() {
        super("Game");
>>>>>>> 3d8cdede9cf68fde830f23e34a69c7839a4c0aad

        this.grid = 0;
        this.player = 0;
        this.rating = 7;
        this.minigame = -1;
    }

    config = {
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

    preload() {                                                //chargement des image du jeu

        this.load.image('start_map', 'assets/start_map.jpg');           //map teste

        this.load.image('cle', 'assets/props/Cle_blanche.png');         //objet recupérable
        this.load.image('badge', 'assets/props/Badge_v2.png');    
        this.load.image('crowbar', 'assets/props/crowbar.png'); 
        this.load.image('bouteille_vide', 'assets/props/Bouteille_vide_v2.png');
        this.load.image('bouteille_pleine', 'assets/props/Bouteille_pleine.png'); 
        this.load.image('outil', 'assets/props/clamp.png');
        this.load.image('pagaies', 'assets/props/paddle.png');
        this.load.image('cables', 'assets/props/Cables.png');
        this.load.image('volant', 'assets/props/car_wheel.png');

        for (var i = 1; i<9; i++) {                                     //différente façade du joueur
            this.load.image('player'+i,"assets/joueur/player"+i+".png")
        }
    }

    create() {

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
        player = this.physics.add.sprite(100, 450, 'player5');

        player.setBounce(0.2);
        player.setCollideWorldBounds(true);


                                                                            //assignation des touches de jeux

        qkey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q); //allez a gauche
        dkey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D); //allez a droite
        zkey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z); //allez en haut
        skey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S); //allez en bas
        ekey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E); //interagir
        pkey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P); //Pause


                                                            //création des objets que le joueur peut récupèrer
        obj_clef = this.physics.add.group({                 //Clé
            key: 'cle',
            setSize: {width: 50, height: 50},
            setXY: { x: 200, y: 500}
        });
        obj_badge = this.physics.add.group({                //badge
            key: 'badge',
            setSize: {width: 50, height: 50},
            setXY: { x: 500, y: 500}
        });
        obj_crowbar = this.physics.add.group({              //pied de biche
            key: 'crowbar',
            setSize: {width: 50, height: 50},
            setXY: { x: 800, y: 500}
        });
        obj_bouteille_vide = this.physics.add.group({       //bouteille vide
            key: 'bouteille_vide',  
            setSize: {width: 50, height: 50},
            setXY: { x: 1100, y: 500}
        });
        obj_bouteille_pleine = this.physics.add.group({     //bouteille pleine
            key: 'bouteille_pleine',
            setSize: {width: 50, height: 50},
            setXY: { x: 1400, y: 500}
        });
        obj_outil = this.physics.add.group({                //outil de cablage
            key: 'outil',
            setSize: {width: 50, height: 50},
            setXY: { x: 500, y: 800}
        }); 
        obj_pagaies = this.physics.add.group({              //pagaies
            key: 'pagaies',
            setSize: {width: 50, height: 50},
            setXY: { x: 800, y: 800}
        });
        obj_cables = this.physics.add.group({               //cables
            key: 'cables',
            setSize: {width: 50, height: 50},
            setXY: { x: 1100, y: 800}
        });
        obj_volant = this.physics.add.group({               //volant de voiture
            key: 'volant',
            setSize: {width: 50, height: 50},
            setXY: { x: 1400, y: 800}
        });

    }
    collectKey (player, obj_clef)
    {
        obj_clef.disableBody(true, true);
        haveKey = true;
        return haveKey
    }
    collectBadge (player, obj_badge)
    {
        obj_badge.disableBody(true, true);
        haveBadge = true;
        return haveBadge
    }
    collectCrowbar (player, obj_crowbar)
    {
        obj_crowbar.disableBody(true, true);
        haveCrowbar = true;
        return haveCrowbar
    }
    collectBouteilleVide (player, obj_bouteille_vide)
    {
        obj_bouteille_vide.disableBody(true, true);
        haveBouteilleVide = true;
        return haveBouteilleVide
    }
    collectBouteillePleine (player, obj_bouteille_pleine)
    {
        obj_bouteille_pleine.disableBody(true, true);
        haveBouteillePleine = true;
        return haveBouteillePleine
    }
    collectOutil (player, obj_outil)
    {
        obj_outil.disableBody(true, true);
        haveOutil = true;
        return haveOutil
    }
    collectPagaies (player, obj_pagaies)
    {
        obj_pagaies.disableBody(true, true);
        havePagaies = true;
        return havePagaies
    }
    collectCables (player, obj_cables)
    {
        obj_cables.disableBody(true, true);
        haveCables = true;
        return haveCables
    }
    collectVolant (player, obj_volant)
    {
        obj_volant.disableBody(true, true);
        haveVolant = true;
        return haveVolant
    }





    update() {
        
        if(pkey.isDown) {
            this.pause = !this.pause;
            this.one = true;
            this.add.text(700, 300, 'PAUSE', { font: "35px Arial Black"   });
        }
        
        if(this.pause){
            game.input.onDown.addOnce(removeText, this);
            return;
        }

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
        if (ekey.isDown && haveKey)
        {
            this.physics.add.overlap(player, door_close, door, null, this);
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
        else if (dkey.isDown)                       //Allez a droite
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
        else if (zkey.isDown)                       //Allez en haut
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

            if (ekey.isDown)                                                      //ramasse les objets quand le joueur est dessus avec la touche 'E'
            {
                this.physics.add.overlap(player, obj_clef, collectKey, null, this);      
                this.physics.add.overlap(player, obj_badge, collectBadge, null, this);
                this.physics.add.overlap(player, obj_crowbar, collectCrowbar, null, this);
                this.physics.add.overlap(player, obj_bouteille_vide, collectBouteilleVide, null, this);
                this.physics.add.overlap(player, obj_bouteille_pleine, collectBouteillePleine, null, this);
                this.physics.add.overlap(player, obj_outil, collectOutil, null, this);
                this.physics.add.overlap(player, obj_pagaies, collectPagaies, null, this);
                this.physics.add.overlap(player, obj_cables, collectCables, null, this);
                this.physics.add.overlap(player, obj_volant, collectVolant, null, this);
            }
        }
        
        if (zkey.isDown && player.body.touching.down)
        {
            player.setVelocityY(-330);
        }
        
    }
<<<<<<< HEAD
    
    
    if (ekey.isDown && haveKey)                                                         //ouverture d'une porte avec la cle
    {
        this.physics.add.overlap(player, obj_porte_ferme, enigmePorte, null, this);
    }
    if (ekey.isDown && haveBouteilleVide)                                               //remplir une bouteille vide
    {
        haveBouteillePleine = true;
    }



    if (zkey.isDown && player.body.touching.down)
    {
        player.setVelocityY(-330);
    }
=======
>>>>>>> 3d8cdede9cf68fde830f23e34a69c7839a4c0aad
}
