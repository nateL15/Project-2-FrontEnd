'use strict'

const saveNoteSuccess = function (data) {
  console.log(data)
  $('#message').text('Champion note created succesfully!')
}

const saveNoteFailure = function (error) {
  console.log(error)
  $('#message').text('Error Saving Note')
}

module.exports = {
  saveNoteSuccess,
  saveNoteFailure
}
