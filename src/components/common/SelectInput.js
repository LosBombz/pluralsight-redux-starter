import React, {PropTypes} from 'react';

const SelectInput = ({name, label, onChange, defaultOption, value, error, options}) => {
    let wrapperClass = 'form-group';
    if(error && error.length) {
        wrapperClass += " " + "has-error";
    }

    return (
        <div className={wrapperClass}>
            <label htmlFor={name}>{label}</label>
            <div className="field">
                <select
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="form-control"
                >
                    <option value="">{defaultOption}</option>
                    {options.map((option)=>{
                        return <option key={option.value} value={option.value}>{option.text}</option>;
                    })}
                </select>
                {error && <div className="alert alert-danger">{error}</div>}
            </div>
        </div>
    );
};

SelectInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    defaultOption: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object)
};

export default SelectInput;
