// (Revealing) module pattern
const draw = (() => { // const draw = (function() {
    // Deze iife || self evocing function maakt een 'state' aan en is dus een closure
    let ctx = null;

    // Ready to reuse
    const matchCanvasToWindow = (canvasElement) => {
        canvasElement.width = document.documentElement.clientWidth;  
        canvasElement.height = document.documentElement.clientHeight;
    }

    const setup = (canvasElement) => {
        window.addEventListener('resize', function() {
            matchCanvasToWindow(canvasElement);
        });

        matchCanvasToWindow(canvasElement);
        ctx = canvasElement.getContext('2d');
        return ctx;
    }

    const clearArea = () => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }

    const circle = (x, y, { size, color }) => {
        // x, y coordinaten
        // s size

        // We tekenen altijd op een context!
        // console.log({ctx})

        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(x, y, size, 0 , Math.PI * 2);
        ctx.fill();
    }
    
    return {
        setup,
        circle,
        clearArea,
    };
})();

// draw.setup(canvasElement);

// draw.circle(x, y);