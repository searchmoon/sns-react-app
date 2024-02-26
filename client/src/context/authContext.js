import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const AuthContext = createContext();
/**
 * 사용자 인증 정보를 저장하고 공유하기 위한 Context 객체
 */
export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

  const login = async (inputs) => {
    const res = await axios.post("http://localhost:8800/api/auth/login", inputs, {
      withCredentials: true, //쿠키로 작업할때는 이것 넣어줘야함
    });

    setCurrentUser(res.data);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return <AuthContext.Provider value={{ currentUser, login }}>{children}</AuthContext.Provider>;
};
