
export function QuantityField({ value, setValue, name, className }) {
    const onValueUpdate = (newValue) => {
        setValue(newValue);
    }
    return <>
        <div className={className}>
            <button className="btn minus1" aria-label="decrease persons" onClick={() => { onValueUpdate(value - 1) }}>-</button>
            <input
                name={name}
                type="number"
                value={value}
                onChange={(e) => { onValueUpdate(parseInt(e.target.value)) }} />
            <button className="btn add1" aria-label="increase persons" onClick={() => { onValueUpdate(value + 1) }}>+</button>
        </div>
    </>
}