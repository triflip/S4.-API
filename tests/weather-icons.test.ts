
import { getWeatherIcon } from "../src/utils/weather-icons";

describe("getWeatherIcon", () => {
    test("returns sun icon for code 0 at day", () => {
        const icon = getWeatherIcon(0, false);
        expect(icon).toContain("0.gif")
    });

    test("returns moon icon for code 0", () => {
        const icon = getWeatherIcon(0, true);
        expect(icon).toContain("moon.gif");
    });

    test("returns fallback icon for unknow code", () => {
        const icon = getWeatherIcon(999, false);
        expect(icon).toContain(3)
    });

    test("handless multiplle code consistently", () => {
        const codes = [2, 3, 45, 61];
        codes.forEach((code) => {
            const dayIcon = getWeatherIcon(code, false);
            const nightIcon = getWeatherIcon(code , true);
            expect(typeof dayIcon).toBe("string");
            expect(typeof nightIcon).toBe("string");
        });
    });
});