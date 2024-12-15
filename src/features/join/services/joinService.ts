import axios from "axios";

export const fetchJoinData = async (email: string, password: string, size: string, code:string) => {
  console.log("Fetching Join Data...");
  console.log(email);
  console.log(password);
  console.log(size);
  console.log(code);

  try {
    const response = await axios.post('https://your-api-endpoint.com/join', {
      email: email,
      password: password,
      size: size,
      code: code
    });

    console.log(response.data); // API 응답 처리
  } catch (error) {
    console.error("Error fetching join data with Axios:", error);
  }

};