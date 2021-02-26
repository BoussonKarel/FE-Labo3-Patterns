// Constructor voor een Spark
class Spark {
    constructor({ x, y, dX = 0, dY = 0, size = 24, color = '#222'}) {
        this.x = x;
        this.y = y;
        this.dX = dX;
        this.dY = dY;
        this.size = size;
        this.color = color;
        // OF: Object.assign(this, { x, y, dX, dY, size, color });
    }

    render() {
        draw.circle(this.x, this.y, { size: this.size, color: this.color });
    }
}