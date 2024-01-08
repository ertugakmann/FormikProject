import { useField } from "formik";
import React from "react";

function CustomCheckBox({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <>
      <div className="checkbox">
        <input
          type="text"
          {...field}
          {...props}
          className={meta.error ? "input-error" : ""}
        />
        <span>I agree to the terms of use</span>
      </div>
      {meta.error && <div className="error">{meta.error}</div>}
    </>
  );
}

export default CustomCheckBox;
