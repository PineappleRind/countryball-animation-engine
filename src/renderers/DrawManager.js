function props(element, properties) {
    for (var property in properties) element.style.setProperty(property, properties[property]);
    return element;
}

/**
 * @class DrawManager
 * @classdesc Class to manage the drawing of countryballs.
 * @returns {DrawManager}
 */
export default class DrawManager {
    constructor() {
        return this;
    }

    /**
     * @param {CountryballAnimation} scene 
     * @returns {Countryball[]}
     */
    render(scene) {
        scene.countryballs.forEach((child, i) => { scene.countryballs[i] = this.draw(child) });
        return scene.countryballs;
    }

    /** Alias for render */
    update = this.render;
    idCount = 0;

    /**
     * @param {Countryball} countryball
     * @returns {Countryball}
     * @memberof DrawManager
     * @returns {Countryball}
     * Draws or updates a countryball based on if it already exists or not
     */
    draw(child) {
        this.idCount++;
        let element
        let id = btoa(this.idCount.toString(5)).replace(/=/g, '');
        let [x, y] = child.xy;
        let [h, w] = child.hw;
        let flag = child.country.flag;
        if (!child.id) {
            element = document.createElement('div');

            element.classList.add('countryball')

            let eyeCont = document.createElement('div');
            eyeCont.classList.add('eye-container')
            element.appendChild(eyeCont)

            for (let i = 0; i < child.eyes.length; i++) {
                let eye = document.createElement('div');
                eye.classList.add('eye')
                eye = props(eye, {
                    "--left": `${child.eyes[i].x}px`, "--top": `${child.eyes[i].y}px`,
                    "--eye-size": `${w * 0.2}px`
                })
                eye.id = `eye-${id}-${i}`
                eyeCont.appendChild(eye)
            }

            child.id = id;
            element.id = child.id;
            document.body.insertAdjacentElement('afterbegin', element);
        } else {
            element = document.getElementById(child.id);
            // let eye1 = document.getElementById(child.id + '-eye1');
            // eye1.style.left = x + eye1x + 'px'
            // eye1.style.top = y + eye1y + 'px'
            // let eye2 = document.getElementById(child.id + '-eye2');
            // eye2.style.left = x + eye2x + 'px'
            // eye2.style.top = y + eye2y + 'px'
        }
        element = props(element, {
            "--left": `${x}px`, "--top": `${y}px`,
            "--height": `${h}px`, "--width": `${w}px`,
            "--flag": `url('${flag}')`
        })
        if (child.label) {
            element.classList.add('labeled')
            element.style.setProperty('--label', '"' + child.label + '"')
            // set label size as a property, based on countryball height
            // decrease label size if it has a lot of text
            let labelSize = h * 0.1;
            if (child.label.length > 10) labelSize *= 0.8;
            element.style.setProperty('--label-size', `${labelSize}px`)
        }
        return child;
    }
}