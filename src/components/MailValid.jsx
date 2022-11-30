import * as yup from "yup";
import axios from 'axios';


export const reservationMail = yup.object().shape({
    email: yup.string().email("Wprowadź poprawny e-mail").required("E-mail jest wymagany")
    .test('email', 'Email został dodany na czarną listę rezerwacja nie zostanie zaakceptowana',
                function (value) {
                    return new Promise((resolve, reject) => {
                        axios.get(`http://localhost:8080/blacklist/email/${value}`)
                            .then((res) => {
                                if(res.data == "") {
                                    resolve(true);
                                    console.log("asdas")
                                } else {
                                    resolve(false)
                                }
                            })
                    })
                }
            ),



    phone: yup.string().required("Numer telefonu jest wymagany")
    .max(9, "Numer może mieć maksymalnie 9 cyfr")

})