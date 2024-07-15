import { cats } from '../data/cat-data';
import { dogs } from '../data/dog-data';

export const fetchCatData = (isAdoptable) => {
    let resolve;
    const promise = new Promise((res, rej) => {
        resolve = res;
    });
    setTimeout(() => {
        const filteredResults = cats.filter(c => c.isAdoptable === isAdoptable);
        resolve(filteredResults);
    }, 1000);
    return promise;
}

export const fetchDogData = (isAdoptable) => {
    let resolve;
    const promise = new Promise((res, rej) => {
        resolve = res;
    });
    setTimeout(() => {
        const filteredResults = dogs.filter(d => d.isAdoptable === isAdoptable);
        resolve(filteredResults);
    }, 1000);
    return promise;
}