
// ======================================
// 1. GENERATE RANDOM STARS
// ======================================

const starContainer = document.getElementById("stars");

if (starContainer) {

    for (let i = 0; i < 120; i++) {

        const star = document.createElement("div");

        star.classList.add("star");

        const size = Math.random() * 3 + 1;

        star.style.width = size + "px";
        star.style.height = size + "px";

        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";

        star.style.animationDelay =
            Math.random() * 3 + "s";

        starContainer.appendChild(star);
    }

}


// ======================================
// 2. GET HTML ELEMENTS
// ======================================

const startButton = document.getElementById("startButton");

const welcomeScreen = document.getElementById("welcomeScreen");

const gardenScreen = document.getElementById("gardenScreen");

const backgroundMusic = document.getElementById("backgroundMusic");

const musicButton = document.getElementById("musicButton");

const musicName = document.getElementById("musicName");


// ======================================
// 3. OPEN THE SURPRISE
// ======================================

if (startButton && welcomeScreen && gardenScreen) {

    startButton.addEventListener("click", function () {

        welcomeScreen.classList.add("hidden");

        gardenScreen.classList.remove("hidden");

        // Automatically try playing the selected music
        if (backgroundMusic && backgroundMusic.getAttribute("src")) {

            backgroundMusic.play().catch(() => {

                musicButton.textContent = "▶ Play Music";

            });

        }

    });

}


// ======================================
// 4. PLAY AND PAUSE MUSIC
// ======================================

if (musicButton && backgroundMusic) {

    musicButton.addEventListener("click", function () {

        // Check if a music file is available
        if (!backgroundMusic.getAttribute("src")) {

            alert("No music file has been added yet.");

            return;

        }

        // PLAY MUSIC
        if (backgroundMusic.paused) {

            backgroundMusic.play().catch(() => {

                musicButton.textContent = "▶ Play Music";

                alert("Music could not be played. Please check your MP3 file.");

            });

        }

        // PAUSE MUSIC
        else {

            backgroundMusic.pause();

        }

    });


    // UPDATE BUTTON WHEN MUSIC PLAYS
    backgroundMusic.addEventListener("play", function () {

        musicButton.textContent = "❚❚ Pause Music";

    });


    // UPDATE BUTTON WHEN MUSIC PAUSES
    backgroundMusic.addEventListener("pause", function () {

        musicButton.textContent = "▶ Play Music";

    });


    // HANDLE MUSIC ERRORS
    backgroundMusic.addEventListener("error", function () {

        musicButton.textContent = "▶ Play Music";

        if (musicName) {

            musicName.textContent = "Music file unavailable. Check your MP3 path.";

        }

    });

}


// ======================================
// 5. OPEN LOVE LETTER
// ======================================

const openLetter = document.getElementById("openLetter");

const letterOverlay = document.getElementById("letterOverlay");

const closeLetter = document.getElementById("closeLetter");


if (openLetter && letterOverlay && closeLetter) {

    openLetter.addEventListener("click", function () {

        letterOverlay.classList.remove("hidden");

    });


    // ======================================
    // 6. CLOSE LOVE LETTER
    // ======================================

    closeLetter.addEventListener("click", function () {

        letterOverlay.classList.add("hidden");

    });


    // CLOSE WHEN CLICKING OUTSIDE THE LETTER

    letterOverlay.addEventListener("click", function (event) {

        if (event.target === letterOverlay) {

            letterOverlay.classList.add("hidden");

        }

    });


    // CLOSE USING ESCAPE KEY

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            letterOverlay.classList.add("hidden");

        }

    });

} else {

    console.error("Love letter HTML elements are missing!");

}


// ======================================
// 7. WEBSITE INITIALIZATION
// ======================================

console.log("Brianna's Surprise Website is ready! 💙🌷");

