import { Test, TestingModule } from '@nestjs/testing';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let userController: UsersController;

  let usersService: UsersService;

  const mockUserDto: CreateUserDto = {
    name: 'John',
    lastName: 'Doe',
    age: 25,
    email: 'john.doe@gmail.com',
    linkedinProfile: 'https://cl.linkedin.com/company/john-doe',
  };
  const mockUser: User = {
    id: 'test_id',
    created_at: Date.now().toString(),
    ...mockUserDto,
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    userController = module.get<UsersController>(UsersController);
    usersService = module.get<UsersService>(UsersService);
  });
  describe('testing defined', () => {
    it('should be defined', () => {
      expect(userController).toBeDefined();
    });
  });

  describe('testing create method', () => {
    it('testing DI ', async () => {
      const service = jest.spyOn(usersService, 'create');
      service.mockImplementation(() => mockUser);

      expect(await userController.create(mockUserDto)).toBe(mockUser);
      expect(service).toHaveBeenCalledWith(mockUserDto);
    });
  });

  describe('testing getAll', () => {
    it('testing get All', async () => {
      jest.spyOn(usersService, 'findAll').mockImplementation(() => [mockUser]);

      const userCreated = await userController.create(mockUserDto);
      const { id, created_at, ...userToTest } = userCreated;

      expect(id).toBeDefined();
      expect(created_at).toBeDefined();
      expect(userToTest).toStrictEqual(mockUserDto);
    });
  });

  describe('testing Remove', () => {
    it('testing Remove', async () => {
      const service = jest.spyOn(usersService, 'remove');

      service.mockImplementation(() => [{ mockUser }]);

      await userController.remove('test_id');

      expect(await userController.remove('test_id')).toBe(undefined);
      expect(service).toHaveBeenCalledWith('test_id');
    });
  });
});
