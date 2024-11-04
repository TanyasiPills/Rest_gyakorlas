import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';

const data : Book[] = [];


@Injectable()
export class BooksService {
  create(createDTO: CreateBookDto) {
    let idstuff = 0;
    if(data.length > 0){
      idstuff = data[data.length-1].id+1;
    }
    data.push(new Book(idstuff, createDTO.title,createDTO.author, createDTO.isbn, createDTO.publishYear, false));
  }

  findAll() {
    return data;
  }

  findOne(id: number) {
    return data[data.findIndex(e => e.id == id)];
  }

  update(id: number, updateDto: UpdateBookDto) {
    let index = data.findIndex(e => e.id == id);
    data[index] = new Book(index, updateDto.title, updateDto.author, updateDto.isbn, updateDto.publishYear, updateDto.reserved);
    return data;
  }

  remove(id: number) {
    data.splice(data.findIndex(e => e.id == id), 1);
  }
}
