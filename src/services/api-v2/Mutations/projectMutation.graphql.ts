import {gql} from '@apollo/client'

const ADD_PROJECT = gql`
  mutation addProject($title:String!,$description:String!,$tags:[String],$source:String,$live:String,$token:String!) {
   addProject(title:$title,description:$description,tags:$tags,source:$source,live:$live,token:$token){
    message
    success
   }
  }
`
const DELETE_PROJECT = gql`
  mutation deleteProject($id:ID!,$token: String!) {
   deleteProject(id: $id,token: $token){
    message
    success
   }
}
`

const UPDATE_PROJECT = gql`
  mutation updateProject($id:ID!,$title:String,$description:String,$tags:[String],$source:String,$live:String,$token:String!){
   updateProject(id:$id,title:$title,description:$description,tags:$tags,source:$source,live:$live,token:$token){
    message
    success
   }
  }
`

export {ADD_PROJECT, DELETE_PROJECT, UPDATE_PROJECT}