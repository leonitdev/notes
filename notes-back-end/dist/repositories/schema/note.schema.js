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
exports.NoteSchema = exports.Note = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
const note_dto_1 = require("../../modules/notes/dto/note.dto");
let Note = class Note {
    constructor(dto) {
        const { noteBody, xPosition, yPosition } = dto;
        this.noteBody = noteBody;
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.createdAt = new Date().toLocaleString();
    }
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Note.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Description of the Note',
        type: String,
    }),
    (0, mongoose_1.Prop)({
        type: 'string',
        minlength: 3,
        maxlength: 800,
    }),
    __metadata("design:type", String)
], Note.prototype, "noteBody", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'x Position of the Note',
        type: Number,
    }),
    (0, mongoose_1.Prop)({
        type: 'number',
    }),
    __metadata("design:type", Number)
], Note.prototype, "xPosition", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'y Position of the Note',
        type: Number,
    }),
    (0, mongoose_1.Prop)({
        type: 'number',
    }),
    __metadata("design:type", Number)
], Note.prototype, "yPosition", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Creation date of Note',
        type: String,
    }),
    (0, mongoose_1.Prop)({
        type: String,
        default: new Date().toLocaleString(),
    }),
    __metadata("design:type", String)
], Note.prototype, "createdAt", void 0);
Note = __decorate([
    (0, mongoose_1.Schema)({ versionKey: false }),
    __metadata("design:paramtypes", [note_dto_1.CreateNoteDto])
], Note);
exports.Note = Note;
exports.NoteSchema = mongoose_1.SchemaFactory.createForClass(Note).set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        ret.id = ret._id;
        delete ret._id;
    },
});
//# sourceMappingURL=note.schema.js.map