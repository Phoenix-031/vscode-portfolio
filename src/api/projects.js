import axios from "axios";

const getAllProjects = async () =>{
    const response = await axios.get("https://portfoliobackend-production-b6e9.up.railway.app/api/projects");

    return response
}

const filterProjects = async (filterId) => {
    console.log(`https://portfoliobackend-production-b6e9.up.railway.app/projects/${filterId}`)
    
    try {
        const response = await axios.get(`https://portfoliobackend-production-b6e9.up.railway.app/api/projects/${filterId}`)
        console.log(response)

        return response
        
    } catch (err) {
        return err
        
    }
}

const updateProject = async (data,projectId) => {

    try {
        const updatedval = await axios.put(`https://portfoliobackend-production-b6e9.up.railway.app/api/projects/${projectId}`,{
            data : data
        })

        return updatedval
    } catch (err) {
        console.log(err)
        return err
        
    }
}

const addProject = async (data) => {
    try {
        const res = await axios.post("https://portfoliobackend-production-b6e9.up.railway.app/api/projects",{
            data : data
        })

        return res
    } catch (err) {
        console.log(err)
        return err
        
    }
}

const removeProject = async (projectId) => {
    try {
        const res = await axios.delete('https://portfoliobackend-production-b6e9.up.railway.app/api/projects/' + projectId)
        return res
    } catch (err) {
        console.log(err)
        return err
        
    }
}

export  {getAllProjects,filterProjects,updateProject,addProject,removeProject}