import React, { useState } from 'react'
import Styles from "../styles/profileselectinput.module.scss"
const SelectInput = (props) => {
  const { option, readonly, value, onChange, register, label, check, error } = props;
  // console.log(stateopt);
  // console.log(option)
  // const [stateOption, setStateOption] = useState([])


  // const handlecountry = (e) => {
  //   onChange(e)
  //   const getcountryId = e.target.value;
  //   const getStateData = option.find(country => country.country_id === getcountryId).states;

  //   setStateOption(getStateData);
  //   const stateopt = stateOption

  // }
  // console.log("option", option)

  return (
    <>
      <div className="Styles.select">
        <select
          {...(register ? register(label, check) : {})}
          className={Styles.mySelectArrow} readonly={readonly} value={value} onChange={onChange}  >
          {/* <optgroup> */}
          <option value="" disabled selected hidden>
            Select Option
          </option>
          {option?.map((city) => <option value={city} >{city}</option>)}


        </select>
      </div>




    </>
  )
}


export default SelectInput

