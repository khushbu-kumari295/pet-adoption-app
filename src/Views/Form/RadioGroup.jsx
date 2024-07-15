export function RadioGroup({ name, onChange, checkedValue, onBlur, className, options }) {

    return <div className={className}>
        {options.map(inputOption => <div key={inputOption}>
            <input
                type="radio"
                name={name}
                value={inputOption}
                checked={checkedValue === inputOption}
                onClick={() => { onBlur(); }}
                onChange={(e) => { onChange(e) }} />
            <label onClick={() => { onBlur(); }} htmlFor={name}>{inputOption}</label>
        </div>)}

    </div>;
}