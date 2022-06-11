export default {
    linear: (t) => t,
    in: {
        quad: (t) => t * t,
        cubic: (t) => t * t * t,
        quart: (t) => t * t * t * t,
        quint: (t) => t * t * t * t * t,
        sine: (t) => 1 - Math.cos(t * Math.PI / 2),
        expo: (t) => Math.pow(2, 10 * (t - 1)),
        circ: (t) => 1 - Math.sqrt(1 - t * t),
        back: (t) => t * t * (3 * t - 2),
        elastic: (t) => t * t * (3 * t - 2),
        bounce: (t) => Math.pow(2, -10 * t) * Math.sin((t - 0.75) * Math.PI) + 1,
    },
    out: {
        quad: (t) => t * (2 - t),
        cubic: (t) => t * (2 - t) * (2 - t),
        quart: (t) => t * (2 - t) * (2 - t) * (2 - t),
        quint: (t) => t * (2 - t) * (2 - t) * (2 - t) * (2 - t),
        sine: (t) => Math.sin(t * Math.PI / 2),
        expo: (t) => 1 - Math.pow(2, -10 * t),
        circ: (t) => Math.sqrt(1 - Math.sqrt(1 - t * t)),
        back: (t) => (t - 1) * (t - 1) * (3 * t - 2) + 1,
        elastic: (t) => t * t * (3 * t - 2),
        bounce: (t) => 1 - Math.pow(2, -10 * t) * Math.sin((t - 0.75) * Math.PI)
    },
    inOut: {
        quad: (t) => t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
        cubic: (t) => t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
        quart: (t) => t < .5 ? 8 * t * t * t * t : -1 + (16 - 8 * t) * t * t * t,
        quint: (t) => t < .5 ? 16 * t * t * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) * (2 * t - 2) * (2 * t - 2) + 1,
        sine: (t) => 1 - Math.cos(t * Math.PI / 2),
        expo: (t) => t === 0 ? 0 : t === 1 ? 1 : t < .5 ? Math.pow(2, 20 * t - 10) / 2 : (2 - Math.pow(2, -20 * t + 10)) / 2,
        circ: (t) => t < .5 ? Math.sqrt(1 - Math.sqrt(1 - 4 * t * t)) / 2 : (Math.sqrt(1 - (4 * (t - 1) * (t - 1))) + 1) / 2,
        back: (t) => t * t * ((2.70158) * t - 1.70158),
        elastic: (t) => t * t * (2.70158 * t - 1.70158),
        bounce: (t) => t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
    }
};