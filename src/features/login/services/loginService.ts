import axios from "axios";

export const fetchLoginData = async (email: string, password: string) => {
  console.log("Fetching Login Data...");
  // console.log(email);
  // console.log(password);

  
  try {
    const response = await axios.post('https://3.36.55.233/login', {
      email: email,
      password: password,
    });
    
    console.log(response.data); // API 응답 처리
    return response.data;
  } catch (error) {
    return "no";
    console.error("Error fetching login data with Axios:", error);
  }

};