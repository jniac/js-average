# js-average


```javascript
import ValueOver from '../src/ValueOver.js'

let average = new ValueOver({ value: 0, size: 5, nDerivative: 1 })

average.newValue = 8        // or average.setNewValue(8)
average.newValue = 12

average.values              // [0, 0, 0, 8, 12]
average.through(10)         // 1, positive change
average.average             // 4, because (0 + 0 + 0 + 8 + 12) / 5

average.derivative.value    // 4, because 12 - 8
average.derivative.values   // [0, 0, 0, 8, 4]
average.derivative.average  // 2.4

...

```
