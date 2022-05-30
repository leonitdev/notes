import { Model } from 'mongoose';
import { CreateNoteDto, UpdateNoteDto } from 'src/modules/notes/dto/note.dto';
import { Note, NoteDocument } from './schema/note.schema';
export declare class NoteRepository {
    private readonly model;
    constructor(model: Model<NoteDocument>);
    getNotes(query: any): Promise<Note[]>;
    createNote(body: CreateNoteDto): Promise<Note>;
    getNoteById(id: string): Promise<Note>;
    updateNote(id: string, body: UpdateNoteDto): Promise<Note>;
    deleteNote(id: string): Promise<Note>;
    deleteAllNotes(): Promise<any>;
}
