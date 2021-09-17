// parent class
class Categories {
    constructor(songData) {
      this.categoryName = songData.categoryName; // New Song
      this.categoryDetails = songData.categoryDetails; // 2020
    }
  }
  
  // child class
  class Song extends Categories {
    constructor(songData) {
      
      super(songData);
      this.artist = songData.artist; // Artist
    }
  }
  
  const mySong = new Song({
    artist: "Wahid",
    categoryName: "New Song",
    categoryDetails: 2020,
  });
  
  console.log(mySong.categoryName);