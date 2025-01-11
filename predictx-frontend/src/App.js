import React from 'react';
import Header from './components/Header';
import TweetList from './components/TweetList';
import { Container } from '@mui/material';
import './App.css';

// Sample data - replace with your actual data source
const sampleTweets = [
  {
    id: 1,
    username: "John Doe",
    handle: "johndoe",
    userAvatar: null,
    content: "This is a sample tweet about PredictX analytics!",
    views: 1234
  },
  {
    id: 2,
    username: "Jane Smith",
    handle: "janesmith",
    userAvatar: null,
    content: "Another interesting tweet about data analysis and predictions.",
    views: 5678
  },
  {
    id: 3,
    username: "Test User",
    handle: "testuser",
    userAvatar: null,
    content: "Testing with a longer tweet content to see how the card handles multiple lines of text.",
    views: 9999
  }
];

function App() {
  return (
    <div className="App">
      <Header />
      <Container maxWidth="lg">
        <TweetList tweets={sampleTweets} />
      </Container>
    </div>
  );
}

export default App;
