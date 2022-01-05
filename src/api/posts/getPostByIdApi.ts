import axios from "axios";
import { PostModel } from "./types";
import { API_URL } from "config";

export const getPostById = async (postId: number): Promise<PostModel> => {
  const data = await axios
    .get<PostModel>(`${API_URL}/posts/${postId}`)
    .then((response) => response.data);
  return data;
};
