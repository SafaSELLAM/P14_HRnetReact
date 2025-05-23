import { InputField } from "../Atoms/InputField"
import { SelectField } from "../Atoms/SelectField"

export const AddressFieldset = ({ street, setStreet, city, setCity, state, setState, stateOptions, customStyles }) => {
    return (
        <fieldset className="address column">
            <legend className="colorPrimary">Address</legend>
            <InputField label="Street" id="street" value={street} onChange={e => setStreet(e.target.value)} />
            <InputField label="City" id="city" value={city} onChange={e => setCity(e.target.value)} />
            <SelectField
                customStyles={customStyles}
                label="State"
                inputId="state"
                options={stateOptions}
                value={state}
                onChange={setState}
                placeholder="Select a state"
            />
        </fieldset>
    )
}