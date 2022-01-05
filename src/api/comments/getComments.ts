import axios from "axios";
import { CommentModel } from "./types";
import { API_URL } from "config";

export const getComments = async (): Promise<CommentModel[]> => {
  const data = await axios
    .get<CommentModel[]>(`${API_URL}/comments`)
    .then((response) => response.data);
  return data;
};
