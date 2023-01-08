import {gql} from '@apollo/client'

const DELETE_MESSAGE = gql`
   mutation deleteMessage($id:ID!) {
    deleteMessage(id:$id) {
        _id
    }
   }
`

const SEND_MESSAGE = gql`
  mutation sendMessage($name:String!,$email:String!,$message:String,$subject:String) {
    sendMessage(name:$name,email:$email,message:$message,subject:$subject) {
      _id
    }
  }
`

export {DELETE_MESSAGE, SEND_MESSAGE} 