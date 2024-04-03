import type { Ease } from '$lib/models/animation/instruction/animate';

export function getEasingFunction(ease: Ease): (x: number) => number {
	switch (ease) {
		case 'in-sine':
			return easeInSine;
		case 'out-sine':
			return easeOutSine;
		case 'in-out-sine':
			return easeInOutSine;
		case 'in-quad':
			return easeInQuad;
		case 'out-quad':
			return easeOutQuad;
		case 'in-out-quad':
			return easeInOutQuad;
		case 'in-cubic':
			return easeInCubic;
		case 'out-cubic':
			return easeOutCubic;
		case 'in-out-cubic':
			return easeInOutCubic;
		case 'in-quart':
			return easeInQuart;
		case 'out-quart':
			return easeOutQuart;
		case 'in-out-quart':
			return easeInOutQuart;
		case 'in-quint':
			return easeInQuint;
		case 'out-quint':
			return easeOutQuint;
		case 'in-out-quint':
			return easeInOutQuint;
		case 'in-expo':
			return easeInExpo;
		case 'out-expo':
			return easeOutExpo;
		case 'in-out-expo':
			return easeInOutExpo;
		case 'in-circ':
			return easeInCirc;
		case 'out-circ':
			return easeOutCirc;
		case 'in-out-circ':
			return easeInOutCirc;
		case 'in-back':
			return easeInBack;
		case 'out-back':
			return easeOutBack;
		case 'in-out-back':
			return easeInOutBack;
		case 'in-elastic':
			return easeInElastic;
		case 'out-elastic':
			return easeOutElastic;
		case 'in-out-elastic':
			return easeInOutElastic;
		case 'in-bounce':
			return easeInBounce;
		case 'out-bounce':
			return easeOutBounce;
		case 'in-out-bounce':
			return easeInOutBounce;
	}
}

function easeInSine(x: number): number {
	return 1 - Math.cos((x * Math.PI) / 2);
}

function easeOutSine(x: number): number {
	return Math.sin((x * Math.PI) / 2);
}

function easeInOutSine(x: number): number {
	return -(Math.cos(Math.PI * x) - 1) / 2;
}

function easeInQuad(x: number): number {
	return x * x;
}

function easeOutQuad(x: number): number {
	return 1 - (1 - x) * (1 - x);
}

function easeInOutQuad(x: number): number {
	return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
}

function easeInCubic(x: number): number {
	return x * x * x;
}

function easeOutCubic(x: number): number {
	return 1 - Math.pow(1 - x, 3);
}

function easeInOutCubic(x: number): number {
	return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
}

function easeInQuart(x: number): number {
	return x * x * x * x;
}

function easeOutQuart(x: number): number {
	return 1 - Math.pow(1 - x, 4);
}

function easeInOutQuart(x: number): number {
	return x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2;
}

function easeInQuint(x: number): number {
	return x * x * x * x * x;
}

function easeOutQuint(x: number): number {
	return 1 - Math.pow(1 - x, 5);
}

function easeInOutQuint(x: number): number {
	return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2;
}

function easeInExpo(x: number): number {
	return x === 0 ? 0 : Math.pow(2, 10 * x - 10);
}

function easeOutExpo(x: number): number {
	return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
}

function easeInOutExpo(x: number): number {
	return x === 0
		? 0
		: x === 1
			? 1
			: x < 0.5
				? Math.pow(2, 20 * x - 10) / 2
				: (2 - Math.pow(2, -20 * x + 10)) / 2;
}

function easeInCirc(x: number): number {
	return 1 - Math.sqrt(1 - Math.pow(x, 2));
}

function easeOutCirc(x: number): number {
	return Math.sqrt(1 - Math.pow(x - 1, 2));
}

function easeInOutCirc(x: number): number {
	return x < 0.5
		? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2
		: (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2;
}

function easeInBack(x: number): number {
	const c1 = 1.70158;
	const c3 = c1 + 1;

	return c3 * x * x * x - c1 * x * x;
}

function easeOutBack(x: number): number {
	const c1 = 1.70158;
	const c3 = c1 + 1;

	return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
}

function easeInOutBack(x: number): number {
	const c1 = 1.70158;
	const c2 = c1 * 1.525;

	return x < 0.5
		? (Math.pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2
		: (Math.pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
}

function easeInElastic(x: number): number {
	const c4 = (2 * Math.PI) / 3;

	return x === 0 ? 0 : x === 1 ? 1 : -Math.pow(2, 10 * x - 10) * Math.sin((x * 10 - 10.75) * c4);
}

function easeOutElastic(x: number): number {
	const c4 = (2 * Math.PI) / 3;

	return x === 0 ? 0 : x === 1 ? 1 : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1;
}

function easeInOutElastic(x: number): number {
	const c5 = (2 * Math.PI) / 4.5;

	return x === 0
		? 0
		: x === 1
			? 1
			: x < 0.5
				? -(Math.pow(2, 20 * x - 10) * Math.sin((20 * x - 11.125) * c5)) / 2
				: (Math.pow(2, -20 * x + 10) * Math.sin((20 * x - 11.125) * c5)) / 2 + 1;
}

function easeInBounce(x: number): number {
	return 1 - easeOutBounce(1 - x);
}

function easeOutBounce(x: number): number {
	const n1 = 7.5625;
	const d1 = 2.75;

	if (x < 1 / d1) {
		return n1 * x * x;
	} else if (x < 2 / d1) {
		return n1 * (x -= 1.5 / d1) * x + 0.75;
	} else if (x < 2.5 / d1) {
		return n1 * (x -= 2.25 / d1) * x + 0.9375;
	} else {
		return n1 * (x -= 2.625 / d1) * x + 0.984375;
	}
}

function easeInOutBounce(x: number): number {
	return x < 0.5 ? (1 - easeOutBounce(1 - 2 * x)) / 2 : (1 + easeOutBounce(2 * x - 1)) / 2;
}
