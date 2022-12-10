import axios from "axios";

const LoginAdmin = async(data) => {
    try {
    const res = await axios.post("http://localhost:8967/api/auth",{
        data
    })

    return res

    } catch (err) {
        console.log(err);
        return err
        
    }
}

const verfiyAdmin = async(data) => {
    const res = await axios.get('http://localhost:8967/api/auth/verify',{
        headers: {
            'Content-Type': 'application/json',
            'token' : data
        }
    })

    return res
}

export {LoginAdmin,verfiyAdmin}