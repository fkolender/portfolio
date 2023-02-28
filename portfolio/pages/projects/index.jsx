import Link from 'next/link';
import React from 'react'
// Shoutout JSONPlaceholder for the dummy API.

export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    return {
        props: { posts : data }
    }
}

const Projects = ({posts}) => {
  return (
    <div>
    <h1 className='title'>Projects — WIP👷</h1>
    <h1 className='title'>In the meantime, display is kept fed from a placeholder API.</h1>
    {posts.map(post =>(
      <Link href={'/projects/'+post.id} key={post.id}>
          <div className="single">
            <h3> {post.title} </h3>
          </div>
          </Link>
    ))}
    </div>
  )
}

export default Projects