# js-average


```javascript
import Average from '../src/Average.js'

let average = new Average({ value: 0, length: 5, nDerivative: 1 })

average.newValue = 8 // or average.setNewValue(8)
average.newValue = 12

average.through(10)         // 1, positive change
average.average             // 4 : (0 + 0 + 0 + 8 + 12) / 5
average.derivative.value    // 4

```
