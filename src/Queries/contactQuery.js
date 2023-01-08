import {gql} from '@apollo/client'

const GET_MESSAGES = gql`
  query getMessages{
    getMessages{
    _id
    name
    email
    subject
    message
    }
  }
`

export default GET_MESSAGES