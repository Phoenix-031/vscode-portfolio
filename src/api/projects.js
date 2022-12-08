import axios from 'axios'

const getAllProjects = async () =>{
    const response = await axios.get(" https://witty-frog-tiara.cyclic.app/api/projects");

    return response
}

const filterProjects = async () => {
    try {
        const response = await axios.get('http://localhost:8967/api/projects/:filterId')

        return response
        
    } catch (err) {
        return err
        
    }
}

export  {getAllProjects,filterProjects}