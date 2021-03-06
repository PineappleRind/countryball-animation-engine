import ease from '../utils/ease.js';

/**
 * @class
 * @classdesc GetLerpList class. This class creates an array of values that can be used to animate the countryball
 * @param {Countryball} ball - The countryball to animate
 * @returns {GetLerpList}
 */
export class GetLerpList {
    constructor(ball) {
        this.ball = ball
        return this;
    }
    /** Create a lerplist
     * @param {Number} duration - Duration of the animation in milliseconds
     * @param {String} easing - See {@link Countryball#ease}
     * @param {*} xy - Array of two numbers to begin from. This is usually x/y coordinates, or height/width values
     * @param {*} nxy - Array of two numbers to lerp to
     * @returns {Number[][]}
     * @memberof GetLerpList
     */
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
    /** Get a lerplist for animating xy coordinates
     * @param {xy} xy - Array of x/y coordinates to animate to
     * @param {*} duration - Duration of the animation in milliseconds
     * @param {*} ease - See {@link Countryball#ease}
     * @returns {Number[][]}
     * @memberof GetLerpList
     */
    xy = ([x, y], duration, ease) => this.lerplist(duration, ease, [this.ball.xy[0], this.ball.xy[1]], [x, y]);

    /** Get a lerplist for animating height and width
     * @param {hw} hw - Array of height/width values to animate to
     * @param {Number} duration - Duration of the animation in milliseconds
     * @param {String} easing - See {@link Countryball#ease}
     * @returns {Number[][]}
     * @memberof GetLerpList
     */
    hw = ([h, w], duration, ease) => this.lerplist(duration, ease, [this.ball.hw[0], this.ball.hw[1]], [h, w]);

    /** Not implemented properly yet (get a lerplist for animating eyes)
     * @param {eyes} eyes - Array of two arrays of two numbers. The first array is the x and y coordinates of the left eye, and the second array is the x and y coordinates of the right eye.
     * @param {Number} duration - Duration of the animation in milliseconds
     * @param {String} easing - See {@link Countryball#ease}
     * @returns {Number[][]}
     * @memberof GetLerpList
     */
    eyes = ([[eye1x, eye1y], [eye2x, eye2y]], duration, ease) => {
        var eye1 = lerplist(duration, ease, [this.ball.eyes[0][0], this.ball.eyes[0][1]], [eye1x, eye1y]);
        var eye2 = lerplist(duration, ease, [this.ball.eyes[1][0], this.ball.eyes[1][1]], [eye2x, eye2y]);
        return [eye1, eye2];
    }
}

/**
 * This function parses the easing string and returns its corresponding function
 * @param {String} str 
 * @returns Function
 * @private
 */
function parseEase(str) {
    str = str.split(',');
    str = str.map(e => e.trim());
    if (!ease[str[0]] || !ease[str[0]][str[1]]) throw new Error('Ease not found');
    return ease[str[0]][str[1]];
}