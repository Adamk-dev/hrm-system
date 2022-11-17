import React from "react";
import "../styles/select.scss";
const SelectInput = (props) => {

  const { option, readonly, value, onChange, register, label, check, error, placeholder } = props;
  return (
    <>
      {/* <div className="select">
          <select
            className="mySelectArrow"
            name={name}
            ref={ref}
            onChange={onChange}
            onBlur={onBlur}
          >
            <option value="" disabled defaultValue="selected" hidden>
              Your Role/Designation
            </option>
            <option value="developer">developer</option>
            <option value="seller">seller</option>
            <option value="project_manager">project manager</option>
          </select>
          {errors[label] && (
            <span style={{ color: "red" }}>{errors[label]?.message}</span>
          )}
        </div> */}
      <div className="Styles.select">
        <select
          {...(register ? register(label, check) : {})}
          className='mySelectArrow' readonly={readonly} value={value} onChange={onChange}  >
          {/* <optgroup> */}
          <option value="" disabled selected hidden>
            {placeholder}
          </option>
          {option?.map((data) => <option value={data} >{data}</option>)}


        </select>
      </div>
    </>
  );
}


export default SelectInput;
