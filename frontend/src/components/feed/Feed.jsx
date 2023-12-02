import { useEffect, useState } from 'react'
import TweetBox from './TweetBox'
import Post from '../Status'
import { CircularProgress } from '@mui/material';
import {fetchData} from '../../api/apiTweet';

function Feed() {
  const [data, setData] = useState([]);

  useEffect(() => {
      fetchData().then((fetchData) => setData(fetchData));
  }, []);

  if(data.length === 0) return (<CircularProgress />);

  return (
    <div>
        {/*header */}
        <TweetBox />
        {[...data].reverse().map((post, index) => (
            <Post
            key={index}
            displayName={post.firstName + ' ' + post.lastName }
            userName={post.userName}
   
            text={post.description}
            image={post.imgUrl}
            avatar={post.avatar}
          />
        ))}
    </div>
  )
}

export default Feed