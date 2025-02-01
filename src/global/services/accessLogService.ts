import { UserAccessLogDto } from "../types/accessLog";
import api from "./axios"; // axios 인스턴스

/**
 * 접근 로그 전송 함수
 * @param logData UserAccessLogDto 형태의 로그 데이터
 */
export async function sendAccessLog(logData: UserAccessLogDto): Promise<void> {
  try {
    // 백엔드 URI: /access-log/commands/create
    await api.post("/access-log/commands/create", logData);
  } catch (err) {
    console.error("Failed to send access log:", err);
  }
}
