// Neon particles background for Blazor/SPA
// Adds a canvas to the body and animates glowing particles
(function () {
    if (document.getElementById('neon-particles-bg')) return;
    var canvas = document.createElement('canvas');
    canvas.id = 'neon-particles-bg';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '0';
    canvas.style.opacity = '0.22';
    document.body.appendChild(canvas);

    var ctx = canvas.getContext('2d');
    var dpr = window.devicePixelRatio || 1;
    var w, h, particles;
    var PARTICLE_COUNT = 48;
    var COLORS = ['#00fff7', '#00bfff', '#00e0ff', '#00fff7', '#00fff7'];

    function resize() {
        w = window.innerWidth;
        h = window.innerHeight;
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        canvas.style.width = w + 'px';
        canvas.style.height = h + 'px';
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(dpr, dpr);
    }

    function random(min, max) {
        return Math.random() * (max - min) + min;
    }

    function createParticles() {
        particles = [];
        for (var i = 0; i < PARTICLE_COUNT; i++) {
            var size = random(2, 5);
            particles.push({
                x: random(0, w),
                y: random(0, h),
                vx: random(-0.18, 0.18),
                vy: random(-0.18, 0.18),
                size: size,
                color: COLORS[Math.floor(Math.random() * COLORS.length)],
                glow: random(12, 32)
            });
        }
    }

    function animate() {
        ctx.clearRect(0, 0, w, h);
        for (var i = 0; i < particles.length; i++) {
            var p = particles[i];
            ctx.save();
            ctx.globalAlpha = 0.7;
            ctx.shadowColor = p.color;
            ctx.shadowBlur = p.glow;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();
            ctx.restore();
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0 || p.x > w) p.vx *= -1;
            if (p.y < 0 || p.y > h) p.vy *= -1;
        }
        requestAnimationFrame(animate);
    }

    resize();
    createParticles();
    animate();
    window.addEventListener('resize', function () {
        resize();
        createParticles();
    });
})();
