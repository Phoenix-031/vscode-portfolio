import axios from 'axios'

const Githubdata = async() =>{
    try {
        const gdata = await axios.get('https://api.github.com/users/Phoenix-031')

        return gdata
        
    } catch (err) {
        console.log(err);
        
    }
}

const Githubrepo = async(pg_val : any) =>{
    console.log("pg_val",pg_val)
    try {
        console.log(pg_val)
        const repodata = await axios.get("https://api.github.com/users/Phoenix-031/repos",{
            params:{per_page: 10, page:pg_val},
        })

        return repodata
    } catch (err) {
        console.log(err)
        
    }
}

export {Githubdata,Githubrepo}