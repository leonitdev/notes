"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteService = void 0;
const common_1 = require("@nestjs/common");
const api_response_1 = require("../../types/response/api.response");
const note_repository_1 = require("../../repositories/note.repository");
const configs_1 = require("../../infrastructure/configs");
let NoteService = class NoteService {
    constructor(repository) {
        this.repository = repository;
    }
    async getNotes(query) {
        const notes = await this.repository.getNotes(query);
        return new api_response_1.ResponseArray(true, common_1.HttpStatus.OK, notes);
    }
    async createNote(body) {
        const note = await this.repository.createNote(body);
        return new api_response_1.CreateResponseObject(true, common_1.HttpStatus.CREATED, `${configs_1.baseUrl}/notes/${note.id}`, note);
    }
    async getNoteById(id) {
        const note = await this.repository.getNoteById(id);
        if (!note) {
            throw new common_1.NotFoundException(`Note with id, couldn't be found!`);
        }
        return new api_response_1.ResponseObject(true, common_1.HttpStatus.OK, note);
    }
    async updateNote(id, body) {
        const updatedNote = await this.repository.updateNote(id, body);
        if (!updatedNote) {
            throw new common_1.NotFoundException('This note does not exits..');
        }
        return new api_response_1.ResponseObject(true, common_1.HttpStatus.OK, updatedNote);
    }
    async deleteNote(id) {
        const deletedNote = await this.repository.deleteNote(id);
        if (!deletedNote) {
            throw new common_1.NotFoundException(`Note with this id, couldn't be found!`);
        }
        return new api_response_1.ResponseObject(true, common_1.HttpStatus.OK, deletedNote);
    }
    async deleteAllNotes() {
        const deletedNotes = await this.repository.deleteAllNotes();
        return new api_response_1.ResponseObject(true, common_1.HttpStatus.OK, deletedNotes);
    }
};
NoteService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [note_repository_1.NoteRepository])
], NoteService);
exports.NoteService = NoteService;
//# sourceMappingURL=note.service.js.map