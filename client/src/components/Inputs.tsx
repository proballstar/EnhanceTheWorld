export default function Input({name, handleChange, values: value}: {name: string, handleChange: any, values: any}) {
    return (
        <div>
            <label htmlFor={name}>
                {name.toLocaleUpperCase()}
            </label>
            <input name={name} onChange={handleChange} value={value} />
        </div>
    )
}