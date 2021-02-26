const sparks = (function() {
    colors = ['gold', 'peachpuff', 'lime', 'deepskyblue', 'hotpink'];

    const generateSparks = (ctx, amount) => {
        // TODO: maak x keer een spark aan op een random positie in het canvas
        const sparks = [];

        // Sparks 1 per 1 genereren
        for (let i = 0; i < amount; i++) {
            // Size genereren
            // Random x en y value genereren
            const size = Math.floor(Math.random() * 15) + 5,
            x = Math.round(Math.random() * (ctx.canvas.width - size * 2)) + size,
            y = Math.round(Math.random() * (ctx.canvas.height - size * 2)) + size,
            color = colors[Math.floor(Math.random() * colors.length)];

            // Wiskunde uuhhhh 🔢
            // Math.random() * (max - min) + min;
            // min = size;
            // max = ctx.canvas.height - size;
            // min - max = ctx.canvas.height - size * 2;
            // Math.random() * (ctx.canvas.height - size - size) + size;

            sparks.push(
                new Spark({
                    x:x,
                    y:y,
                    dX:0,
                    dY:0,
                    size: size,
                    color: color
                    // Size en color laten we momenteel default
                })
            );
        }

        // Sparks returnen
        return sparks;
    }

    const renderSparks = (sparksArray) => {
        // TODO: render elke spark in deze array
        for (const s of sparksArray) {
            s.render();
        }
    }

    return {
        // Ik hernoemd de functie intern, naar een andere value extern
        generate: generateSparks,
        render: renderSparks,
    }
})();