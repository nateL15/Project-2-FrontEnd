'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const login = require('./auth/events.js')
const notes = require('./notes/events.js')

$(() => {
  setAPIOrigin(location, config)
  login.addHandlers()
  notes.addHandlers()
})

// const loginForms = function (){
//   $('#change-password').show()
//   $('#sign-out').show()
//   $('save-note').show()

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
