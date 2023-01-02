import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateMailDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly to: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly from: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly subject: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly body: string;
}
