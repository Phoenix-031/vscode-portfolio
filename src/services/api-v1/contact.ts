import axios from 'axios'
// import Contact from '../icons/Contact'

interface Messagetype { 
    name: string,
    email: string
    subject: string
    message: string
}

const sendMessage = async (formdata  :any) => {
    const {name,email,subject,message} : Messagetype  = {...formdata}

    // console.log(name, email, subject, message)
    
    const response = await axios.post("https://portfoliobackend-production-b6e9.up.railway.app/api/contact",{
        name,
        email,
        subject,
        message
    })

    return response
}

const getMessages = async (data : any) => {
    
    try {
        // const contactmsgs = await axios.get('https://portfoliobackend-production-b6e9.up.railway.app/api/contact')
        const contactmsgs = await axios.get('https://portfoliobackend-production-b6e9.up.railway.app/api/contact',{
            headers: {
                'Content-Type': 'application/json',
                'token':data
            }
        })


        return contactmsgs
    } catch (err) {
        console.log(err)
    }
}

const deleteContactMsg = async(contactId : any) => {
    try {
        
        const response = await axios.delete(`https://portfoliobackend-production-b6e9.up.railway.app/api/contact/${contactId}`)
        // const response = await axios.delete(`http://localhost:8967/api/contact/${contactId}`)
        
        return response
    } catch (err) {
        console.log(err)
        
    }
}

export {sendMessage,getMessages,deleteContactMsg}