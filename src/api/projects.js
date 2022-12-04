import axios from 'axios'

const getAllProjects = async () =>{
    const response = await axios.get("https://portfoliobackend-552r.onrender.com/api/projects");

    return response
}

export default getAllProjects