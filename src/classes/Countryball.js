import country from '../utils/all-country-data/index.js';
import {GetLerpList} from './GetLerpList.js'

// Poland flag, but upside down.
let fakePoland = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAABCCAYAAAA8Gnr3AAAAAXNSR0IArs4c6QAAA+pJREFUeF7tnFt22zAMRM19qfvfRLOVskeRIutFYgYPknKbz3gADC5gRrJ8kr6mKb8UP3NQUsR9B6kqaootpVQ+deVuo9LvacqMCcp0BSiVB2nYa3heeXae09evKZc2qwTCHRAC8cGapD0uSj1vA6A2ghJvpXstAbtk7pBbLBzbJOVJN+9qCQxyQGGqcUg8rskK5PR6pTzclUDoFm/DvA7MUvcesmIpLCagRX2w6Ag5vV4597+upHiKC7EXiOKlNChDfWJnMpqtga7XFYWltUDIyDrUNewRxOot4JjY6s0Ik0jWItDlLE9U6Db5X+Dl2KP82YVjsdAtVPi8PV4UeaS+dJssZf3/+oFA/Wak5WeSp8GM+kdMsz9FyF2atLxVLbEackRM/HEBNt9lqAQolXTt3Q5ZcUOlMnwOAofnUsuYxA7ZaOBzwstT/1zIDR59oUecDjL1Vl3EqCHvzXapS/V77WCFjGfRmcbzh3wM5j05Mh+8ya3ujkj/j5BfIYNL98SPHHtNBN5kzCD+yIo6dsDBYx5XVUTOggFnyFSbnJi9WijpT7+/DtufPgWZ2j4OIa/2YsHmYfXz06zSl1vigCpc3o7AkgeMBWX1DUllyO+HiS6V+E0NidD1wi7cWU8dF1vfm1fFjYauTxx5dP6TE+Rrae8nI43N4dTsSmoTAzjoNpnsG28yoEPSa4Q85Tx/ncXpB6cJFnRPCNb1lflC9vUmZEMGUNEg4U79DAB56dbesz1Diek+s6bKAJA166Jp9aeOJVbjdf5y7O5MZsvvd5CNpewqkitCNku3sYaETTYZ8YdoFgonJR5IzdVTvEBuYLRBCU8ux1y3hzLeUZNNjuteylwHgWOS6qyvFxI2gSw2IwrAJisyqgQirlxynMN1kFkTdkanDIOfyyd7EGSEqZpjaPK9q6BCQNoyZCBYDdY5sK9VuTq0yRiT6yEll8cyP111A9mOZsuAHJ32cvgMSsbwDCql4yYX6jeD2KwQDboCOc50XGa6fyzAaFj+7AIpgGiwdmhVx9Ki1x9v/HExVFc6M7ookWlRwENGa4mdiAK00kUXl7l+T1QyHAdZjegd2AyWg9dain6QQYKgLBST1UMcZLUzdaALaK/q+zzy1YWLdTzJtUmvtq8e4jIfny3EbTLOlVSyaCp6NhXpdJZ/lzh+76JBVYVRXcg4vdCb3PLtrIO7j9q7ZaHrOr2rQkM+NC76LgnEQN0FqX0qWwbW4ZiXcKurrRmveYCgPSFKJddNtpS0xEr2Bnpd3Iay15T/5Nzr37KWTr0xx3ZyRZj8gKsLottObwz6D9/4LXUiWSkLQB4Na5CfoLQz+7/FKMOi45sG3gAAAABJRU5ErkJggg==`

/**
 * Class for creating countryballs
 * @class
 * @classdesc Class for countryballs
 * @param {object} options - Options for the countryball (see {@link CountryballOptions})
 */
export class Countryball {
    constructor(options) {
        this.xy = [];
        this.hw = [];
        Object.assign(this, options);
        var searched = country.search(options.country);
        if (!searched || searched.length < 1) throw new Error('Country not found');
        this.country = { name: searched[0].name };
        if (options.poland == true && this.country.name === 'Poland') this.country.flag = fakePoland;
        else this.country.flag = country.countryFlag(searched[0].name)
        this.eyes = [
            [0, 0],
            [0, 0]
        ];
        if (options.label === true) this.label = searched[0].name[options.lang || 'en'];
        return this;
    }

    /** Instantiate a GetLerpList object, which can be used to create lerplists for the animation of the countryball */
    getLerpListFor = new GetLerpList(this)

    animate = {
        /** Animate the countryball to a new position.
         * @param {Number[]} xy 
         * @param {Number} duration - Duration of the animation in milliseconds
         * @param {String} ease - Ease function to use. This is a string which has two comma-delimited values. The first is the type of easing (inOut, in, out), and the second is its interpolation (linear, quad, cubic, quart, quint, sine, expoential, circle, elastic, back, bounce). Of course linear has no variants so just write "linear".
         * @memberof Countryball.animate
         */
        xy: (xy, duration, ease) => {
            let list = this.getLerpList.xy(xy, duration, ease);
            let item = list[0]

            this.getLerpList.ball = this;
            setInterval(() => {
                item = list[0]
                if (item) this.xy = list.shift();
                else return
            }, duration / list.length);
        },
        /** Animate the countryball to a new height and width.
         * @param {Number[]} hw
         * @param {Number} duration
         * @param {String} ease - See {@link Countryball#ease}
         * @memberof Countryball.animate
         */
        hw: (hw, duration, ease) => {
            let list = this.getLerpList.hw(hw, duration, ease);
            this.getLerpList.ball = this;
            setInterval(() => this.hw = list.shift(), duration / list.length);
        },
        /** Animate the countryball's eyes. 
         * @param {Number[]} eyes - An array of two arrays of two numbers. The first array is the x and y coordinates of the left eye, and the second array is the x and y coordinates of the right eye.
         * @param {Number} duration
         * @param {String} ease - See {@link Countryball#ease}
         * @memberof Countryball.animate
         */
        eyes: ([eye1, eye2], duration, ease) => {
            let list = this.getLerpList.eyes([eye1, eye2], duration, ease);
            this.getLerpList.ball = this;
            setInterval(() => this.eyes = list.shift(), duration / list.length);
        }
    }
}

