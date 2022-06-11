import Countryball from "./classes/Countryball.js";
import DrawManager from './renderers/DrawManager.js';
class CountryballAnimation {
    constructor() {
        let drawManager = new DrawManager();
        this.drawManager = drawManager;
        this.countryballs = []
        this.begin()
        return this;
    }
    add( xy, hw, country ) {
        let countryball = new Countryball({ xy, hw, country });
        this.countryballs.push(countryball);
        this.countryballs = this.drawManager.update(this)
        return countryball;
    }
    begin() {
        this.countryballs = this.drawManager.update(this)
        window.requestAnimationFrame(this.begin.bind(this))
    }
};
const scene = new CountryballAnimation()
const countryballs = [
    scene.add([10, 10], [100, 100], 'indonesia'),
    scene.add([120, 10], [100, 100], 'poland'),
    scene.add([230, 10], [100, 100], 'monaco')
]