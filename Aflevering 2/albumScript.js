//Konstruktørfunktion, der opretter et album-objekt med fire egenskaber

function Album(artist, album, totalTracks, productionYear) {
  this.artist = artist;
  this.album = album;
  this.totalTracks = totalTracks;
  this.productionYear = productionYear;
}

//Tilføjer en div til en HTML-container med id=parentid
//Denne div indeholder albumdetaljer (kunstner, titel, antal sange og udgivelsesår)

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

//Henter data fra JSON filen
fetchContent("Data/albums.json").then((albums) => {

//Laver et tomt array  
  let albumObjects = [];

//Laver et for-loop og løber datae for JSON igennem  
  for (let i = 0; i < albums.length; i++) {
    const album = new Album(
      albums[i].artistName,
      albums[i].albumName,
      albums[i].trackList.length,
      albums[i].productionYear
    );

//Arrayet indeholder en push-metode, som tilføjer argumentet   
    albumObjects.push(album);
  }

//Kalder funktionen for at tilføje en div til html-siden
//Laver et for-each loop  
//Kalder på addDivWithAlbum
  albumObjects.forEach(
    function (a) {
    addDivWithAlbum(a, "content");
  });
});



//A magic spell - memorise it and use it EXACTLY like this :)
async function fetchContent(url) {
  let request = await fetch(url);
  let json = await request.json();
  return json;
}
