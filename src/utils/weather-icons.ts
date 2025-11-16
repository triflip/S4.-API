import icon0 from "../assets/weather-icons/0.gif";
import icon1 from "../assets/weather-icons/1.gif";
import icon2 from "../assets/weather-icons/2.gif";
import icon3 from "../assets/weather-icons/3.gif";
import icon45 from "../assets/weather-icons/45.gif";
import icon51 from "../assets/weather-icons/51.gif";
import icon61 from "../assets/weather-icons/61.gif";
import icon80 from "../assets/weather-icons/80.gif";
import moon from "../assets/weather-icons/lluna.gif";

export const weatherIcons: Record<number, string> = {
  0: icon0,
  1: icon1,
  2: icon2,
  3: icon3,
  45: icon45,
  51: icon51,
  61: icon61,
  80: icon80
};

export const moonIcon = moon;
export const defaultIcon = icon3;

export function getWeatherIcon(weathercode: number, isNigth: boolean): string {
  if (isNigth) return moonIcon;
  return weatherIcons[weathercode] ?? defaultIcon;
}