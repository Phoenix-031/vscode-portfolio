import {gql} from '@apollo/client'

const GET_ALL_PROJECTS = gql`
  query getAllProjects {
    getAllProjects {
      _id
      title
      description
      tags
      imgurl
      source
      live
    }
}
`

const FILTER_PROJECT = gql`
  query filterProjects($id : String!){
    filterProjects(id : $id) {
      _id
      title
      description
      tags
      imgurl
      source
      live
    }
  }
`

export  {GET_ALL_PROJECTS,FILTER_PROJECT}