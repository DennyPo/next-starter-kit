import Ajv from 'ajv';
import ajvErrors from 'ajv-errors';

export const ajv = new Ajv({ allErrors: true, jsonPointers: true });
ajvErrors(ajv);

export const createErrors = validate => data => {
  validate(data);

  const errors = {};

  if (validate.errors) {
    for (const error of validate.errors) {
      const path = error.dataPath.replace(/\//g, '.').slice(1);

      errors[path] = error.message;
    }
  }

  return errors;
};

export const errorMessages = {
  emptyEmail: "Please, enter your email address",
  notValidEmail: "Please, enter a valid email address",
  emptyPassword: "Please, enter your password",
  minLengthPassword: "Minimum length of password, 8 or more characters"
};

export const emailPattern = "^([a-z0-9_+-]+\\.)*[a-z0-9_+-]+@[a-z0-9_-]+(\\.[a-z0-9_-]+)*\\.[a-z]{2,6}$";

export const passwordPattern = "[a-zA-Z0-9\\W]{8,}";
