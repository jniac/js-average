# js-valueover


```javascript
import ValueOver from '../src/ValueOver.js'

let value = new ValueOver({ value: 0, size: 5, nDerivative: 1 })

value.newValue = 8        // or value.setNewValue(8)
value.newValue = 12

value.values              // [0, 0, 0, 8, 12]
value.through(10)         // 1, positive change
value.average             // 4, because (0 + 0 + 0 + 8 + 12) / 5

value.derivative.value    // 4, because 12 - 8
value.derivative.values   // [0, 0, 0, 8, 4]
value.derivative.average  // 2.4

...

```
