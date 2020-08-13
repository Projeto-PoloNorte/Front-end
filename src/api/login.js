import axios from 'axios'

function loginValidation(cpf, password){
    return axios.post('https://apipolonorte.herokuapp.com/users/login',{
        cpf,
        password
    })
}

export default loginValidation