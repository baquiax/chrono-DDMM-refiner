'use strict'
const Chrono = require('chrono-node')
const Moment = require('moment')

// Refine MM/DD Spanish format date
const ddMMRefiner = new Chrono.Refiner();
ddMMRefiner.refine = function (text, results, opt) {
  results.forEach(function (result) {
    if (result.tags.ENSlashDateFormatParser) {
      const match = /\b(\d{1,2})\/(\d{1,2})\b/i.exec(text)
      if (match) {
        const refDate = Moment(result.ref)
        const day = parseInt(match[1])
        const month = parseInt(match[2])
        if (month < refDate.month() + 1) {
          result.start.assign('year', refDate.year() + 1)
        }
        result.start.assign('month', month)
        result.start.assign('day', day)
        result.start.assign('hour', 0)
      }
    }
  });
  
  return results;
}

module.exports = ddMMRefiner
