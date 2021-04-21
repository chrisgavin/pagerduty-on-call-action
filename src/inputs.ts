import * as core from "@actions/core";

class Inputs {
	pagerDutyICalendarURL = core.getInput("pagerduty-icalendar-url", {required: true});
}

export function get():Inputs {
	return new Inputs();
}
