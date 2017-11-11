# chrono-DDMM-refiner

Support Spanish format for `DD/MM`.

Use this module like this: 
```
const Chrono = require('chrono-node')
const DDMMRefiner = require('chrono-ddmm-refiner')
...
const customChrono = new Chrono.Chrono()
customChrono.refiners.push(DDMMRefiner)
customChrono.parseDate('10/02') // February 10
```