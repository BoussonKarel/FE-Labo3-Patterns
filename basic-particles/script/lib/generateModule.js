// TODOs
// #1 Maak een module pattern voor een generate-Module
// #2 Hierin maken we een timer die:
// - Punten tekent vanuit het middelpunt
// - Om de seconde (timer kan geannuleerd worden)
// - Exponentieel punten erbij rendert
// - Een bepaalde bovenlimiet heeft (in te stellen)


const generate = ( function() {

    const drawParticles = (amount) => {
        // WARNING: Canvas wordt altijd overschreven
        const gutters = {
            x: window.innerWidth / (amount + 2),
            y: window.innerHeight / (amount + 2),
        };

        for (let i = 0; i < amount; i++) {
            // draw
            draw.circle(i * gutters.x, i * gutters.y, { size: 20, color: 'white' })
            // particle kan je nog toevoegen
        }
        
    }

    const repeatingPattern = (interval, maxParticles = 200) => {
        let particlesAmount = 1;
        // Loop maken -> requestAnimationFrame() = performante rendering
        const timer = setInterval(() => {
            drawParticles(particlesAmount);

            if (particlesAmount >= maxParticles) {
                // clearInterval(timer); Twee opties hiervoor
                particlesAmount = 1;
            }

            drawParticles(particlesAmount);
            particlesAmount *= 2;
        }, interval);

        // Houden we bij hoeveel we al getkend hebben
       
        
    }
    
    return {
        repeatingPattern,
    };
})();