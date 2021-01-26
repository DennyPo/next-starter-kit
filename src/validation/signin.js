import { ajv, errorMessages, createErrors, emailPattern, passwordPattern } from "./index";


const validationSchema = {
  type: "object",
  properties: {
    email: {
      type: "string",
      minLength: 1,
      pattern: emailPattern,
      errorMessage: {
        pattern: errorMessages.notValidEmail
      }
    },
    password: {
      type: "string",
      minLength: 1,
      pattern: passwordPattern,
      errorMessage: {
        pattern: errorMessages.minLengthPassword
      }
    }
  },
  errorMessage: {
    properties: {
      email: errorMessages.emptyEmail,
      password: errorMessages.emptyPassword,
    }
  }
};

export const validate = createErrors(ajv.compile(validationSchema));
