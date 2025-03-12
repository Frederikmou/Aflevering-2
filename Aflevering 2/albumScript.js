function Album(artist, album, totalTracks, productionYear) {
  this.artist = artist;
  this.album = album;
  this.totalTracks = totalTracks;
  this.productionYear = productionYear;
}


function addDivWithAlbum(album, parentid) {
  let parentElement = document.getElementById(parentid);

  let elementToAdd =
    "<div>" +
    album.artist +
    ": " +
    album.album +
    " | Album contains " +
    album.totalTracks +
    " tracks" +
    " | Released in " +
    album.productionYear
    + 
    "</div>";
  parentElement.innerHTML = parentElement.innerHTML + elementToAdd;
}

fetchContent("Data/albums.json").then((albums) => {

  let albumObjects = [];

  for (let i = 0; i < albums.length; i++) {
    const album = new Album(
      albums[i].artistName,
      albums[i].albumName,
      albums[i].trackList.length,
      albums[i].productionYear
    );
    albumObjects.push(album);
  }

  albumObjects.forEach(function (a) {
    addDivWithAlbum(a, "content");
  });
});



//A magic spell - memorise it and use it EXACTLY like this :)
async function fetchContent(url) {
  let request = await fetch(url);
  let json = await request.json();
  return json;
}
