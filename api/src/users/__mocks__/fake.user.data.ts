import { User } from "../models/user.model"
import { Types } from "mongoose";

export const fakeId = "632130d41623c49bf7b1c7e9";
export const fakeUserData: User[] = [
    {
        typeUser: 'beneficiario',
        userName: 'Nome do Beneficiário',
        userCpf: '123.456.789-00',
        userMail: 'email@exemplo.com',
        userAddress: 'Rua Exemplo',
        userAddressNumber: 123,
        userAddressNeighborhood: 'Bairro Exemplo',
        userAddressCity: 'Cidade Exemplo',
        userAddressState: 'UF',
        userPassword: 'senha123',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        typeUser: 'beneficiario',
        userName: 'Joana Silva',
        userCpf: '987.654.321-00',
        userMail: 'joana.silva@email.com',
        userAddress: 'Avenida Principal',
        userAddressNumber: 456,
        userAddressNeighborhood: 'Centro',
        userAddressCity: 'Cidade A',
        userAddressState: 'UF',
        userPassword: 'senha456',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        typeUser: 'representante',
        userName: 'Carlos Oliveira',
        userCpf: '111.222.333-44',
        userMail: 'carlos@email.com',
        userAddress: 'Rua da Paz',
        userAddressNumber: 789,
        userAddressNeighborhood: 'Tranquilo',
        userAddressCity: 'Cidade B',
        userAddressState: 'UF',
        userPassword: 'senha789',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        typeUser: 'beneficiario',
        userName: 'Fernanda Santos',
        userCpf: '555.666.777-88',
        userMail: 'fernanda@email.com',
        userAddress: 'Travessa das Flores',
        userAddressNumber: 101,
        userAddressNeighborhood: 'Jardim',
        userAddressCity: 'Cidade C',
        userAddressState: 'UF',
        userPassword: 'senha101',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        typeUser: 'representante',
        userName: 'Ricardo Oliveira',
        userCpf: '999.888.777-66',
        userMail: 'ricardo@email.com',
        userAddress: 'Alameda dos Sonhos',
        userAddressNumber: 222,
        userAddressNeighborhood: 'Sonhador',
        userAddressCity: 'Cidade D',
        userAddressState: 'UF',
        userPassword: 'senha222',
        createdAt: new Date(),
        updatedAt: new Date()
    }
]
export const updatedUser: User = {
    typeUser: 'beneficiario',
    userName: 'Camila Rocha',
    userCpf: '333.444.555-66',
    userMail: 'camila@email.com',
    userAddress: 'Rua das Estrelas',
    userAddressNumber: 789,
    userAddressNeighborhood: 'Estelar',
    userAddressCity: 'Cidade E',
    userAddressState: 'UF',
    userPassword: 'senha789',
    createdAt: new Date(),
    updatedAt: new Date()
}