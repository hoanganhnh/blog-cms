import { User } from "@/types/user.type";

const checkLogin = (currentUser: User) =>
  !!currentUser &&
  currentUser?.constructor === Object &&
  Object.keys(currentUser).length !== 0;

export default checkLogin;
