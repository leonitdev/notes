/// <reference types="mongoose" />
import { CreateNoteDto } from 'src/modules/notes/dto/note.dto';
export declare type NoteDocument = Note & Document;
export declare class Note {
    id: string;
    noteBody: string;
    xPosition: number;
    yPosition: number;
    createdAt: string;
    constructor(dto: CreateNoteDto);
}
export declare const NoteSchema: import("mongoose").Schema<import("mongoose").Document<Note, any, any>, import("mongoose").Model<import("mongoose").Document<Note, any, any>, any, any, any>, any>;
