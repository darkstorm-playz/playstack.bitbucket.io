// Array to store game data
const games = [
    {
        name: "Basketball Stars",
        embedCode: `<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no" />
    <link rel="stylesheet" href="https://36043189-480959866522093217.preview.editmysite.com/uploads/b/139890129-743801889220072865/files/assets/css/app.css" type="text/css" />
    <title>Basketball Stars</title>

    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
</head>

<body>
    <div id="content"></div>
    <div id="orientation"></div>
    <div id="loader">Loading ...</div>
    <script type="text/javascript" src="https://imasdk.googleapis.com/js/sdkloader/ima3.js"></script>

    <script type="text/javascript" src="https://36043189-480959866522093217.preview.editmysite.com/uploads/b/139890129-743801889220072865/files/assets/lib/nape.min.js">
        var nape ="nape.min.js";
    </script>

    <script type="text/javascript" src="https://36043189-480959866522093217.preview.editmysite.com/uploads/b/139890129-743801889220072865/files/assets/lib/jquery-3.1.1.min.js"></script>
    <script type="text/javascript" src="https://36043189-480959866522093217.preview.editmysite.com/uploads/b/139890129-743801889220072865/files/assets/lib/easeljs-0.8.2.combined.js"></script>
    <script type="text/javascript" src="https://36043189-480959866522093217.preview.editmysite.com/uploads/b/139890129-743801889220072865/files/assets/lib/bluebird.min.js"></script>
    <script type="text/javascript" src="https://36043189-480959866522093217.preview.editmysite.com/uploads/b/139890129-743801889220072865/files/assets/lib/phaser.min.js"></script>
    <script type="text/javascript" src="https://36043189-480959866522093217.preview.editmysite.com/uploads/b/139890129-743801889220072865/files/assets/lib/phaser-cachebuster.min.js"></script>
    <script type="text/javascript" src="https://36043189-480959866522093217.preview.editmysite.com/uploads/b/139890129-743801889220072865/files/assets/lib/phaser-super-storage.min.js"></script>
    <script type="text/javascript" src="https://36043189-480959866522093217.preview.editmysite.com/uploads/b/139890129-743801889220072865/files/assets/lib/dragonBones.min.js"></script>


    <script type="text/javascript">
        var notIE11 = (typeof (Event) ==='function');

        window.SDK_OPTIONS = {
            gameId: "ycc9yyyfyazoiibce061j1b7jx91tt8a",
            onEvent: function (event) {
                switch (event.name) {
                    case "SDK_GAME_START":
                        // advertisement done, resume game logic and unmute audio
                        var event;
                        if (notIE11) {
                            event = new Event("SDK_GAME_START");
                        } else {
                            event = document.createEvent('Event');
                            event.initEvent('SDK_GAME_START', true, true);
                        }
                        document.getElementById("content").dispatchEvent(event);
                        break;
                    case "SDK_GAME_PAUSE":
                        // pause game logic / mute audio
                        var event;
                        if (notIE11) {
                            event = new Event("SDK_GAME_PAUSE");
                        } else {
                            event = document.createEvent('Event');
                            event.initEvent('SDK_GAME_PAUSE', true, true);
                        }
                        document.getElementById("content").dispatchEvent(event);
                        break;
                    case "SDK_READY":
                        // this event is triggered when your user doesn't want personalised targeting of ads and such
                        console.log("SDK_READY");
                        break;
                }
            },
        };
        (function (a, b, c) {
            var d = a.getElementsByTagName(b)[0];
            a.getElementById(c) || (a = a.createElement(b), a.id = c, a.src ="https://cdn.jsdelivr.net/gh/st39/sdk@main/sdk.js", d.parentNode.insertBefore(a, d))
        })(document, "script", "gamemonetize-sdk");
    </script>
<script type="text/javascript" src="https://36043189-480959866522093217.preview.editmysite.com/uploads/b/139890129-743801889220072865/files/bs.min.js"></script><script defer src="https://static.cloudflareinsights.com/beacon.min.js/v8c78df7c7c0f484497ecbca7046644da1771523124516" integrity="sha512-8DS7rgIrAmghBFwoOTujcf6D9rXvH8xm8JQ1Ja01h9QX8EzXldiszufYa4IFfKdLUKTTrnSFXLDkUEOTrZQ8Qg==" data-cf-beacon='{"version":"2024.11.0","token":"f2d0e44dbf6b450ebb3fee35aed5891e","r":1,"server_timing":{"name":{"cfCacheStatus":true,"cfEdge":true,"cfExtPri":true,"cfL4":true,"cfOrigin":true,"cfSpeedBrain":true},"location_startswith":null}}' crossorigin="anonymous"></script>
</body>
<script src="https://cdn.jsdelivr.net/gh/st39/sdk@main/api.js"></script>
</html>`
    }
];

// Function to render games
function renderGames() {
    const gamesContainer = document.getElementById('gamesContainer');

    if (games.length === 0) {
        gamesContainer.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem;">
                <h3 style="color: var(--text-secondary); font-size: 1.5rem;">
                    Games will appear here once you add them!
                </h3>
                <p style="color: var(--text-secondary); margin-top: 1rem;">
                    Edit the games array in script.js to add your game embeds.
                </p>
            </div>
        `;
        return;
    }

    gamesContainer.innerHTML = games.map((game, index) => `
        <div class="game-card">
            <h3 class="game-title">${game.name}</h3>
            <div class="game-embed" data-game-index="${index}">
                ${game.embedCode}
            </div>
            <button class="fullscreen-btn" onclick="toggleFullscreen(${index})">
                Play Fullscreen
            </button>
        </div>
    `).join('');
}

// Fullscreen functionality
function toggleFullscreen(gameIndex) {
    const game = games[gameIndex];

    // Create fullscreen overlay
    let overlay = document.querySelector('.fullscreen-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'fullscreen-overlay';
        document.body.appendChild(overlay);
    }

    // Set overlay content
    overlay.innerHTML = `
        <div class="fullscreen-content">
            <button class="fullscreen-close" onclick="closeFullscreen()">✕ Close</button>
            ${game.embedCode.replace('height="400"', 'height="100%"')}
        </div>
    `;

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeFullscreen() {
    const overlay = document.querySelector('.fullscreen-overlay');
    if (overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Close fullscreen on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeFullscreen();
    }
});

// Initialize games on page load
document.addEventListener('DOMContentLoaded', () => {
    renderGames();
});

// Example: How to add games programmatically
// Uncomment and modify this function to add games via a form or other method
/*
function addGame(name, embedCode) {
    games.push({ name, embedCode });
    renderGames();
}
*/
