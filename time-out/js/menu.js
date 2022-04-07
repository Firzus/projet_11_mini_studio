class Menu extends Phaser.Scene {

	static UIMainMenu = class extends UI {
		constructor(scene) {
			super(scene);
		}

		build() {
			this.addButton(0, "Start Game!", function() { this.cameras.main.fadeOut(300); });
			this.addButton(50, "Lore", function() { this.scene.start("Lore Scene"); });
		}
	}

	constructor() {
		super("MainMenu");
	}

	preload() {
		this.ui = new Menu.UIMainMenu(this);
		this.ui.init();
	}

	create() {
		this.ui.build();

		this.cameras.main.once("camerafadeoutcomplete", function (camera) {
			this.scene.start("Game");
			// this.timeLeft = gameOptions.initialTime;

        	// // a boring timer.
        	// this.gameTimer = this.time.addEvent({
            // 	delay: 100,
            // 	callback: function () {
            //     	this.timeLeft += 0.1;

            //     	this.timeLeft = Math.round(this.timeLeft * 10) / 10.0;
            // 	},
            // 	callbackScope: this,
            // 	loop: true
        	// });
        	// if (this.timeLeft > 0) {
            // 	this.hud.timer = this.hud.add.text(20, 60, "");
        	// }  
		}, this);
	}

	update() {

	}
}