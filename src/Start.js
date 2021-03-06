class Start extends Phaser.Scene {
    constructor() {
        super('Start');
    }

    preload(){

        this.load.image('MainScreen', 'assets/images/menu/title_screen.png');
        this.load.image('Play', 'assets/images/menu/bouton_start.png');
        this.load.image('Credits', 'assets/images/menu/bouton_credits.png');

        this.load.audio('Menutheme','assets/sounds/MenuMusic.mp3');

    }

    create(){
        const menu = this.add.image(0, 0, 'MainScreen').setOrigin(0, 0);

        this.MenuTheme = this.sound.add('Menutheme',{volume: 0.3});
        this.MenuTheme.loop = true;
        this.MenuTheme.play();

        const buttonStartSprite = this.add.image(915, 665, 'Play')
            .setOrigin(0, 0)
            .setScale(0.835)
            .setAlpha(0.7);


        const buttonCreditsSprite = this.add.image(380, 667, 'Credits')
            .setOrigin(0, 0)
            .setScale(0.835)
            .setAlpha(0.7);


        this.buttonStart = this.add.rectangle(buttonStartSprite.x, buttonStartSprite.y,350,100,0xffffff,0)
            .setOrigin(0,0)
            .setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, ()=> {
                this.scene.start('level')
                this.MenuTheme.stop();
            })
            .on('pointerover',function(){
                buttonStartSprite.setAlpha(1);
            })
            .on('pointerout',function(){
                buttonStartSprite.setAlpha(0.7);
            })

        this.buttonCredits = this.add.rectangle(buttonCreditsSprite.x, buttonCreditsSprite.y,350,100,0xffffff,0)
            .setOrigin(0,0)
            .setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, ()=> {
                this.scene.start('credits')
                this.MenuTheme.stop();
            })
            .on('pointerover',function(){
                buttonCreditsSprite.setAlpha(1);
            })
            .on('pointerout',function(){
                buttonCreditsSprite.setAlpha(0.7);
            })

    }


}