import axios from 'axios'

export default function getEquipament(token){
    return axios.get('https://apipolonorte.herokuapp.com/equipments/40',{
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}