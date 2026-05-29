import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

export type CalendarTask = {
    id: string;
    title: string;
    start: string;      //ISO
    end: string;        //ISO
};

type Props = {
    tasks: CalendarTask[];
};

export const Calendar = ({ tasks }: Props) => {
    return (
        <div className="bg-white text-slate-900 rounded p-2">
            <FullCalendar
                plugins={[timeGridPlugin, interactionPlugin]}
                initialView="timeGridWeek"
                height="auto"
                nowIndicator
                events={tasks}
            />
        </div>
    );
};