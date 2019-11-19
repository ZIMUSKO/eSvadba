import Joi from 'joi';

export const createMarketplacePostSchema = Joi.object()
  .keys({
    title: Joi.string()
      .min(4)
      .max(30)
      .required()
      .label('Title'),
    category: Joi.string()
      .min(4)
      .max(30)
      .required()
      .label('Category'),
    description: Joi.string()
      .min(1)
      .max(255)
      .required()
      .label('Description'),
    price: Joi.number()
      .min(1)
      .required()
      .label('Price'),
    phone: Joi.string()
      .min(0)
      .max(255)
      .required()
      .label('Phone Number'),
    email: Joi.string()
      .email()
      .required()
      .label('Email'),
  });

export const updateMarketplacePostSchema = Joi.object()
  .keys({
    title: Joi.string()
      .min(4)
      .max(30)
      .label('Title'),
    category: Joi.string()
      .min(4)
      .max(30)
      .label('Category'),
    description: Joi.string()
      .min(1)
      .max(255)
      .label('Description'),
    price: Joi.number()
      .min(0)
      .label('Price'),
    phone: Joi.string()
      .min(1)
      .max(255)
      .label('Phone Number'),
    email: Joi.string()
      .email()
      .label('Email'),
    active: Joi.boolean()
      .label('Active Flag'),
  });
