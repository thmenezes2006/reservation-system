import { faker } from "@faker-js/faker";
import { mongo } from "mongoose";
// import { BookModel } from "../books/models/book.model";
// import { ReviewModel } from "../reviews/models/review.model";
import { mongoConnect, mongoDisconnect } from "./mongo.connection";

const mockSeederUser = (id: any) => {
    return {
        userName: faker.name.fullName(),
        userCpf: faker.random.numeric(11),
        userMail: faker.internet.email(),
        userAddress: faker.address.street(),
        userAddressNumber: faker.datatype.number({ min: 1, max: 4 }),
        userAddressNeighborhood: faker.address.cityName(),
        userAddressCity: faker.address.city(),
        userAddressState: faker.address.stateAbbr(),
        userPassword: faker.lorem.words(1),
    }
};
const mockSeederReview = {
    tituloResenha: faker.lorem.words(2),
    resenha: [
        faker.lorem.words(3),
        faker.lorem.words(3),
    ],
    dataEdicao: new Date,
    notaObra: 3,
};

export async function sedder() {
    try {
        await ReviewModel.create(mockSeederReview)
        console.log('Resenha criada')
    }
    catch (error) {
        console.log('Falha ao criar Resenha')
        console.log(error)
    }

    const reviews = await ReviewModel.find()
    const reviewIdObject = reviews[reviews.length - 1]
    try {
        const book = mockSeederBook(reviewIdObject._id)
        await BookModel.create(book)
        console.log('Livro criado')
    }
    catch (error) {
        console.log('Falha ao criar Livro')
        console.log(error)
    }
}

(async () => {
    mongoConnect()
    await sedder()
    mongoDisconnect()
})()  