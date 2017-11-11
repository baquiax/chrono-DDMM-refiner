'use strict'
const Chrono = require('chrono-node')
const DDMMRefiner = require('./index')
const customChrono = new Chrono.Chrono()
customChrono.refiners.push(DDMMRefiner)
const date = customChrono.parseDate('10/02') // February 10
console.log(date)