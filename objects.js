var playlist = { beatles: "hello" };

function updatePlaylist(playlist, artistName, songTitle) {
   return Object.assign({}, { [artistName]: songTitle })
}
updatePlaylist(playlist, {['Slowdive']: 'sugar'})
updatePlaylist(playlist, {['My Bloody Valentine']: 'dunno'})
updatePlaylist(playlist, {['Phil Ochs']: 'dunno'})
