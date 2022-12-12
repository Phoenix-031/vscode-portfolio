import axios from "axios";

const getAllProjects = async () =>{
    const response = await axios.get("https://witty-frog-tiara.cyclic.app/api/projects");

    return response
}

const filterProjects = async (filterId) => {
    try {
        const response = await axios.get(`https://witty-frog-tiara.cyclic.app/api/projects/${filterId}`)

        return response
        
    } catch (err) {
        return err
        
    }
}

const updateProject = async (data,projectId) => {

    try {
        const updatedval = await axios.put(`https://witty-frog-tiara.cyclic.app/api/projects/${projectId}`,{
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
        const res = await axios.post("https://witty-frog-tiara.cyclic.app/api/projects",{
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
        const res = await axios.delete('https://witty-frog-tiara.cyclic.app/api/projects/' + projectId)
        return res
    } catch (err) {
        console.log(err)
        return err
        
    }
}

export  {getAllProjects,filterProjects,updateProject,addProject,removeProject}