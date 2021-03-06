import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty()
  name: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  age: number;

  @ApiProperty()
  email: string;

  @ApiProperty()
  linkedinProfile: string;

  @ApiProperty()
  id: string;

  @ApiProperty()
  created_at: string;
}
