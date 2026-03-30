$(document).ready(function () {
    $('.text').textillate({
        loop: true,
        sync: true,
        in: {
            effect: 'bounceIn',
        },
        out: {
            effect: 'bounceOut',
        }
    });

    // ─── Custom Wave ───────────────────────────────────────────────
    const canvas = document.createElement("canvas");
    const container = document.getElementById("siri-container");
    canvas.width = window.innerWidth > 768 ? 600 : 300;
    canvas.height = 150;
    canvas.style.display = "block";
    canvas.style.margin = "0 auto";
    container.appendChild(canvas);

    const ctx = canvas.getContext("2d", { alpha: false }); // faster — no transparency compositing
    let phase = 0;
    let animationId = null;
    let lastTime = 0;
    const FPS = 30;
    const interval = 1000 / FPS;

    function drawWave(timestamp) {
        const delta = timestamp - lastTime;

        if (delta > interval) {
            lastTime = timestamp - (delta % interval);

            ctx.fillStyle = "#000000"; // fill instead of clear — faster
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const cy = canvas.height / 2;

            const waves = [
                { amp: 25, freq: 0.02,  speed: 0.025, opacity: 0.9, color: "0,199,255" },
                { amp: 18, freq: 0.028, speed: 0.04,  opacity: 0.5, color: "150,80,255" },
                { amp: 12, freq: 0.015, speed: 0.018, opacity: 0.4, color: "255,255,255" },
            ];

            waves.forEach(wave => {
                ctx.beginPath();
                for (let x = 0; x <= canvas.width; x += 5) {
                    const y = cy + wave.amp * Math.sin(x * wave.freq + phase * wave.speed);
                    x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
                }
                ctx.strokeStyle = `rgba(${wave.color}, ${wave.opacity})`;
                ctx.lineWidth = 2;
                ctx.stroke();
            });

            phase++;
        }

        animationId = requestAnimationFrame(drawWave);
    }

    // Auto stop/start based on section visibility
    const siriSection = document.getElementById("SiriWave");
    const observer = new MutationObserver(() => {
        if (siriSection.hidden) {
            cancelAnimationFrame(animationId);
            animationId = null;
        } else {
            if (!animationId) {
                phase = 0;
                drawWave();
            }
        }
    });
    observer.observe(siriSection, { attributes: true, attributeFilter: ["hidden"] });

    // Pause when tab is not visible
    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            cancelAnimationFrame(animationId);
            animationId = null;
        } else if (!siriSection.hidden) {
            drawWave();
        }
    });
    // ───────────────────────────────────────────────────────────────

    // Siri Message Animation
    $('.siri-message').textillate({
        loop: true,
        sync: true,
        in: {
            effect: 'fadeInUp',
            sync: true,
        },
        out: {
            effect: 'fadeOutUp',
            sync: true
        }
    });

    // Mic button click event
    $("#MicBtm").click(function () {
        eel.playAssistentSound();
        $("#Oval").attr("hidden", true);
        $("#SiriWave").attr("hidden", false);
        eel.allCommands()();
    });

});