const request = require('request');
const forecast = require('./utils/forecast')

forecast(-75.7088, 44.1545, (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})
