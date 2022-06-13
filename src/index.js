import Countryball from "./classes/Countryball.js";
import DrawManager from './renderers/DrawManager.js';
export default class CountryballAnimation {
    constructor(options) {
        let drawManager = new DrawManager();
        this.drawManager = drawManager;
        this.countryballs = []
        this.begin()
        this.options = options
        return this;
    }
    add(xy, hw, country, other) {
        let countryball = new Countryball({ xy, hw, country }, {
            ...this.options,
            ...other

        });
        this.countryballs.push(countryball);
        this.countryballs = this.drawManager.update(this)
        return countryball;
    }
    begin() {
        this.countryballs = this.drawManager.update(this)
        window.requestAnimationFrame(this.begin.bind(this))
    }
};
