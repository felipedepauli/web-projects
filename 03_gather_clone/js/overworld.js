class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector('.office-canvas');
        this.ctx = this.canvas.getContext('2d');
    }
    init() {
        // Background.
        const image = new Image();
        image.onload = () => {
            this.ctx.drawImage(image, 0, 0)
        }
        image.src = '../images/maps/DemoLower.png';

        // Place some game objects.
        const hero = new OfficeObject({
            x: 5,
            y: 6,
            src: "./images/characters/people/hero.png"
        });
        
        const npc1 = new OfficeObject({
            x: 7,
            y: 8,
            src: "../images/characters/people/npc1.png"
        });

        setTimeout(()=> {
            hero.sprite.draw(this.ctx);
            npc1.sprite.draw(this.ctx);
        }, 1000)
    }
}
