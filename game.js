// Phaser game configuration
const config = {
    type: Phaser.AUTO,
    width: 400,
    height: 600,
    parent: 'game-container',
    physics: {
        default: 'arcade',
        arcade: { gravity: { y: 15 }, debug: false }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

// Initialize the game
const game = new Phaser.Game(config);
let basket, cursors, apple, score = 0, scoreText;

function preload() {
    // Load images
    this.load.image('basket', '../assets/basket.png');
    this.load.image('apple', '../assets/apple.png');
}

function create() {
    // Add basket at the bottom of the screen
    basket = this.physics.add.sprite(200, 550, 'basket').setScale(0.3).setCollideWorldBounds(true);
    
    // Create the falling apple
    apple = this.physics.add.sprite(Phaser.Math.Between(1, 50), 0, 'apple').setScale(.5);
    apple.setVelocityY(4);

    // Detect collision between basket and apple
    this.physics.add.overlap(basket, apple, collectApple, null, this);

    // Add keyboard controls
    cursors = this.input.keyboard.createCursorKeys();

    // Display score
    scoreText = this.add.text(10, 10, 'Score: 0', { fontSize: '20px', fill: '#fff' });
}

function update() {
    // Move basket left
    if (cursors.left.isDown) {
        basket.setVelocityX(-200);
    } 
    // Move basket right
    else if (cursors.right.isDown) {
        basket.setVelocityX(200);
    } 
    // Stop movement when no key is pressed
    else {
        basket.setVelocityX(0);
    }

    // Reset apple when it falls below screen
    if (apple.y > 600) {
        apple.setPosition(Phaser.Math.Between(1, 150), 0);
    }
}

// Function to collect apple
function collectApple(basket, apple) {
    score += 10;
    scoreText.setText('Score: ' + score);
    apple.setPosition(Phaser.Math.Between(50, 350), 0);
}
