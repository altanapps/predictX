import React from 'react';
import { Card, CardContent, CardHeader, Typography, Avatar } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import '../styles/TweetCard.css';

const TweetCard = ({ tweet }) => {
  return (
    <Card className="tweet-card">
      <CardHeader
        avatar={
          <Avatar src={tweet.userAvatar} alt={tweet.username}>
            {tweet.username[0]}
          </Avatar>
        }
        title={tweet.username}
        subheader={`@${tweet.handle}`}
      />
      <CardContent>
        <Typography variant="body1" className="tweet-content">
          {tweet.content}
        </Typography>
        <div className="tweet-stats">
          <div className="views">
            <VisibilityIcon fontSize="small" />
            <Typography variant="body2">
              {tweet.views.toLocaleString()} views
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TweetCard; 