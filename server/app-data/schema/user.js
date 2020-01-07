import Joi from './joi';

const email = Joi.string()
  .email()
  .required()
  .label('Email');
const password = Joi.string()
  .min(8)
  .max(20)
  .regex(/^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,20}$/)
  .label('Password')
  .options({
    language: {
      string: {
        regex: {
          base: 'Password must contain at least one lowercase letter, one uppercase letter and one digit and one special character',
        },
      },
    },
  });

export const userSignUpSchema = Joi.object()
  .keys({
    email,
    username: Joi.string()
      .min(4)
      .max(30)
      .required()
      .label('Username'),
    password,
    roleName: Joi.string()
      .required()
      .valid('Customer', 'Vendor')
      .label('Role Name'),

  });


export const userSignInSchema = Joi.object()
  .keys({
    email,
    password,
  });
