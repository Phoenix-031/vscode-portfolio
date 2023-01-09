import {gql} from '@apollo/client'

const ADD_PROJECT = gql`
  mutation addProject($title:String!,$description:String!,$tags:[String],$source:String,$live:String) {
   addProject(title:$title,description:$description,tags:$tags,source:$source,live:$live){
     _id
     title
     description
   }
  }
`
const DELETE_PROJECT = gql`
  mutation deleteProject($id:ID!) {
   deleteProject(id: $id){
    _id
    title
    description
   }
}
`

const UPDATE_PROJECT = gql`
  mutation updateProject($id:ID!,$title:String,$description:String,$tags:[String],$source:String,$live:String){
   updateProject(id:$id,title:$title,description:$description,tags:$tags,source:$source,live:$live){
     _id
   }
  }
`

export {ADD_PROJECT, DELETE_PROJECT, UPDATE_PROJECT}