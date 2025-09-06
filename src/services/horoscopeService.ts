const BASE_URL =
  "https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily";

export const getHoroscope = async (sign: string, day: string) => {
  try {
    const response = await fetch(`${BASE_URL}?sign=${sign}&day=${day}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
