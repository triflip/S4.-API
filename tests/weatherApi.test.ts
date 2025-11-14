///<refernece types="vitest" />
import { test, expect, vi} from "vitest";
import { getWeather } from "../src/api/weatherApi";


test("getWeater returns correct dates with lat/lon", async () => {
    global.fetch = vi.fn()
        .mockResolvedValueOnce({
            ok: true,
            json: async () => ({
                current_weather : {
                    temperature: 18,
                    weathercode: 2,
                },
            }),
        })
        .mockResolvedValueOnce({
            ok: true,
            json: async () => ({
                address: {
                    city: "Barcelona",
                },
            }),
        });

        const result = await getWeather(41.38, 2.17);
        expect(result).toEqual({
            temperature: 18,
            weathercode: 2,
            locationName: "Barcelona",
        });
});

test("getWeather throws error if  firts API fails", async () => {
  global.fetch = vi.fn()
    .mockResolvedValueOnce({
      ok: false,
      json: async () => ({}),
    });

  await expect(getWeather(41.38, 2.17)).rejects.toThrow();
});

test("getWeather throws erros if second API fails", async () => {
  global.fetch = vi.fn()
    .mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        current_weather: {
          temperature: 18,
          weathercode: 2,
        },
      }),
    })
    .mockResolvedValueOnce({
      ok: false,
      json: async () => ({}),
    });

  const result = await getWeather(41.38, 2.17);
  expect(result.locationName).toBe("Unknow location 🤷");
});

test("getWeather returs 'Unknow location 🤷'if there is no location ", async () => {
  global.fetch = vi.fn()
    .mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        current_weather: {
          temperature: 18,
          weathercode: 2,
        },
      }),
    })
    .mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        address: {},
      }),
    });

  const result = await getWeather(41.38, 2.17);
  expect(result.locationName).toBe("Unknow location 🤷");
});
