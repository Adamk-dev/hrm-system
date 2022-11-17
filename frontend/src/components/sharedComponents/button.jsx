import React from "react";
// import Styles from "../../styles/input.module.scss";

const Button = (props) => {
    const {
        type,
        label,
        check,
        value,
        // register,
        name,
        onClick,
        disabled
    } = props;

    return (
        <>
            <input
                // {...(register ? register(label, check) : {})}
                className={Styles.input}
                onChange={onChange}
                type={type}
                value={value}
                // readonly={readonly}
                onClick={onClick}
                name={name}
                placeholder={placeholder}
                disabled={disabled}

            />



        </>
    );
};

export default Button;
