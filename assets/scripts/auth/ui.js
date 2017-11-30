'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  console.log(data)
  $('#message').text('Signed up succesfully')
}

const signInSuccess = function (data) {
  console.log('data is ', data)
  store.user = data.user
  console.log('store is ', store)
  $('#message').text('Signed in succesfully')
}

const signUpFailure = function (error) {
  console.error(error)
  $('#message').text('Error on sign up')
}

const signInFailure = function (error) {
  console.log(error)
  $('#message').text('Error on sign in')
}

const changePasswordSuccess = function (data) {
  console.log(data)
  $('#message').text('Changed password succesfully')
}

const changePasswordFailure = function (error) {
  console.log(error)
  $('#message').text('Error on change password')
}

const signOutSuccesss = function (data) {
  console.log(data)
  $('#message').text('Signed Out Successfully')
}

const signOutFailure = function (error) {
  console.log(error)
  $('#message').text('Error on Sign Out')
}

const saveNoteSuccess = function (data) {
  console.log(data)
  $('#message').text('Saved Note Successfully')
}

const saveNoteFailure = function (error) {
  console.log(error)
  $('#message').text('Error Saving Note')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccesss,
  signOutFailure,
  signInSuccess,
  saveNoteSuccess,
  saveNoteFailure
}
