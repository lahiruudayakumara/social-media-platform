import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Trends = () => {
  const trends = [
    {
      head: 'Politics',
      title: 'Trending in India',
      count: '1,234 Tweets'
    },
    {
      head: 'Politics',
      title: 'Trending in Sri Lanka',
      count: '1,234 Tweets'
    }
  ];

  return (
    <div className='mt-2 rounded-md shadow-md bg-slate-50'>
        <h1 className='p-4 font-bold text-xl'>Trends for you</h1>
        {trends.map((trend, index) => (
          <TrendingItem key={index} head={trend.head} title={trend.title} count={trend.count} />
        ))}
    </div>
  )
}

export default Trends

const TrendingItem = ({head, title, count}) => {
  return (
    <div className='pt-2 p-4 flex items-center hover:bg-twitterBack cursor-pointer'>
      <div>
        <p className='text-sm'>{head} Trending</p>
        <h1 className='text-base font-bold'>{title}</h1>
        <p className='text-sm'>{count} Post</p>
      </div>
      <MoreHorizIcon className='ml-auto' />
    </div>
  );
}

