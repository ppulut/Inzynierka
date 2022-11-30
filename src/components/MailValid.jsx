import * as yup from "yup";
import axios from 'axios';


export const reservationMail = yup.object().shape({
    email: yup.string().email("Wprowadź poprawny e-mail").required("E-mail jest wymagany")
    .test('email', 'Email został dodany na czarną listę',
                function (value) {
                    return new Promise((resolve, reject) => {
                        axios.get(`http://localhost:8080/blacklist/email/${value}`)
                            .then((res) => {
                                if(res.data === "zajete") {
                                    resolve(false);
                                    console.log("asdas")
                                } else {
                                    resolve(true)
                                }
                            })
                    })
                }
            ),

})