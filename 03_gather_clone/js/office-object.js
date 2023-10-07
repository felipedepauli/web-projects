class OfficeObject {
    constructor(config) {
        this.x = config.x || 0;
        this.y = config.y || 0;
        this.sprite = new Sprite({
            officeObject: this,
            src: config.src || "/images/characteres/people/hero.png",

        })
    }
}