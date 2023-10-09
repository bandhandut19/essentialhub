import PropTypes from 'prop-types'
import { BsBookmarkFill } from 'react-icons/bs';
const Blog = ({ blog, handleBookmarks,handleSpentTimes}) => {
    const { title, posted_date, cover, author, author_img, reading_time, hashtags } = blog
    return (
        <div className='border-4 border-purple-300 rounded-2xl mb-5 '>
            <img className='rounded-xl' src={cover} alt="" />
            <div className='p-2'>

                <div className='flex md:justify-between md:flex-row flex-col'>
                    <div className='flex gap-2'>
                        <div>
                            <img className='w-8 rounded-3xl' src={author_img} alt="" />
                        </div>
                        <div>
                            <h1>{author}</h1>
                            <p>{posted_date}</p>
                        </div>
                    </div>
                    <div>
                        <span>{reading_time} min read</span>
                        <button
                            onClick={() => { handleBookmarks(blog) }}
                            className='ml-2 text-purple-600'>
                            <BsBookmarkFill></BsBookmarkFill>
                        </button>
                    </div>
                </div>
                <h1 className='font-semibold text-2xl mt-2 mb-2'>{title}</h1>
                <p>

                    {
                        hashtags.map((hash, idx) => <span className='mr-2' key={idx}><a href="#">#{hash}</a></span>)
                    }
                </p>
                <p className='mt-2'>
                    <button
                        onClick={()=>{handleSpentTimes(blog)}}
                        className='underline text-purple-700 font-bold'>Mark as read</button>
                </p>

            </div>


        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmarks: PropTypes.func.isRequired,
    handleSpentTimes: PropTypes.func.isRequired


}
export default Blog;