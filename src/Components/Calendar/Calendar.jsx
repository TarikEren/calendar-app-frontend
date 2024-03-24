import { useRef } from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";

export default function Calendar() {
    const calendarRef = useRef(null);
    return (
        <FullCalendar
            ref={calendarRef}
            plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            headerToolbar={
                {
                    start: "prev,next",
                    center: "title",
                    end: "today timeGridDay dayGridWeek dayGridMonth"
                }
            }
            buttonText={
                {
                    today: "Today",
                    day: "Day",
                    week: "Week",
                    month: "Month"
                }
            }
            editable={true}
            droppable={true}
            selectable={true}
            // contentHeight={"auto"}
            timeZone={"local"}
            height={"85vh"}
        />
    )
}