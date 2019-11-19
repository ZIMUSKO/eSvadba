import Joi from 'joi';

export const createForumPostSchema = Joi.object()
  .keys({
    postTitle: Joi.string()
      .min(4)
      .max(30)
      .required()
      .label('Title'),
    postCategory: Joi.string()
      .min(4)
      .max(30)
      .required()
      .label('Category'),
    postDescription: Joi.string()
      .min(1)
      .max(255)
      .required()
      .label('Description'),
  });

export const updateForumPostSchema = Joi.object()
  .keys({
    postTitle: Joi.string()
      .min(4)
      .max(30)
      .label('Title'),
    postCategory: Joi.string()
      .min(4)
      .max(30)
      .label('Category'),
    postDescription: Joi.string()
      .min(1)
      .max(255)
      .label('Description'),
  });
