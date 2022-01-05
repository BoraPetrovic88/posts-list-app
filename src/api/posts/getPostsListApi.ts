import axios from "axios";
import { PostModel } from "./types";
import { API_URL } from "config";

export const getPostsList = async (): Promise<PostModel[]> => {
  const data = await axios.get<PostModel[]>(`${API_URL}/posts`).then((response) => response.data);
  return data;
};
