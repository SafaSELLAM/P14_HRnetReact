export const InputField = ({ label, id, value, onChange, type = "text", required = "true" }) => {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} value={value} onChange={onChange} required={required} />
        </>
    )
}