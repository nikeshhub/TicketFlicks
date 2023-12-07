import { Field } from "formik";
import React from "react";

const FormikInput = ({ name, label, type, required, ...props }) => {
  return (
    <div>
      <Field name={name}>
        {({ field, form, meta }) => {
          return (
            <div
              style={{
                margin: "20px",
                
              }}
            >
              <label
                htmlFor={name}
                style={{ color: meta.touched && meta.error ? "red" : "white" }}
              >
                <strong>{label}</strong>
                {required ? <span style={{ color: "red" }}>*</span> : null}
              </label>
              <br />
              <br />
              <input
                {...field}
                {...props}
                style={{
                  
                  padding: "10px",
                  borderRadius: "8px",
                  border: "1px solid var(--dark-mode-border-color, #252D3C)",
                  background: "var(--dark-mode-background-secondary, #1C1C24)",
                  borderColor: meta.touched && meta.error ? "red" : "#252D3C",
                  ...props.style
                }}
                type={type}
                id={name}
                value={meta.value}
                onChange={field.onChange}
              />
              {meta.touched && meta.error ? (
                <div style={{ color: "red" }}>
                  <i>{meta.error}</i>
                </div>
              ) : null}
            </div>
          );
        }}
      </Field>
    </div>
  );
};

export default FormikInput;
