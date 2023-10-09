import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'
const Blogs = ({handleBookmarks,handleSpentTimes}) => {
    const [blogs,setBlogs] = useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data=>setBlogs(data))
    },[])
   
    return (
        <div className="md:w-2/3 w-full">
            {
                blogs.map(blog=><Blog
                     key={blog.id} 
                     blog={blog} 
                     handleBookmarks={handleBookmarks}
                     handleSpentTimes={handleSpentTimes}
                     >

                     </Blog>)
            }
        </div>
    );
};

Blogs.propTypes={
    handleBookmarks: PropTypes.func.isRequired,
    handleSpentTimes: PropTypes.func.isRequired
}


export default Blogs;