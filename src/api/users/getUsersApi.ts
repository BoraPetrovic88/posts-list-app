import axios from "axios";
import { UserModel } from "./type";
import { API_URL } from "config";

export const getUsers = async (): Promise<UserModel[]> => {
  const data = await axios.get<UserModel[]>(`${API_URL}/users`).then((response) => response.data);
  return data;
};
