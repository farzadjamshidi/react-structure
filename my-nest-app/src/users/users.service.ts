import { Injectable } from '@nestjs/common';
import { User } from '../app/models/user.model';
@Injectable()
export class UsersService
{
    private readonly users: User[] = [
        {
            id: 1,
            name: 'John Black',
            email: 'john@john.com',
            password: 'changeme',
        },
        {
            id: 2,
            name: 'Maria Hills',
            email: 'maria',
            password: 'guess',
        },
    ];

    async findOne(email: string): Promise<User | undefined>
    {
        return this.users.find(user => user.email === email);
    }
}