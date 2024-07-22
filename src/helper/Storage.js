import axios from "axios";
import { useNavigate } from "react-router-dom";

export const setAuthUser = (data, expiresInMinutes=60) => {
  const expirationTime = new Date().getTime() + expiresInMinutes * 60 * 1000;
  sessionStorage.setItem("user", JSON.stringify({ data, expirationTime }));
};



// export const getAuthUser = () => {
 
//   if (sessionStorage.getItem("user")) {
//     return JSON.parse(sessionStorage.getItem("user"));
//   }




export const removeAuthUser = () => {


  if (sessionStorage.getItem("user")) {
    sessionStorage.removeItem("user");
    window.location.href = "/login"; 
  }

};

export const getAuthUser = () => {
  

  const userData = JSON.parse(sessionStorage.getItem("user"));
  if (userData && new Date().getTime() < userData.expirationTime) {
    return userData.data;
  }
  // sessionStorage.removeItem("user");
  removeAuthUser()
   return null;
};
// axios.interceptors.response.use(
//   (response) => {
//     const newToken = response.headers.authorization;
//     console.log('=======new token=============================');
//     console.log(newToken);
//     console.log('====================================');
//     if (newToken && newToken.startsWith("Bearer")) {
//       const token = newToken.split("Bearer ")[1];
//       // Update the session storage with the new token
//       setAuthUser({ token });
//       console.log('TOKEN====================================');
//       console.log(token);
//       console.log('====================================');
      
//     }
//     return response;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );