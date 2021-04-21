import * as ical from "node-ical";
import * as inputs from "./inputs";
import {default as moment} from "moment";

type PagerDutyEvent = ical.CalendarComponent & {attendee: string}

async function getRawCalendarData() {
	return await ical.fromURL(inputs.get().pagerDutyICalendarURL);
}

export async function getCurrentOnCallEvent() : Promise<PagerDutyEvent | undefined> {
	return Object.values(await getRawCalendarData())
		.filter(event => event.type === "VEVENT")
		.find(event => moment(event.start as Date).isBefore(moment()) && moment(event.end as Date).isAfter(moment())) as PagerDutyEvent;
}
