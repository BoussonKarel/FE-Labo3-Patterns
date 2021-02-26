(function() {
    // const $ = draw;
    // $.setup(...);
    // const _ = draw;
    // _.setup(...);

    document.addEventListener('DOMContentLoaded', function() {
        const canvasElement = document.querySelector('.js-canvas');

        if (!canvasElement) throw new Error('The canvas could not be loaded!');

        // Oefening 1: Dots renderen om de x ms
        // draw.setup(canvasElement);
        // generate.repeatingPattern(500); // vorm (rectangular, circular, square) is optioneel

        // const p1 = new Particle(48, 'gold');
        // const p2 = new Particle(48, 'gold');
        // const p3 = new Particle(78, 'gold');

        // draw.circle(130, 150, p1);
        // draw.circle(250, 150, p2);
        // draw.circle(190, 200, p3);

        // Oefening 2: particles renderen op ons scherm
        const ctx = draw.setup(canvasElement);
        const particles = sparks.generate(ctx, 200);
        console.table(particles);
        sparks.render(particles)
    })    
})();