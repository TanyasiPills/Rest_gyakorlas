import { PartialType } from '@nestjs/mapped-types';
import { CreateBookDto } from './create-book.dto';
import { IsNotEmpty, IsString, IsBoolean, IsNumber } from "class-validator";

export class UpdateBookDto extends PartialType(CreateBookDto) {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    author: string;

    @IsNotEmpty()
    @IsString()
    isbn: string;

    @IsNotEmpty()
    @IsNumber()
    publishYear: number;

    @IsNotEmpty()
    @IsBoolean()
    reserved: boolean;
}
