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

export const API_KEY = process.env.REACT_APP_API_KEY;

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=" +
  API_KEY;

export const YOUTUBE_SUGG_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
