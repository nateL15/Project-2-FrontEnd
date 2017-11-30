'use strict'

const saveNoteSuccess = function (data) {
  console.log(data)
  $('#message').text('Saved Note Successfully')
}

const saveNoteFailure = function (error) {
  console.log(error)
  $('#message').text('Error Saving Note')
}

module.exports = {
  saveNoteSuccess,
  saveNoteFailure
}
