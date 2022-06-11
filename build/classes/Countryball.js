import country from '../utils/all-country-data/index.js';
import CountryballAnimation from './CountryballAnimation.js';

class Countryball {
    constructor(options) {
        this.xy = [];
        this.hw = [];
        Object.assign(this, options);
        var searched = country.search(options.country);
        if (!searched || searched.length < 1) throw new Error('Country not found');
        this.country = {
            name: searched[0].name,
            flag: country.countryFlag(searched[0].name)
        };
        this.eyes = [
            [0, 0],
            [0, 0]
        ];
        return this;
    }
    // make a new CountryballAnimation instance, and bind() it to this Countryball instance
    animation = new CountryballAnimation(this)
    animate = {
        xy: (xy, duration, ease) => {
            console.log(this)
            let list = this.animation.xy(xy, duration, ease);
            let item = list[0]
            
            this.animation.ball = this;
            setInterval(() => {
                item = list[0]
                if (item) this.xy = list.shift(); 
                else return
            }, duration / list.length);
        },
        hw: (hw, duration, ease) => {
            let list = this.animation.hw(hw, duration, ease);
            this.animation.ball = this;
            setInterval(() => this.hw = list.shift(), duration / list.length);
        },
        eyes: ([eye1, eye2], duration, ease) => {
            let list = this.animation.eyes([eye1, eye2], duration, ease);
            this.animation.ball = this;
            setInterval(() => this.eyes = list.shift(), duration / list.length);
        }
    }
}
export default Countryball;
