import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Succesfuly")
    .required("You have to enter an email."),
  age: yup
    .number()
    .positive("Please enter a valid age")
    .integer("Please enter a valid age"),
  password: yup
    .string()
    .min(5, "please create a password with more than five characters")
    .matches(passwordRules, {
      message:
        "Please enter at least 1 upper case letter, 1 lower case letter and 1 number",
    })
    .required("You have to enter a password!"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords are not same.")
    .required("You have enter a password again."),
});

export const advancedSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Your username should have minimum 3 chracter")
    .required("You have to enter an username"),
  universty: yup
    .string()
    .oneOf(["bogazici", "gsu", "odtu", "itu"], "Please select your universty.")
    .required("Please select your universty."),
  isAccepted: yup.boolean().oneOf([true], "Accept the terms of use"),
});
