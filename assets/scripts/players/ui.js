
const store = require('../store')

const successMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('#message').css('color', 'green')
  $('form').trigger('reset')
}
const failureMessage = function (newText) {
  $('#message').text(newText)
  $('form').trigger('reset')
  $('#message').addClass('failure')
  $('#message').removeClass('success')
  $('#message').css('color', 'red')
}

const onAddPlayerSuccess = function (data) {
  store.player = data.player
  successMessage('Added player successfully!')
  $('form').trigger('reset')
  // setTimeout(function () {
  //   $('#player-message').fadeOut().empty()
  // }, 2000)
}

const onAddPlayerFailure = function (data) {
  store.player = data.player
  failureMessage('Added player failed')
}

const onShowAllPLayersSuccess = function (data) {
  $('#player-display').html('')
  data.players.forEach(player => {
    const playerHTML = (`
    <h4>Name: ${player.player_name}</h4>
    <p>ID: ${player.id}</p>
    <p>Sport: ${player.player_sport}</p>
    <p>College: ${player.player_college}</p>
    <p>Position: ${player.player_position}</p>
    <br>
  `)
    $('#player-display').append(playerHTML)
  })
}

const onShowAllPlayersFailure = function (data) {
  $('#players-history').html('Could not retrieve all players. Please try again.')
}

const onHidePlayersSuccess = function (data) {
  $('#player-display').html('')
}

const onDeletePlayerSuccess = function () {
  store.player = null
  successMessage('Deleted player successfully!')
  $('#delete-player').trigger('reset')
}

const onDeletePlayerFailure = function () {
  store.player = null
  failureMessage('Deleted player failed, Please enter ID')
}

const onUpdatePlayerSuccess = function (data) {
<<<<<<< HEAD
  $('#message').html('Your player has been edited!')
=======
  successMessage('Your player has been edited!')
  $('form').trigger('reset')
>>>>>>> master
  // setTimeout(function () {
  // $('#player-message').fadeOut().empty()
  //  }, 2000)
  store.player = data.player
}

const onUpdatePlayerFailure = function (data) {
  failureMessage('Player update failed! Please try again.')
  store.player = data.player
}

module.exports = {
  onAddPlayerSuccess,
  onAddPlayerFailure,
  onDeletePlayerSuccess,
  onUpdatePlayerSuccess,
  onUpdatePlayerFailure,
  onShowAllPLayersSuccess,
  onShowAllPlayersFailure,
  onHidePlayersSuccess,
  onDeletePlayerFailure
}
