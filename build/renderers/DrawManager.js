export default class DrawManager {
    constructor() {
        return this;
    }

    render(scene) {
        scene.countryballs.forEach((child, i) => { scene.countryballs[i] = this.draw(child) });
        return scene.countryballs;
    }

    update = this.render;
    idCount = 0;
    draw(child) {
        this.idCount++;
        let [x, y] = child.xy;
        let [h, w] = child.hw;
        let flag = child.country.flag;
        if (!child.id) {
            let element = document.createElement('div');
            element.style.left = x + 'px'
            element.style.top = y + 'px'
            element.style.width = w + 'px'
            element.style.height = h + 'px'
            element.style.backgroundImage = `url(${flag})`
            element.classList.add('countryball')

            let eyeCont = document.createElement('div');
            eyeCont.classList.add('eye-container')
            element.appendChild(eyeCont)

            for (let i = 0; i < child.eyes.length; i++) {
                let eye = document.createElement('div');
                eye.classList.add('eye')
                eye.style.left = child.eyes[i][0] + 'px'
                eye.style.top = child.eyes[i][1] + 'px'
                eyeCont.appendChild(eye)
            }

            child.id = btoa(this.idCount.toString(5)).replace(/=/g, '');
            element.id = child.id;
            document.body.appendChild(element);
        } else {

            let element = document.getElementById(child.id);
            element.style.left = x + 'px'
            element.style.top = y + 'px'
            element.style.width = w + 'px'
            element.style.height = h + 'px'
            element.style.backgroundImage = `url(${flag})`
            // let eye1 = document.getElementById(child.id + '-eye1');
            // eye1.style.left = x + eye1x + 'px'
            // eye1.style.top = y + eye1y + 'px'
            // let eye2 = document.getElementById(child.id + '-eye2');
            // eye2.style.left = x + eye2x + 'px'
            // eye2.style.top = y + eye2y + 'px'
        }
        return child;
    }
}