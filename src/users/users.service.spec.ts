import { Test, TestingModule } from '@nestjs/testing';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  const mockUserDto: CreateUserDto = {
    name: 'John',
    lastName: 'Doe',
    age: 25,
    email: 'john.doe@gmail.com',
    linkedinProfile: 'https://cl.linkedin.com/company/john-doe',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  describe('overall testing', () => {
    it('should be defined', () => {
      expect(service).toBeDefined();
    });

    it('users array should be declared and empty', () => {
      expect(service.usersStore).toEqual([]);
    });
  });

  describe('testing create method', () => {
    let createUser;

    beforeEach(async () => {
      createUser = service.create(mockUserDto);
    });

    it('change the usersStore array', () => {
      const { id, created_at } = createUser;
      expect(service.usersStore).toEqual([{ id, created_at, ...mockUserDto }]);
    });

    it('testing the return value', () => {
      const { id, created_at, ...testUser } = createUser;
      expect(typeof id).toBe('string');
      expect(id.length).toBe(36);
      expect(typeof created_at).toBe('string');
      expect(testUser).toEqual(mockUserDto);
    });
  });

  describe('testing findAll method', () => {
    it('testing method', () => {
      expect(service.findAll()).toEqual([]);
    });
  });

  describe('testing remove method', () => {
    it('testing find and remove', () => {
      service.usersStore = [
        {
          ...mockUserDto,
          id: 'test_id',
          created_at: 'test',
        },
      ];
      expect(service.remove('test_id')).toBeUndefined();
      expect(service.usersStore).toEqual([]);
    });

    it('testing not finding and throwing an exception', () => {
      try {
        service.remove('test_id');
        // Fail test if above expression doesn't throw anything.
        expect(true).toBe(false);
      } catch (e) {
        expect(e.message).toBe('Element not Found');
      }
    });
  });
});
