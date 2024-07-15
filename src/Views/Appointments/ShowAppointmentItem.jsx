
export function ShowAppointmentItem({ appointment, onCancel, isCancelling }) {
    const { firstName = '', lastName = '', id, ...rest } = appointment;

    return <>
        <div>Name: {`${firstName} ${lastName}`}</div>
        {Object.keys(rest).filter(k => !!rest[k]).map(k => <div key={k}>{k}: {rest[k]}</div>)}
        <button className="primary-button"
            onClick={() => onCancel()}
            disabled={isCancelling}>{isCancelling ? 'Cancelling. Please wait...' : 'Cancel Appointment'}</button>
    </>;
}
