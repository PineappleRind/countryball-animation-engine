import { Countryball } from "./classes/Countryball.js";
import DrawManager from './renderers/DrawManager.js';
/**
 * @class
 * @classdesc CountryballAnimation class; use this to create a new animation
 * @param {Object} options - Main options.
 */
export class CountryballAnimation {
    constructor(options) {
        let drawManager = new DrawManager();
        this.drawManager = drawManager;
        this.countryballs = [] 
        this.begin()
        this.options = options
        return this;
    }
    /**
     * @param {Number[]} xy - The x and y coordinates of the countryball
     * @param {Number[]} hw - The height and width of the countryball
     * @param {String} country - Country name, case insensitive (e.g. "united states")
     * @param {Object} other - Other options for the countryball 
     * @returns {Countryball}
     * @memberof CountryballAnimation
     */
    add(xy, hw, country, other) {
        let countryball = new Countryball({
            xy, hw, country, ...this.options,
            ...other
        });
        this.countryballs.push(countryball);
        this.countryballs = this.drawManager.update(this)
        return countryball;
    }
    /** Begin the animation. This starts updating the countryballs' positions every frame (60fps)
     * @memberof CountryballAnimation 
     */
    begin() {
        this.countryballs = this.drawManager.update(this)
        window.requestAnimationFrame(this.begin.bind(this))
    }
};
