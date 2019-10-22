
const store = require('../store')

const successMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('form').trigger('reset')
}
const failureMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const onAddPlayerSuccess = function (data) {
  console.log(data)
  store.player = data.player
  successMessage('Added player successfully!')
  $('form').trigger('reset')
  // setTimeout(function () {
  //   $('#player-message').fadeOut().empty()
  // }, 2000)
}
const onAddPlayerFailure = function (data) {
  store.player = data.player
  // console.log(store)
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
  ('#players-history').html('Could not retrieve all players. Please try again.')
}

const onDeletePlayerSuccess = function () {
  store.player = null
  successMessage('Deleted player successfully!')
  $('#delete-player').trigger('reset')
}

const onUpdatePlayerSuccess = function (data) {
  console.log('success data is ', data)
  $('#message').html('Your player has been edited!')
  // setTimeout(function () {
  //  $('#player-message').fadeOut().empty()
  // }, 2000)
  store.player = data.player
}

const onUpdatePlayerFailure = function (data) {
  $('#message').html('Player update failed! Please try again.')
  store.player = data.player
}

module.exports = {
  onAddPlayerSuccess,
  onAddPlayerFailure,
  onDeletePlayerSuccess,
  onUpdatePlayerSuccess,
  onUpdatePlayerFailure,
  onShowAllPLayersSuccess,
  onShowAllPlayersFailure
}
