import axios from "axios";
import { NotionPages, User } from "../decl";

export const getNotionPages = async (): Promise<NotionPages> => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/notionpages`
    );
    return res.data;
  } catch (error) {
    console.error("error", error);
    return [];
  }
};

export const postLogin = async (user: User): Promise<User> => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/login`,
      user
    );
    return res.data;
  } catch (error) {
    throw new Error("An error occurred saving the user.");
  }
};
