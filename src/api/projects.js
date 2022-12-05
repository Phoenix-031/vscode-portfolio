import axios from 'axios'

const getAllProjects = async () =>{
    const response = await axios.get(" https://witty-frog-tiara.cyclic.app/api/projects");

    return response
}

export default getAllProjects