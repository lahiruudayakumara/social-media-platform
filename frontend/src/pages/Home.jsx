import Post from '../components/post/Post'
import Trends from '../components/trends/Trends'

const Home = () => {
  return (
    <div className='flex'>
        <div className="w-2/3 ">
        <Post />
        <Post />
        </div>
        <div className="w-1/3 p-2">
        <Trends />
        </div>
    </div>
  )
}

export default Home