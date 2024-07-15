import { useEffect, useState } from "react";
import { cancelSchedule, fetchSchedule } from "../Services/ScheduleResource";
import { ShowAppointmentItem } from "./Appointments/ShowAppointmentItem";
import { LoadingIndicator } from "./LoadingIndicator/LoadingIndicator";

export function UpcomingSchedule() {
    const [schedules, setSchedules] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [cancelId, setCancelId] = useState(-1);
    useEffect(() => {
        setLoading(true);
        fetchSchedule().then((data) => {
            setSchedules(data);
            setLoading(false);
        })
    }, []);

    const cancel = (id) => {
        setCancelId(id);
        cancelSchedule(id).then((schedules) => {
            setCancelId(-1);
            setSchedules(schedules);
        })
    };


    return (<div className="upcoming-schedules">
        <div className="title"><h1>Upcoming Schedules</h1></div>
        <div role="status">
            {isLoading && <LoadingIndicator text="Loading Schedules" />}
        </div>
        {!isLoading && <div className="appointment-list">
            {(!schedules || schedules?.length === 0) ?
                <div className="no-results">No Upcoming Apointments</div> :
                schedules.map((s, i) => <div className="appointment-item" key={i}>
                    <ShowAppointmentItem
                        appointment={s}
                        onCancel={() => { cancel(s.id) }}
                        isCancelling={cancelId === s.id} />
                </div>)
            }
        </div>}
    </div>)
}

