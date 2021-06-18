import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
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
      create_at: now,
      modified_at: now,
    });

    this.usersStore = [...this.usersStore, newUser];

    return newUser;
  }

  findAll() {
    return this.usersStore;
  }

  findOne(id: string): User | undefined {
    return this.usersStore.find((item) => item.id === id);
  }

  update(id: string, updateUserDto: UpdateUserDto): User | undefined {
    let updated;
    this.usersStore = this.usersStore.map((item) => {
      if (item.id === id) {
        const now = Date.now().toString();

        updated = { ...item, ...updateUserDto, modified_at: now };

        return updated;
      }

      return item;
    });

    return updated;
  }

  remove(id: string): void {
    this.usersStore = this.usersStore.filter((item) => item.id !== id);
  }
}
