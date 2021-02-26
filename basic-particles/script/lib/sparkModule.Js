const sparks = (function() {
    colors = ['gold', 'peachpuff', 'lime', 'deepskyblue', 'hotpink'];

    const generateSparks = (ctx, amount) => {
        // TODO: maak x keer een spark aan op een random positie in het canvas
        const sparks = [],
        maxVelocity = 5;

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
                    x: x,
                    y: y,
                    dX: Math.floor(Math.random() * (maxVelocity * 2)) - maxVelocity,
                    dY: Math.floor(Math.random() * (maxVelocity * 2)) - maxVelocity,
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

    const animateParticles = (ctx, particlesArray) => {
        draw.clearArea();

        // s = spark
        for (const p of particlesArray) {
			p.x = p.x + p.dX;
			p.y = p.y + p.dY;
 
			if (p.x <= p.size / 2) {
				p.dX = p.dX * -1;
			}
 
			if (p.y <= p.size / 2) {
				p.dY = p.dY * -1;
			}
 
			if (p.x >= ctx.canvas.width - p.size) {
				p.dX = p.dX * -1;
			}
 
			if (p.y >= ctx.canvas.height - p.size) {
				p.dY = p.dY * -1;
			}
		}

        renderSparks(particlesArray);

        requestAnimationFrame(() => {
            animateParticles(ctx, particlesArray);
        });
    }

    return {
        // Ik hernoemd de functie intern, naar een andere value extern
        animate: animateParticles,
        generate: generateSparks,
        render: renderSparks,
    }
})();