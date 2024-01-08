import React from "react";
import { Form, Formik } from "formik";
import CustomInput from "./CustomInput";
import { advancedSchema } from "./schemas";
import CustomSelect from "./CustomSelect";
import CustomCheckBox from "./CustomCheckBox";
import { Link } from "react-router-dom";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};

function PortalForm() {
  return (
    <>
      <Formik
        initialValues={{ username: "", university: "", isAccepted: false }}
        validationSchema={advancedSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <CustomInput
              label="Kullancı Adı"
              name="username"
              type="text"
              placeholder="Kullanıcı Adınızı Giriniz"
            />
            <CustomSelect
              label="Your School"
              name="universty"
              placeholder="Please select your universty."
            >
              <option value="">Please select your universty.</option>
              <option value="bogazici">Bogazici Universty</option>
              <option value="gsu">Galatasaray Universty</option>
              <option value="odtu">ODTU</option>
              <option value="itu">ITU</option>
            </CustomSelect>
            <CustomCheckBox type="checkbox" name="isAccepted" />
            <button disabled={isSubmitting} type="submit">
              Save
            </button>
            <Link className="formLink" to="/">
              Go to General Form
            </Link>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default PortalForm;
