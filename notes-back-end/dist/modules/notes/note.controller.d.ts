import { Response, Request } from 'express';
import { NoteService } from 'src/modules/notes/note.service';
import { CreateNoteDto, UpdateNoteDto } from './dto/note.dto';
export declare class NoteController {
    private readonly service;
    constructor(service: NoteService);
    getNotes(res: Response, req: Request): Promise<Response<any, Record<string, any>>>;
    getNoteById(res: Response, id: string): Promise<Response<any, Record<string, any>>>;
    createNote(res: Response, body: CreateNoteDto): Promise<Response<any, Record<string, any>>>;
    updateNote(res: Response, id: string, body: UpdateNoteDto): Promise<Response<any, Record<string, any>>>;
    deleteNote(res: Response, id: string): Promise<Response<any, Record<string, any>>>;
    deleteAllNote(res: Response): Promise<Response<any, Record<string, any>>>;
}
