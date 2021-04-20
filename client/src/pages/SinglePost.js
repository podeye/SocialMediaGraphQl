import React,{ useContext} from 'react'
import {useQuery} from '@apollo/client';
import gql from 'graphql-tag';
import { Card, Grid, Image, Button, Label,Icon } from 'semantic-ui-react';
import moment from 'moment';
import LikeButton from '../components/LikeButton';
import {AuthContext} from '../context/auth';
import { valueFromASTUntyped } from 'graphql';
import DeleteButton from '../components/DeleteButton';


const SinglePost = (props) => {
  const postId = props.match.params.postId;
  const {user} = useContext(AuthContext);
  console.log(postId);

  let postMarkup;

  const { data: { getPost } ={}} = useQuery(FETCH_POST_QUERY,{
    variables:{
      postId,
    }
  })

  if(!getPost){
    postMarkup = <p>Loading Post</p>
  }else{
    var {id, body, createdAt, username, comments, likes, likeCount, commentCount} = getPost;
    console.log('we got something')
  }

    postMarkup = (
      <Grid>
        <Grid.Row>
          <Grid.Column width={2}>
          <Image 
          src='https://react.semantic-ui.com/images/avatar/large/molly.png' size="small" float="right"/>
          </Grid.Column>
          <Grid.Column width={10}>
          <Card fluid>
            <Card.Content>
              <Card.Header>{username}</Card.Header>
              <Card.Meta>{moment(createdAt).fromNow()}</Card.Meta>
              <Card.Description>{body}</Card.Description>
            </Card.Content>
            <hr/>
            <Card.Content extra>
              <LikeButton user={user} post={{id, likes, likeCount}}/>
              <Button as="div" labelPosition="right" onClick={()=>{
                console.log("comment on post")
              }}>
                <Button basic color="blue">
                  <Icon name="comments"/>
                </Button>
                <Label basic color="blue" pointing="left">
                  {commentCount}
                </Label>       
                </Button>
                {user && user.username ===  username &&(
                  <DeleteButton postId={id}/>
                )}
            </Card.Content>
          </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
    return postMarkup

}

//607ee4174e280309309b2b55
const FETCH_POST_QUERY = gql`
query($postId:ID!){
  getPost(postId: $postId) {
    id
    body
    createdAt
    username
    likeCount
    likes {
      username
    }
    commentCount
    comments {
      id
      username
      createdAt
      body
    }
  }
}
`;

export default SinglePost

