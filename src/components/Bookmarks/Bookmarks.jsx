import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';
import SpentTimes from '../SpentTimes/SpentTimes';
const Bookmarks = ({bookmarks,spentTimes}) => {
    
    return (
        <div className="md:w-1/3 w-full">
            <SpentTimes spentTimes={spentTimes}></SpentTimes>
            <div className='bg-slate-300 p-4 rounded-md'>
            <h1 className='mb-5 font-bold'>Bookmarked Blogs: {bookmarks.length}</h1>
            {
                bookmarks.map((singleBookmark,idx) => <Bookmark key={idx} bookmark={singleBookmark}></Bookmark>)
            }           
            </div>
        </div>
    );
};

Bookmarks.propTypes ={
    bookmarks: PropTypes.array.isRequired,
    spentTimes: PropTypes.array.isRequired,
    
}

export default Bookmarks;