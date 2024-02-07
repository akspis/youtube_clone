import axios from "axios";
import { API_KEY } from "../utils/constants";

export const searchApi = async (searchKey) => {
  const data = await axios.get(
    "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=" +
      searchKey +
      "&type=video&key=" +
      API_KEY
  );
  return data?.data;
};
