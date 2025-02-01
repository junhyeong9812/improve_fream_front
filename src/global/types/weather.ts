// 날씨 DTO
export interface WeatherDataDto {
  timestamp: string; // ISO 문자열 예: "2025-02-01T10:00:00"
  temperature: number; // 온도
  precipitationProbability: number; // 강수확률
  precipitation: number; // 강수량
  rain: number; // 비
  snowfall: number; // 눈
}
