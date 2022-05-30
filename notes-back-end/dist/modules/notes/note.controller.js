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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const note_service_1 = require("./note.service");
const note_schema_1 = require("../../repositories/schema/note.schema");
const note_dto_1 = require("./dto/note.dto");
let NoteController = class NoteController {
    constructor(service) {
        this.service = service;
    }
    async getNotes(res, req) {
        const items = await this.service.getNotes(req.query);
        const { status } = items;
        return res.status(status).json(items);
    }
    async getNoteById(res, id) {
        const item = await this.service.getNoteById(id);
        const { status } = item;
        return res.status(status).json(item);
    }
    async createNote(res, body) {
        const item = await this.service.createNote(body);
        const { status } = item;
        return res.status(status).json(item);
    }
    async updateNote(res, id, body) {
        const item = await this.service.updateNote(id, body);
        const { status } = item;
        return res.status(status).json(item);
    }
    async deleteNote(res, id) {
        const item = await this.service.deleteNote(id);
        const { status } = item;
        return res.status(status).json(item);
    }
    async deleteAllNote(res) {
        const item = await this.service.deleteAllNotes();
        return res.status(200).json(item);
    }
};
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: note_schema_1.Note, isArray: true }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], NoteController.prototype, "getNotes", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: note_schema_1.Note }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], NoteController.prototype, "getNoteById", null);
__decorate([
    (0, swagger_1.ApiCreatedResponse)({ type: note_schema_1.Note }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, note_dto_1.CreateNoteDto]),
    __metadata("design:returntype", Promise)
], NoteController.prototype, "createNote", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: note_schema_1.Note }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, note_dto_1.UpdateNoteDto]),
    __metadata("design:returntype", Promise)
], NoteController.prototype, "updateNote", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: note_schema_1.Note }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], NoteController.prototype, "deleteNote", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: note_schema_1.Note }),
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NoteController.prototype, "deleteAllNote", null);
NoteController = __decorate([
    (0, common_1.Controller)('v1/notes'),
    __metadata("design:paramtypes", [note_service_1.NoteService])
], NoteController);
exports.NoteController = NoteController;
//# sourceMappingURL=note.controller.js.map