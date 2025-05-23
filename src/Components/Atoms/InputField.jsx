export const InputField = ({ label, id, value, onChange, type = "text" }) => {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} value={value} onChange={onChange} />
        </>
    )
}