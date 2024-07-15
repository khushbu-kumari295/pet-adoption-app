import { cloneElement } from 'react';

export function InputComponent({
    label,
    isRequired,
    name,
    errors,
    handleChange,
    touched,
    handleBlur,
    children
}) {
    const errorMessage = errors[name];
    const isTouched = touched[name];
    const showError = !!errorMessage && isTouched;
    return <div className="input-field">
        <label htmlFor={name} className={isRequired ? 'required' : ''}>{label}</label>
        <div className="input-field-box">
            {cloneElement(children, { id: name, name, onBlur: handleBlur(name), onChange: handleChange(name), className: `input-${name} ${showError ? 'error' : ''}` })}
        </div>
        {showError && <p className="error">{errorMessage}</p>}
    </div>;
}