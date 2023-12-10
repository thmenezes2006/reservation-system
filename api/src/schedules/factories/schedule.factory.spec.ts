import { scheduleFactory } from "./schedule.factory"

describe("UserFactory", () => {
    it("Deve criar o Dominio do Usuario", () => {
        expect(scheduleFactory()).toBeDefined();
    })
})