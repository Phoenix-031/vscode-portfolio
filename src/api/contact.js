import axios from 'axios'
// import Contact from '../icons/Contact'

const sendMessage = async (formdata) => {
    const {name,email,subject,message} = {...formdata}

    // console.log(name, email, subject, message)
    
    const response = await axios.post("https://witty-frog-tiara.cyclic.app/api/contact",{
        name,
        email,
        subject,
        message
    })

    return response
}

const getMessages = async (req,res) => {
    try {
        const contactmsgs = await axios.get(' https://witty-frog-tiara.cyclic.app/api/contact')

        return contactmsgs
    } catch (err) {
        console.log(err)
        res.status(500).json({
            success:false,
            msg:"messages could not be fetched"
        })
        
    }
}

export {sendMessage,getMessages}