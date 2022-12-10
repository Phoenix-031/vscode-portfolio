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

const getMessages = async () => {
    try {
        // const contactmsgs = await axios.get('https://witty-frog-tiara.cyclic.app/api/contact')
        const contactmsgs = await axios.get('https://witty-frog-tiara.cyclic.app/api/contact')


        return contactmsgs
    } catch (err) {
        console.log(err)
    }
}

export {sendMessage,getMessages}