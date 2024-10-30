"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePartnerDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_partner_dto_1 = require("./create-partner.dto");
class UpdatePartnerDto extends (0, mapped_types_1.PartialType)(create_partner_dto_1.CreatePartnerDto) {
}
exports.UpdatePartnerDto = UpdatePartnerDto;
//# sourceMappingURL=update-partner.dto.js.map