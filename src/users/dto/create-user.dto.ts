import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
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
  @ApiProperty()
  @IsNotEmpty()
  @Length(3, 255)
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(3, 255)
  lastName: string;

  @ApiProperty()
  @Transform(({ value }) => parseInt(value))
  @IsInt()
  @Min(16)
  @Max(120)
  age: number;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsUrl()
  linkedinProfile: string;
}
