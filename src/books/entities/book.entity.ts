export class Book {
    id: number;
    title: string;
    author: string;
    isbn: string;
    publishYear: number;
    reserved: boolean;

    constructor(id: number, title: string, author: string, isbn: string, publish: number, reserved: boolean){
        this.id = id;
        this.title = title;
        this.author = title;
        this.isbn = isbn;
        this.publishYear = publish;
        this.reserved = reserved;
    }
}
