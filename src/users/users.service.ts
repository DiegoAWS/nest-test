import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { v4 as uuidv4 } from 'uuid';
import { plainToClass } from 'class-transformer';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  usersStore: User[] = [];

  create(createUserDto: CreateUserDto): User {
    const now = Date.now().toString();

    const newUser: User = plainToClass(User, {
      ...createUserDto,
      id: uuidv4(),
      created_at: now,
    });

    this.usersStore = [...this.usersStore, newUser];

    return newUser;
  }

  findAll() {
    return this.usersStore;
  }

  remove(id: string): void {
    this.usersStore = this.usersStore.filter((item) => item.id !== id);
  }
}
