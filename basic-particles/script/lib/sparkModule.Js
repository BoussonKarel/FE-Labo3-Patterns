const sparks = (function() {
    colors = ['gold', 'peachpuff', 'lime', 'deepskyblue', 'hotpink'];

    const cursor = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
    }

    const generateSpark = (ctx) => {
        const maxVelocity = Math.random()*10;

        // Size genereren
        // Random x en y value genereren
        // Kleur kiezen
        const size = Math.floor(Math.random() * 15) + 5,
        // x = Math.round(Math.random() * (ctx.canvas.width - size * 2)) + size,
        // y = Math.round(Math.random() * (ctx.canvas.height - size * 2)) + size,
        x = cursor.x,
        y = cursor.y,
        color = colors[Math.floor(Math.random() * colors.length)];

        // Wiskunde uuhhhh 🔢
        // Math.random() * (max - min) + min;
        // min = size;
        // max = ctx.canvas.height - size;
        // min - max = ctx.canvas.height - size * 2;
        // Math.random() * (ctx.canvas.height - size - size) + size;

        return new Spark({
            x: x,
            y: y,
            dX: Math.floor(Math.random() * (maxVelocity * 2)) - maxVelocity,
            dY: Math.floor(Math.random() * (maxVelocity * 2)) - maxVelocity,
            size: size,
            color: color
            // Size en color laten we momenteel default
        })
    }

    const generateSparks = (ctx, amount) => {
        // TODO: maak x keer een spark aan op een random positie in het canvas
        const sparks = [];

        // Sparks 1 per 1 genereren
        for (let i = 0; i < amount; i++) {
            sparks.push(generateSpark(ctx));
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

            p.size = p.size * 0.97;
            // Kleiner of gelijk aan 1px
            if (p.size <= 1) {
                // Filteren op alle Sparks die niet gelijk aan die waarmee we bezig zijn
                particlesArray = particlesArray.filter((s) => s != p);
                particlesArray.push(generateSpark(ctx));
            }
 
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

    const enableMouseListener = () => {
        document.addEventListener('mousemove', function(e) {
            cursor.x = e.clientX;
            cursor.y = e.clientY;
        });
    }

    return {
        // Ik hernoemd de functie intern, naar een andere value extern
        animate: animateParticles,
        generate: generateSparks,
        render: renderSparks,
        enableMouseListener
    }
})();