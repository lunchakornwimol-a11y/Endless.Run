
/* ==============================
   ENDLESS RUN - JAVASCRIPT
================================ */

// 1. GAME URL
// ใส่ลิงก์เกมจริงภายหลัง

const GAME_URL = "";


/* ==============================
   PLAY GAME BUTTON
================================ */

const playButton = document.getElementById("playButton");

if (playButton) {

    playButton.addEventListener("click", function (event) {

        event.preventDefault();

        if (!GAME_URL) {

            alert(
                "ยังไม่ได้เพิ่มลิงก์เกม กรุณารอการอัปโหลดเกม"
            );

            return;
        }

        window.open(
            GAME_URL,
            "_blank",
            "noopener,noreferrer"
        );

    });

}


/* ==============================
   MOUSE RGB GLOW
================================ */

document.addEventListener("mousemove", function (event) {

    const x = event.clientX;
    const y = event.clientY;

    document.body.style.setProperty(
        "--mouse-x",
        x + "px"
    );

    document.body.style.setProperty(
        "--mouse-y",
        y + "px"
    );

});


/* ==============================
   CONSOLE MESSAGE
================================ */

console.log(
    "%c ENDLESS RUN ",
    "background: linear-gradient(90deg,#55e7ff,#a78bfa,#ff65c3); color:#080a12; font-size:20px; font-weight:bold; padding:10px;"
);

console.log(
    "Game Showcase | Lunchakorn Wimol"
);
