var playlist = { slowdive: "Alison", 'My Bloody Valentine': 'Sometimes' };

function updatePlaylist(playlist, artistName, songTitle) {
   return Object.assign({}, { [artistName]: songTitle })
}

updatePlaylist(playlist, {['Phil Ochs']: "Here's to the State of Mississippi"})

function removeFromPlaylist(playlist, artistName) {
  return delete playlist.artistName
}
removeFromPlaylist(playlist, 'Slowdive')