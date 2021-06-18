import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { v4 as uuidv4 } from 'uuid';
import { plainToClass } from 'class-transformer';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  usersStore: User[] = [];
  create(createUserDto: CreateUserDto) {
    const newUser: User = plainToClass(User, {
      ...createUserDto,
      id: uuidv4(),
      create_at: Date.now().toString(),
    });

    return (this.usersStore = [...this.usersStore, newUser]);
  }

  findAll() {
    return this.usersStore;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
