import {gql} from '@apollo/client'

const LOGIN_ADMIN = gql`
   query loginAdmin($email:String!,$password:String!) {
    loginAdmin(email:$email,password:$password) {
        accessToken
        success
    }
   }
`

const VERIFY_ADMIN = gql`
   query veriAdmin($token: String!) {
    veriAdmin(token:$token) {
        accessToken
        success
    }
   }
`

export {LOGIN_ADMIN,VERIFY_ADMIN}