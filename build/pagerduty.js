"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentOnCallEvent = void 0;
const ical = __importStar(require("node-ical"));
const inputs = __importStar(require("./inputs"));
const moment_1 = __importDefault(require("moment"));
async function getRawCalendarData() {
    return await ical.fromURL(inputs.get().pagerDutyICalendarURL);
}
async function getCurrentOnCallEvent() {
    return Object.values(await getRawCalendarData())
        .filter(event => event.type === "VEVENT")
        .find(event => moment_1.default(event.start).isBefore(moment_1.default()) && moment_1.default(event.end).isAfter(moment_1.default()));
}
exports.getCurrentOnCallEvent = getCurrentOnCallEvent;
//# sourceMappingURL=pagerduty.js.map