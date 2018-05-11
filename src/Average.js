/*

    https://github.com/jniac/js-average

*/

export const through = (threshold, value, old) => old < threshold && value >= threshold ? 1 : old > threshold && value <= threshold ? -1 : 0

export default class Average {

	constructor({ value = 0, size = 10, nDerivative = 1 } = {}) {

        let valueOld = value
        let average = value
        let averageOld = value

        let delta = 0
        let sum = value * size

        let values = new Array(size).fill(value)

        let derivative = nDerivative > 0 ? new Average({ value: 0, size, nDerivative: nDerivative - 1 }) : null

        Object.assign(this, {

            size,

            value,
            valueOld,
            average,
            averageOld,

            delta,
            sum,

            values,

            nDerivative,
            derivative,

        })

	}

	setNewValue(value) {

        value = value || 0

        let { value:valueOld, average:averageOld, size, sum, values, derivative } = this

        let delta = value - valueOld

        sum += -values.shift() + value

        let average = sum / size

        values.push(value)

        if (derivative)
            derivative.setNewValue(delta)

        Object.assign(this, {

            value,
            valueOld,
            average,
            averageOld,

            sum,
            delta,

        })

		return this

	}

    get newValue() { return this.value }

    set newValue(value) { this.setNewValue(value) }

	through(threshold) {

        let { value, valueOld:old } = this

		return through(threshold, value, old)

	}

	throughAbs(threshold) {

        let { value, valueOld:old } = this

		return through(threshold, Math.abs(value), Math.abs(old))

	}

	averageThrough(threshold) {

        let { average:value, averageOld:old } = this

		return through(threshold, value, old)

	}

	averageThroughAbs(threshold) {

        let { average:value, averageOld:old } = this

        return through(threshold, Math.abs(value), Math.abs(old))

	}

}
