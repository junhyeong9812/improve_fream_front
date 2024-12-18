import axios from "axios";

export const fetchFindPasswordData = async (phone: string, email: string) => {
  console.log("Fetching FindPassword Data...");
  console.log(phone);
  console.log(email)

  return "ok";
  // return "no";

  try {
    const response = await axios.post('https://your-api-endpoint.com/find_password', {
        phone: phone,
    });

    console.log(response.data); // API 응답 처리
  } catch (error) {
    console.error("Error fetching find password data with Axios:", error);
  }

};