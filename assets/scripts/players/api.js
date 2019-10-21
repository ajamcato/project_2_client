const config = require('../config.js')
const store = require('../store.js')

const addPlayer = function (formData) {
  console.log('api data', formData)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/players',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const allPlayers = function (formData) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/players/',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deletePlayer = function (formData) {
  console.log(store.user)
  console.log('api delete', formData.player.id)
  return $.ajax({
    url: config.apiUrl + '/players/' + formData.player.id,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'DELETE'
  })
}

const updatePlayer = (formData) => {
  console.log('api update', formData.player.id)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/players/' + formData.player.id,
    // contentType: 'application/json',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },

    data: formData
  })
}

//     data: {
//       'player': {
//         'name': formData.name,
//         'sport': formData.sport,
//         'college': formData.college,
//         'position': formData.position
//       }
//     }
//   })
// }

module.exports = {
  addPlayer,
  deletePlayer,
  updatePlayer,
  allPlayers
}
