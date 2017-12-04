'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').text('Signed up succesfully')
  $('sign-up').trigger('reset')
}

const signInSuccess = function (data) {
  store.user = data.user
  $('#message').text('Signed in succesfully')
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#change-password').show()
  $('#sign-out').show()
  $('#save-note').show()
  $('#get-note').show()
  $('#delete-note').show()
  $('#update-note').show()
}

const signUpFailure = function (error) {
  $('#message').text('Error on sign up', error)
}

const signInFailure = function (error) {
  $('#message').text('Error on sign in', error)
}

const changePasswordSuccess = function (data) {
  $('#message').text('Changed password succesfully')
}

const changePasswordFailure = function (error) {
  $('#message').text('Error on change password', error)
}

const signOutSuccesss = function (data) {
  console.log(data)
  $('#message').text('Signed Out Successfully')
  $('#sign-up').show()
  $('#sign-in').show()
}

const signOutFailure = function (error) {
  $('#message').text('Error on Sign Out', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccesss,
  signOutFailure,
  signInSuccess
}
