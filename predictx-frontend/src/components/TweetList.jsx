import React from 'react';
import TweetCard from './TweetCard';
import { Grid } from '@mui/material';

const TweetList = ({ tweets }) => {
  return (
    <Grid container spacing={3} padding={2}>
      {tweets.map((tweet) => (
        <Grid item xs={12} sm={6} md={4} key={tweet.id}>
          <TweetCard tweet={tweet} />
        </Grid>
      ))}
    </Grid>
  );
};

export default TweetList; 