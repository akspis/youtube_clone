export const buttonData = [
  "All",
  "Game Show",
  "Music",
  "Javascript",
  "Stocks",
  "Movies",
  "Podcast",
  "Computers",
  "News",
];

// it should come from env
export const API_KEY = "AIzaSyD9iuDc31CLYkPZOoaUHMtfR3QW8k7Mi";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=" +
  API_KEY;

export const YOUTUBE_SUGG_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
