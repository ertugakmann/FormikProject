import React from "react";
import { useFormik } from "formik";

function GeneralForm() {
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form>
      <div className="inputDiv">
        <label>Email</label>
        <br />
        <input
          type="email"
          value={values.email}
          onChange={handleChange}
          id="email"
          placeholder="Enter Your Email Adress"
        />
      </div>
      <div className="inputDiv">
        <label>Age</label> <br />
        <input
          type="number"
          value={values.age}
          onChange={handleChange}
          id="age"
          placeholder="Enter Your Age"
        />
      </div>
      <div className="inputDiv">
        <label>Password</label> <br />
        <input
          type="password"
          value={values.password}
          onChange={handleChange}
          id="password"
          placeholder="Enter Your Password"
        />
      </div>
      <div className="inputDiv">
        <label>Confirm Password</label>
        <br />
        <input
          type="password"
          value={values.confirmPassword}
          onChange={handleChange}
          id="confirmPassword"
          placeholder="Enter Your Password"
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
}

export default GeneralForm;
