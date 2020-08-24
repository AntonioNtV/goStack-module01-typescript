import { Request, Response } from 'express'
import createUser from './services/CreateUser'

export function helloWorld(resquest: Request, response: Response) {
    const user = createUser({
        name: 'Antonio Neto',
        email: 'antonio@mail.com',
        password: '132456789',
        techs: [
            'TypeScript', 
            'ReacJS', 
            'Java', 
            'React Native',
            {
                title: 'Javascript',
                experience: 80
            }
        ]
    })
    return response.json({ message: 'Hello World' })
}