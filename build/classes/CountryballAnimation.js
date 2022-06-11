import ease from '../utils/ease.js';
export default class CountryballAnimation {
    constructor(ball) {
        this.ball = ball
        return this;
    }
    lerplist = (duration, easing, [x, y], [x1, y1]) => {
        var lerp = (a, b, t) => a + (b - a) * t;
        var lerplist = [];
        var t = 0;
        var dt = 1 / duration;
        let ease = parseEase(easing);
        while (t < 1) {
            console.log(t, ease(t), x, y, x1, y1);
            lerplist.push([lerp(x, x1, ease(t)), lerp(y, y1, ease(t))]);
            t += dt;
        }
        return lerplist;
    }
    xy = ([x, y], duration, ease) => this.lerplist(duration, ease, [this.ball.xy[0], this.ball.xy[1]], [x, y]);
    hw = ([h, w], duration, ease) => this.lerplist(duration, ease, [this.ball.hw[0], this.ball.hw[1]], [h, w]);
    eyes = ([[eye1x, eye1y], [eye2x, eye2y]], duration, ease) => {
        var eye1 = lerplist(duration, ease, [this.ball.eyes[0][0], this.ball.eyes[0][1]], [eye1x, eye1y]);
        var eye2 = lerplist(duration, ease, [this.ball.eyes[1][0], this.ball.eyes[1][1]], [eye2x, eye2y]);
        return [eye1, eye2];
    }
}

function parseEase(str) {
    str = str.split(',');
    str = str.map(e => e.trim());
    if (!ease[str[0]] || !ease[str[0]][str[1]]) throw new Error('Ease not found');
    return ease[str[0]][str[1]];
}