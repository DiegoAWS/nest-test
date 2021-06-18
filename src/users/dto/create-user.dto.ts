import {
  IsEmail,
  IsEmpty,
  IsInt,
  IsUrl,
  Length,
  Max,
  Min,
} from 'class-validator';

export class CreateUserDto {
  @IsEmpty()
  @Length(3, 255)
  name: string;

  @IsEmpty()
  @Length(3, 255)
  lastName: string;

  @IsInt()
  @Min(0)
  @Max(10)
  age: number;

  @IsEmail()
  email: string;

  @IsUrl()
  linkedlnProfile: string;
}
