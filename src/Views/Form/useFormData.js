import { useState } from 'react';

/**
 * The options object is passed in the below hook. 
 * The options contains onSubmit function to call when a correct form is filled and 
 * submit is clicked.
 * @param { onSubmit } options 
 * @returns 
 */
export const useFormData = (options) => {
    const [data, setData] = useState(initialData());
    const [touched, setTouched] = useState({});
    const [errors, setErrors] = useState({});

    const handleBlur = (key) => () => {
        setTouched({
            ...touched,
            [key]: true,
        });
        // Set Errors 
        const { newErrors } = validate(data);
        setErrors(newErrors);
    }

    const handleNonEventChange = (key) => (newValue) => {
        setData({
            ...data,
            [key]: newValue,
        });

        // Set Errors 
        const { newErrors } = validate(data);
        setErrors(newErrors);
    }

    const handleChange = (
        key
    ) => (e) => {
        setData({
            ...data,
            [key]: e.target.value,
        });

        // Set Errors 
        const { newErrors } = validate(data);
        setErrors(newErrors);
    };

    const handleSubmit = (data) => {

        // Set all fields touched 
        setTouched(Object.keys(data).reduce((accumulator, key) => {
            return { ...accumulator, [key]: true };
        }, {}));

        const { isValid, newErrors } = validate(data);
        if (!isValid) {
            setErrors(newErrors);
            return;
        }

        setErrors({});

        if (options?.onSubmit) {
            options.onSubmit(data);
        }
    };

    return {
        data,
        touched,
        handleChange,
        handleNonEventChange,
        handleSubmit,
        handleBlur,
        errors
    };
}

const initialData = () => {
    return {
        firstName: '',
        lastName: '',
        email: '',
        purpose: '',
        date: '',
        time: '',
        quantity: 0,
        petGroup: 'Cat'
    }
}

const validate = (data) => {
    let isValid = true;
    let newErrors = {};
    const { firstName, lastName, email, purpose, date, time, quantity, petGroup } = data;
    if (!firstName) {
        isValid = false;
        newErrors = {
            ...newErrors,
            firstName: 'Required'
        };
    }
    else if (!RegExp('^[A-Za-z]*$').test(firstName)) {
        isValid = false;
        newErrors = {
            ...newErrors,
            firstName: "You're allowed to enter only Alphabets"
        };
    }

    if (!lastName) {
        isValid = false;
        newErrors = {
            ...newErrors,
            lastName: 'Required'
        };
    }
    else if (!RegExp('^[A-Za-z]*$').test(lastName)) {
        isValid = false;
        newErrors = {
            ...newErrors,
            lastName: "You're allowed to enter only Alphabets"
        };
    }

    if (!email) {
        isValid = false;
        newErrors = {
            ...newErrors,
            email: 'Required'
        };
    }
    else if (!RegExp('^[A-Za-z0-9.]+@[A-Za-z0-9]+.[A-Za-z]+$').test(email)) {
        isValid = false;
        newErrors = {
            ...newErrors,
            email: "Email should have email format (<user>@<domain>.<extension>)"
        };
    }

    if (!purpose) {
        isValid = false;
        newErrors = {
            ...newErrors,
            purpose: 'Required'
        }
    }

    if (purpose === "Lounge Visit" || purpose === "Pet Adoption") {
        const yesterdayDate = new Date();
        yesterdayDate.setDate(yesterdayDate.getDate() - 1)
        if (!date) {
            isValid = false;
            newErrors = {
                ...newErrors,
                date: 'Required'
            }
        }
        if (!!date && Date.parse(date) < yesterdayDate) {
            isValid = false;
            newErrors = {
                ...newErrors,
                date: 'Please choose a future date'
            }
        }
        if (!time) {
            isValid = false;
            newErrors = {
                ...newErrors,
                time: 'Required'
            }
        }
        if (!!time) {
            const timeFirstPart = time.split(':')[0];
            if (timeFirstPart <= 8 || timeFirstPart >= 18) {
                isValid = false;
                newErrors = {
                    ...newErrors,
                    time: 'Time should be between 9AM and 5PM'
                }
            }

        }
    }

    if (!petGroup) {
        isValid = false;
        newErrors = {
            ...newErrors,
            petGroup: 'Required'
        }
    }

    if (quantity <= 0) {
        isValid = false;
        newErrors = {
            ...newErrors,
            quantity: 'Quantity Needs to be greater than 0'
        }
    }
    if (quantity > 4) {
        isValid = false;
        newErrors = {
            ...newErrors,
            quantity: 'Sorry, our limit is 4 per booking'
        }
    }

    return {
        isValid,
        newErrors
    }
}