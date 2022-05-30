import { Note } from 'src/repositories/schema/note.schema';
import { CreateResponseObject, ResponseArray, ResponseObject } from 'src/types/response/api.response';
import { NoteRepository } from 'src/repositories/note.repository';
import { CreateNoteDto, UpdateNoteDto } from './dto/note.dto';
export declare class NoteService {
    private readonly repository;
    constructor(repository: NoteRepository);
    getNotes(query: any): Promise<ResponseArray<Note>>;
    createNote(body: CreateNoteDto): Promise<CreateResponseObject<Note>>;
    getNoteById(id: string): Promise<ResponseObject<Note>>;
    updateNote(id: string, body: UpdateNoteDto): Promise<ResponseObject<Note>>;
    deleteNote(id: string): Promise<ResponseObject<Note>>;
    deleteAllNotes(): Promise<ResponseObject<Note>>;
}
