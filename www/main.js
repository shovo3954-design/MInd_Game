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

    // ─── Simple Wave ───────────────────────────────────────────────
    // const canvas = document.createElement("canvas");
    // const container = document.getElementById("siri-container");
    // canvas.width = 300;
    // canvas.height = 150;
    // canvas.style.cssText = "display:block;margin:0 auto";
    // container.appendChild(canvas);
    // const ctx = canvas.getContext("2d");
    // let phase = 0, animId = null;

    // function drawWave() {
    //     ctx.fillStyle = "#000";
    //     ctx.fillRect(0, 0, canvas.width, canvas.height);
    //     const cy = 75;
    //     [
    //         [25, 0.02, 0.025, "0,199,255"],
    //         [18, 0.028, 0.04, "150,80,255"],
    //         [12, 0.015, 0.018, "255,255,255"],
    //     ].forEach(([amp, freq, speed, color]) => {
    //         ctx.beginPath();
    //         for (let x = 0; x <= 300; x += 6) {
    //             const y = cy + amp * Math.sin(x * freq + phase * speed);
    //             x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    //         }
    //         ctx.strokeStyle = `rgba(${color},0.7)`;
    //         ctx.lineWidth = 2;
    //         ctx.stroke();
    //     });
    //     phase++;
    //     animId = requestAnimationFrame(drawWave);
    // }

    // const section = document.getElementById("SiriWave");
    // new MutationObserver(() => {
    //     if (section.hidden) { cancelAnimationFrame(animId); animId = null; }
    //     else if (!animId) { phase = 0; drawWave(); }
    // }).observe(section, { attributes: true, attributeFilter: ["hidden"] });

    // document.addEventListener("visibilitychange", () => {
    //     if (document.hidden) { cancelAnimationFrame(animId); animId = null; }
    //     else if (!section.hidden) drawWave();
    // });


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

    // - Create Shortcut key in main.js

   function doc_keyUp(e) {
        // this would test for whichever key is 40 (down arrow) and the ctrl key at the same time

        if (e.key === 'j' && e.altKey) {
            eel.playAssistentSound()
            $("#Oval").attr("hidden", true);
            $("#SiriWave").attr("hidden", false);
            eel.allCommands()()
        }
    }
    document.addEventListener('keyup', doc_keyUp, false);

});