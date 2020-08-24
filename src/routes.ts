import { Request, Response } from 'express'
import createUser from './services/CreateUser'

export function helloWorld(resquest: Request, response: Response) {
    const user = createUser({
        name: 'Antonio Neto',
        email: 'antonio@mail.com',
        password: '132456789'
    })
    return response.json({ message: 'Hello World' })
}