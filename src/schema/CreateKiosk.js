import * as yup from 'yup';

export default {
    add: yup.object().shape({
        // logo: yup.mixed().required('Please Upload A Logo Image*'),
        // header: yup.mixed().required('Please Upload A Header Image*'),
        // banner: yup.mixed().required('Please Upload A Banner Image*'),
        name: yup.string().required("Franchise Name Is Required").min(3, "Password Should Have a Minimum Value of 3"),
        // email: yup.string().required("Email Is Required").email("Email Should Be Valid Email"),
        password: yup.string().required("Password Is Required").min(3, "Password Should Have a Minimum Value of 3"),
        confirmPassword: yup
            .string("Confirm Password Should Be String*")
            .required("Confirm Password Is Required*")
            .min(2, "Confirm Password Should Have A Minimun Length of 2*")
            .oneOf([yup.ref("password"), null], "Password Not Match"),
        // date: yup.date("Date Should Be Valid Date").required("Date Is Required"),
        location: yup.string().required("Location Is Required"),
        franchise: yup.string().required("Franchise Is Required"),
    })
}
