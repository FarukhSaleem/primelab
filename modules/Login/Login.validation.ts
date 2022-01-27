import * as Yup from'yup';
export const validationSchema = Yup.object().shape({
    email: Yup.string().email('Please enter valid email'),
    password: Yup.string().required('Required')
})