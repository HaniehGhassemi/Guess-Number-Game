import axios from "axios";
export function getUserInfo() {
  if (localStorage.getItem("token")) {
    const reqInstance = axios.create({
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const result = reqInstance.get(
      `${process.env.VUE_APP_BASE_API_URL}/users/get-user-info`
    );
    return result;
  }
  return {
    data: "",
  };
}
