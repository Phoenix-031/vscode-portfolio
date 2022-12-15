import axios from "axios";

const LoginAdmin = async(data) => {
    try {
    const res = await axios.post("https://portfoliobackend-production-b6e9.up.railway.app/api/auth",{
        data:data
    })

    return res

    } catch (err) {
        console.log(err);
        return err
        
    }
}

const verfiyAdmin = async(data) => {
    const res = await axios.get('https://portfoliobackend-production-b6e9.up.railway.app/api/auth/verify',{
        headers: {
            'Content-Type': 'application/json',
            'token' : data
        }
    })

    return res
}

export {LoginAdmin,verfiyAdmin}