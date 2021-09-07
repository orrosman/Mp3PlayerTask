const player = {
  songs: [
    {
      id: 1,
      title: 'Vortex',
      album: 'Wallflowers',
      artist: 'Jinjer',
      duration: 242,
    },
    {
      id: 2,
      title: 'Vinda',
      album: 'Godtfolk',
      artist: 'Songleikr',
      duration: 160,
    },
    {
      id: 7,
      title: 'Shiroyama',
      album: 'The Last Stand',
      artist: 'Sabaton',
      duration: 213,
    },
    {
      id: 3,
      title: 'Thunderstruck',
      album: 'The Razors Edge',
      artist: 'AC/DC',
      duration: 292,
    },
    {
      id: 4,
      title: 'All is One',
      album: 'All is One',
      artist: 'Orphaned Land',
      duration: 270,
    },
    {
      id: 5,
      title: 'As a Stone',
      album: 'Show Us What You Got',
      artist: 'Full Trunk',
      duration: 259,
    },
  ],
  playlists: [
    { id: 1, name: 'Metal', songs: [1, 7, 4] },
    { id: 5, name: 'Israeli', songs: [4, 5] },
  ],
  playSong(song) {
    console.log(`Playing ${song.title} from ${song.album} by ${(song.artist)} | ${convertDuration(song.duration)}.`)
  },
}

function convertDuration(duration) {
  let min = Math.floor(duration / 60);
  let sec = duration % 60;

  if(min < 10){
    min = "0" + String(min);
  }
  if (sec < 10) {
    sec = "0" + String(sec);
  }

  return min+':'+sec
}

function convertToSeconds(duration){
  let arr = duration.split(":")
  let min = parseInt(arr[0]) * 60
  let sec = parseInt(arr[1])
  
  return min+sec
}

function getSongById(id){
  for (let i = 0; i < player.songs.length; i++) {
    if(player.songs[i].id == id)
      return player.songs[i]
  }
  
  throw new Error("No such ID");
}

function getPlaylistById(id) {
  for (let i = 0; i < player.playlists.length; i++) {
    if (player.playlists[i].id == id)
      return player.playlists[i]
  }

  throw new Error("No such ID");
}

function songIdExist(id) {
  for (let i = 0; i < player.songs.length; i++) {
    if (player.songs[i].id == id)
      return true
  }
  return false
}
function playlistIdExist(id) {
  for (let i = 0; i < player.playlists.length; i++) {
    if (player.playlists[i].id == id)
      return true
  }
  return false
}

function playSong(id) {
  let song = getSongById(id);

  return player.playSong(song);
}

function removeSong(id) {
  //remove sng from songs list
  let songIndex = player.songs.indexOf(getSongById(id))
  player.songs.splice(songIndex,1);

  //remove song from all playlists
  for(let i=0; i<player.playlists.length; i++){             //iterate playlists
    for(let j=0; j<player.playlists[i].songs.length; j++){  //iterate songs id in playlist
      if(player.playlists[i].songs[j] == id){
        player.playlists[i].songs.splice(j,1);
      }
    }
  }
}

function addSong(title, album, artist, duration, id = Math.floor(Math.random() * 1000) + 1) {
  if(!songIdExist(id)){
    player.songs.push({id: id,
                    title: title,
                    album: album,
                    artist: artist,
                    duration: convertToSeconds(duration)})
      return id
      }
  else{
    throw new Error("This ID already exists")
  }
}

function removePlaylist(id) {
  let playlistIndex = player.playlists.indexOf(getPlaylistById(id))
  player.playlists.splice(playlistIndex, 1);
}

function createPlaylist(name, id = Math.floor(Math.random() * 1000) + 1) {
  if (!playlistIdExist(id)){
    player.playlists.push({id: id,
                           name: name,
                           songs:[]});
    return id;
  }
  else{
    throw new Error("This ID already exists")
  }
}

function playPlaylist(id) {
  // your code here
}

function editPlaylist(playlistId, songId) {
  // your code here
}

function playlistDuration(id) {
  // your code here
}

function searchByQuery(query) {
  // your code here
}

function searchByDuration(duration) {
  // your code here
}


module.exports = {
  player,
  playSong,
  removeSong,
  addSong,
  removePlaylist,
  createPlaylist,
  playPlaylist,
  editPlaylist,
  playlistDuration,
  searchByQuery,
  searchByDuration,
}
