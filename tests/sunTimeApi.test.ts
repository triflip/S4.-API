
import { getSunTime } from "../src/api/sunTimeApi";

describe("getSunTime", () => {
    test("returns sunrise and sunset fields for know coordinates", async () => {
        const result = await getSunTime("41.3851", "2.1734");
        expect(result).toHaveProperty("sunrise");
        expect(result).toHaveProperty("sunset");
    })
})