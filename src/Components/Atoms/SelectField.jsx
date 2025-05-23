import Select from "react-select"

export const SelectField = ({ label, inputId, options, value, onChange, placeholder, customStyles }) => {
    return (
        <>
            <label htmlFor={inputId}>{label}</label>
            <Select
                inputId={inputId}
                options={options}
                value={options.find(opt => opt.value === value)}
                onChange={option => onChange(option ? option.value : "")}
                placeholder={placeholder}
                styles={customStyles}
            />
        </>
    )
}