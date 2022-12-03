import axios from 'axios'

const getAllProjects = async () =>{
    const response = await axios.get("http://localhost:8967/api/projects");

    return response
}

export default getAllProjects