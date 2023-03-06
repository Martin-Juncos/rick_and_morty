
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regExpPass = /\d+/

export default function validadora({username, password}) {
    const errors = {}
    if(!regexEmail.test(username)) errors.username = ' el nombre de usuario tiene que ser un email'
    if(!username.length) errors.username = ' el nombre de usuario no puede estar vacío'
    if(username.length > 35) errors.username = ' el nombre de usuario no puede tener más de 35 caracteres'

    if(password.length < 6 || password.length > 10 ) errors.password = ' la contraseña tiene que tener una longitud entre 6 y 10 caracteres'
    if(!regExpPass.test(password)) errors.password = ' la contraseña tiene que tener al menos un número'

    return errors;    
}