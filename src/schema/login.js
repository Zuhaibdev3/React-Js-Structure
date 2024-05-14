import * as yup from 'yup'

export default {
    add: yup.object().shape({
        email: yup
            .string("Email Should Be String*"),
        // .email("Please Provide A Valid Email Address*")
        // .required("Email Address is Required*"),
        password: yup
            .string("Password Should Be String*")
        // .required("Password Is Required*")
        // .min(2, "Password Should Have A Minimun Length of 2*"),
    })
}

