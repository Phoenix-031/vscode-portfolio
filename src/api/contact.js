import axios from 'axios'

const sendMessage = async (formdata) => {
    const {name,email,subject,message} = {...formdata}

    // console.log(name, email, subject, message)
    
    const response = await axios.post("http://localhost:8967/api/contact",{
        name,
        email,
        subject,
        message
    })

    return response
}

const getMessages = async (req,res) => {
    try {
        
    } catch (err) {
        console.log(err)
        res.status(500).json({
            success:false,
            msg:"messages couls not be fetched"
        })
        
    }
}

export {sendMessage,getMessages}