import * as yup from 'yup';

export default {
    add: yup.object().shape({
        franchiseName: yup.string().required("Franchise Name Is Required").min(3, "Franchise Name Should Have a Minimum Value of 3"),
        ownerName: yup.string().required("Owner Name Is Required").min(3, "Owner Name Should Have a Minimum Value of 3"),
        ownerPhoneNumber: yup.number().required("Owner Phone Number Is Required").min(3, "Owner Phone Number Should Have a Minimum Value of 3"),
        email: yup.string().required("Email Is Required").email("Email Should Be Valid Email"),
        password: yup.string().required("Password Is Required").min(3, "Password Should Have a Minimum Value of 3"),
        confirmPassword: yup
            .string("Confirm Password Should Be String*")
            .required("Confirm Password Is Required*")
            .min(2, "Confirm Password Should Have A Minimun Length of 2*")
            .oneOf([yup.ref("password"), null], "Password Not Match"),
        // date: yup.date("Date Should Be Valid Date").required("Date Is Required"),
        // kiosk: yup.string().required("kiosk Is Required"),
    })
}

