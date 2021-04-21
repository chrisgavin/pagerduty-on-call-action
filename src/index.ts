import * as core from "@actions/core";
import * as outputs from "./outputs";
import * as pagerduty from "./pagerduty";

async function main() {
	const onCallEvent = await pagerduty.getCurrentOnCallEvent();
	if (onCallEvent !== undefined) {
		core.info(`${onCallEvent.attendee} is currently on-call.`);
		outputs.set({email: onCallEvent.attendee});
	}
	else {
		core.info("No one currently seems to be on-call.");
	}
}

main().catch(error => core.setFailed(error.stack));
