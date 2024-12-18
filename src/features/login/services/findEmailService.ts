import axios from "axios";

export const fetchFindEmailData = async (phone: string) => {
  console.log("Fetching FindEmail Data...");
  console.log(phone);

  return "xodud5080@naver.com";
  // return "no";

  try {
    const response = await axios.post('https://your-api-endpoint.com/find_email', {
        phone: phone,
    });

    console.log(response.data); // API 응답 처리
  } catch (error) {
    console.error("Error fetching find email data with Axios:", error);
  }

};