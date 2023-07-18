import * as yup from 'yup';

export const searchQueryValidationSchema = yup.object().shape({
  query: yup.string().required(),
  user_id: yup.string().nullable(),
});
