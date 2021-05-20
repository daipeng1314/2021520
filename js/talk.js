new TypeIt("#tqyxhj", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("戴鹏 && 杨婉华")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("认识六年，一起走过的第三个520...")
    .pause(3000)
    .go();

new TypeIt('#talkToXHJ', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();