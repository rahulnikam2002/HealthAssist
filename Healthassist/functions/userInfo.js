import axios from "axios";
import { hostip } from "../env/const";
import * as SecureStore from "expo-secure-store";


export const getUserInfo = async (setUserInfo) => {
  SecureStore.getItemAsync("authToken")
    .then((token) => {
      axios
        .post(`http://${hostip}:5000/user/info`, { token })
        .then((res) => {
          console.log(res.data);
          setUserInfo(res.data);
        })
        .catch((err) => console.log(err.message));
    })
    .catch((err) => console.log(err.message));
};
