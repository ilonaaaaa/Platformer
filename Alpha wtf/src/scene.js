class scene extends Phaser.Scene {

    preload() {


        // At last image must be loaded with its JSON
        this.load.atlas('player', 'assets/images/kenney_player.png', 'assets/images/kenney_player_atlas.json');
        this.load.image('tiles', 'assets/tilesets/tilesheetFT.png');

        // Load the export Tiled JSON
        this.load.tilemapTiledJSON('map', 'assets/tilemaps/blouckout.json');
    }

    create() {

        const backgroundImage = this.add.image(0, 0, 'background').setOrigin(0, 0);
        backgroundImage.setScale(5, 1.5)
        const map = this.make.tilemap({key: 'map'});

        const tileset = map.addTilesetImage('blockout', 'tiles');
        this.platforms = map.createStaticLayer('Sol', tileset);

        
        this.cursors = this.input.keyboard.createCursorKeys();


        this.player = new Player(this)

        this.cameras.main.startFollow(this.player.player,false);
        this.player.initKeyboard();
    }

    update() {
        this.player.move();
        }
}