import axios from 'axios'

export default function postMaintenance(token, equipment_id, description){
    console.log('console do post', token, equipment_id, description )
    return axios.post('https://apipolonorte.herokuapp.com/maintenances',
        {
            equipment_id,
            description
        },
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
}