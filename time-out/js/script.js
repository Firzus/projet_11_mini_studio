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
}

function create() {
    this.add.image(960, 540, 'start_map');
    var r1 = this.add.rectangle(1200, 110, 40, 40);
    var r2 = this.add.rectangle(1100, 110, 40, 40);
    var r3 = this.add.rectangle(1000, 110, 40, 40);
    r1.setStrokeStyle(2, 0x1a65ac);
    r2.setStrokeStyle(2, 0x008000);
    r3.setStrokeStyle(2, 0xff0000);
}

function update() {

}