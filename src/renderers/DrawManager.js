function props(element, properties) {
    for (var property in properties) element.style.setProperty(property, properties[property]);
    return element;
}

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
            "--flag": `url(${flag})`
        })
        console.log(child)
        if (child.label) {
            element.classList.add('labeled')
            element.style.setProperty('--label', '"'+child.label+'"')
        }
        return child;
    }
}