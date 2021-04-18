import React from 'react'
import {useQuery} from '@apollo/client';
import gql from 'graphql-tag';

const Home = () => {
  const { loading, data: { getPosts: posts } = {}} = useQuery(FETCH_POSTS_QUERY)
  if(posts){
    console.log('DATA',posts)
  }
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

const FETCH_POSTS_QUERY = gql`
{
    getPosts{
     id body createdAt username likeCount
     likes{
       username
     }
     commentCount
     comments{
       id
       username
       createdAt
       body
     }
    }
}
`

export default Home
