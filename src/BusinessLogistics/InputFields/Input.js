import React from 'react'
const Input = ({ placeholder, width, height, margin, marginRight, marginLeft, type, onChange, name, display, marginTop }) => {
    return (
        <input
            className="form-control simple_input_field"
            placeholder={placeholder ? placeholder : "Simple Input Field"}
            type={type ? type : "text"}
            onChange={onChange ? onChange : () => false}
            name={name ? name : ""}
            style={{
                width: width ? width : "auto",
                height: height ? height : "auto",
                marginLeft: marginLeft ? marginLeft : "",
                marginRight: marginRight ? marginRight : "",
                marginTop: marginTop ? marginTop : "",
                display: display ? display : "",
                margin: margin ? margin : "",
                border: "none",
                borderBottom: "2px solid #e9e9f0",
                boxShadow: "none",
                borderRadius: "0%"
            }}
        />
    )
}

export default Input
