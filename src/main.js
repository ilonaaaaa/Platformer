const config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 1920,
    heigth: 1088,
    scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 1000 },
            debug: false,
        },
    },
    scene: [new Start(),new scene(), new UI(), new credits()]
};

const game = new Phaser.Game(config);