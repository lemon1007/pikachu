import string from "./pikachucss";

const pikachuCssShow = document.querySelector('#pikachuCssShow');
const pikachuInnerHtml = document.querySelector('#pikachuInnerHtml');


// 播放器对象
const player = {
    id: undefined,
    speed: 100,
    ui: {
        pikachuCssShow: document.querySelector('#pikachuCssShow'),
        pikachuInnerHtml: document.querySelector('#pikachuInnerHtml'),

    },
    n: 1,
    init: () => {
        player.ui.pikachuCssShow.innerText = string.substring(0, player.n);
        player.ui.pikachuInnerHtml.innerHTML = string.substring(0, player.n);
        player.id = player.play();
        player.bindEvents();
    },
    events: {
        '#btnPlay': 'play',
        '#btnPause': 'pause',
        '#btnSlow': 'slow',
        '#btnFast': 'fast',
        '#btnNormal': 'normal'
    },
    bindEvents: () => {
        for (let key in player.events) {
            if (player.events.hasOwnProperty(key)) {
                const value = player.events[key];
                document.querySelector(key).onclick = player[value]
            }
        }
    },
    timer: () => {
        player.n += 1;
        if (player.n > string.length) {
            window.clearInterval(player.id);
            return;
        }
        player.ui.pikachuCssShow.innerText = string.substring(0, player.n);
        player.ui.pikachuInnerHtml.innerHTML = string.substring(0, player.n);
        player.ui.pikachuCssShow.scrollTop = player.ui.pikachuCssShow.scrollHeight
    },
    play: () => {
        player.id = setInterval(player.timer, player.speed)
        return player.id;
    },
    pause: () => {
        window.clearInterval(player.id);
    },
    slow: () => {
        player.pause();
        player.speed = 500;
        player.play()
    },
    normal: () => {
        player.pause();
        player.speed = 100;
        player.play()
    },
    fast: () => {
        player.pause();
        player.speed = 0;
        player.play()
    },
}

// 初始化播放器
player.init()
