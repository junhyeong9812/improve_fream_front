import axios from "axios";

export const fetchLoginData = async (email: string, password: string) => {
  console.log("Fetching Login Data...");
  console.log(email);
  console.log(password);

  try {
    const response = await axios.post('https://your-api-endpoint.com/login', {
      email: email,
      password: password,
    });

    console.log(response.data); // API 응답 처리
  } catch (error) {
    console.error("Error fetching login data with Axios:", error);
  }

};
