export const through = (threshold, value, old) => old < threshold && value >= threshold ? 1 : old > threshold && value <= threshold ? -1 : 0

export default class Average {

	constructor({ value = 0, length = 10, nDerivative = 1 } = {}) {

        let valueOld = value
        let average = value
        let averageOld = value

        let delta = 0
        let sum = value * length

        let array = new Array(length).fill(value)

        let derivative = nDerivative > 0 ? new Average({ value: 0, length, nDerivative: nDerivative - 1 }) : null

        Object.assign(this, {

            length,

            value,
            valueOld,
            average,
            averageOld,

            delta,
            sum,

            array,

            nDerivative,
            derivative,

        })

	}

	setNewValue(value) {

        value = value || 0

        let { value:valueOld, average:averageOld, length, sum, array, derivative } = this

        let delta = value - valueOld

        sum += -array.shift() + value

        let average = sum / length

        array.push(value)

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
