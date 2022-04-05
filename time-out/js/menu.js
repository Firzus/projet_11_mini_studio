import Phaser from 'phaser'

export default class MainMenuScene extends Phaser.Scene
{
	private cursors!: Phaser.Types.Input.Keyboard.CursorKeys

	constructor()
	{
		super('main-menu')
	}

	init()
	{
		this.cursors = this.input.keyboard.createCursorKeys()
	}

	preload()
    {
		this.load.image('glass-panel', 'assets/glassPanel.png')
		this.load.image('cursor-hand', 'assets/cursor_hand.png')
    }

    create()
    {
		const { width, height } = this.scale

        // Play button
        const playButton = this.add.image(width * 0.5, height * 0.6, 'glass-panel')
            .setDisplaySize(150, 50)
        
        this.add.text(playButton.x, playButton.y, 'Play')
            .setOrigin(0.5)

        // Settings button
        const settingsButton = this.add.image(playButton.x, playButton.y + playButton.displayHeight + 10, 'glass-panel')
            .setDisplaySize(150, 50)

        this.add.text(settingsButton.x, settingsButton.y, 'Settings')
            .setOrigin(0.5)

        // Credits button
        const creditsButton = this.add.image(settingsButton.x, settingsButton.y + settingsButton.displayHeight + 10, 'glass-panel')
            .setDisplaySize(150, 50)

        this.add.text(creditsButton.x, creditsButton.y, 'Credits')
            .setOrigin(0.5)
	}

	selectButton(index: number)
	{
		// TODO
	}

	selectNextButton(change = 1)
	{
		// TODO
	}

	confirmSelection()
	{
		// TODO
	}
	
	update()
	{
		const upJustPressed = Phaser.Input.Keyboard.JustDown(this.cursors.up!)
		const downJustPressed = Phaser.Input.Keyboard.JustDown(this.cursors.down!)
		const spaceJustPressed = Phaser.Input.Keyboard.JustDown(this.cursors.space!)
		
		if (upJustPressed)
		{
			this.selectNextButton(-1)
		}
		else if (downJustPressed)
		{
			this.selectNextButton(1)
		}
		else if (spaceJustPressed)
		{
			this.confirmSelection()
		}
	}