import {
  IsEmail,
  IsNotEmpty,
  IsInt,
  IsUrl,
  Length,
  Max,
  Min,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @Length(3, 255)
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  @Length(3, 255)
  lastName: string;

  @IsInt()
  @Min(16)
  @Max(120)
  age: number;

  @IsEmail()
  email: string;

  @IsUrl()
  linkedinProfile: string;
}
