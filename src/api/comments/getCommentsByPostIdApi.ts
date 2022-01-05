import axios from "axios";
import { CommentModel } from "./types";
import { API_URL } from "config";

export const getCommentsByPostId = async (postId: number): Promise<CommentModel[]> => {
  const data = await axios
    .get<CommentModel[]>(`${API_URL}/posts/${postId}/comments`)
    .then((response) => response.data);
  return data;
};
