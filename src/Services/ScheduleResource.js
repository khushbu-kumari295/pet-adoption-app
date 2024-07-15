
let schedules = [];
let currentId = 1;

export const addSchedule = (scheduleData) => {
    let resolve;
    const promise = new Promise((res) => {
        resolve = res;
    });
    setTimeout(() => {
        schedules = [...schedules, { ...scheduleData, id: currentId }];
        currentId++;
        resolve(schedules);
    }, 1000);
    return promise;
}

export const fetchSchedule = () => {
    let resolve;
    const promise = new Promise((res) => {
        resolve = res;
    });
    setTimeout(() => {
        resolve(schedules);
    }, 1000);
    return promise;
}

export const cancelSchedule = (id) => {
    let resolve;
    const promise = new Promise((res) => {
        resolve = res;
    });
    setTimeout(() => {
        schedules = schedules.filter(s => s.id !== id);
        resolve(schedules);
    }, 1000);
    return promise;

}