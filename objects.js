var playlist = { beatles: "hello" };

function updatePlaylist(playlist, artistName, songTitle) {
   return Object.assign({}, { [artistName]: songTitle })
}
updatePlaylist(playlist, {['Slowdive']: 'Alison'})
updatePlaylist(playlist, {['My Bloody Valentine']: 'dunno'})
updatePlaylist(playlist, {['Phil Ochs']: 'dunno'})

function removeFromPlaylist(playlist, artistName) {
  return delete playlist.artistName
}
removeFromPlaylist(playlist, 'beatles')