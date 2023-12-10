import { userFactory } from "./user.factory"

describe("UserFactory", () => {
    it("Deve criar o Dominio do Usuario", () => {
        expect(userFactory()).toBeDefined();
    })
})