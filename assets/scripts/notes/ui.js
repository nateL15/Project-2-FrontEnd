'use strict'

const showNotes = require('../templates/show-notes.handlebars')

const saveNoteSuccess = function (data) {
  console.log(data)
  $('#message').text('Champion note created succesfully!')
}

const saveNoteFailure = function (error) {
  console.log(error)
  $('#message').text('Error Saving Note')
}

const getNoteSuccess = (data) => {
  const onShowNotes = showNotes({ notes: data.notes })
  $('.display-notes').append(onShowNotes)
  $('#message').text('Notes retrieved succesfully!')
}

const deleteNoteSuccess = function (data) {
  $('#message').text('Note deleted successfully!')
}

const deleteNoteFailure = function (data) {
  $('#message').text('Unable to delete note')
}

const updateNoteSuccess = function (data) {
  console.log(data)
  $('#message').text('Note succesfully updated!')
}

const updateNoteFailure = function (data) {
  $('#message').text('Unable to update note')
}

module.exports = {
  saveNoteSuccess,
  saveNoteFailure,
  getNoteSuccess,
  showNotes,
  deleteNoteSuccess,
  deleteNoteFailure,
  updateNoteSuccess,
  updateNoteFailure
}
