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
Object.defineProperty(exports, "__esModule", { value: true });
const core = __importStar(require("@actions/core"));
const outputs = __importStar(require("./outputs"));
const pagerduty = __importStar(require("./pagerduty"));
async function main() {
    const onCallEvent = await pagerduty.getCurrentOnCallEvent();
    if (onCallEvent !== undefined) {
        core.info(`${onCallEvent.attendee} is currently on-call.`);
        outputs.set({ email: onCallEvent.attendee });
    }
    else {
        core.info("No one currently seems to be on-call.");
    }
}
main().catch(error => core.setFailed(error.stack));
//# sourceMappingURL=index.js.map