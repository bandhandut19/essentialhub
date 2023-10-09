
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'
function App() {
  const [bookmarks, setBookmarks] = useState([])

  const handleBookmarks = (blog) => {
    const newAddedBookmarks = [...bookmarks,blog]
    setBookmarks(newAddedBookmarks)
    alert("Bookmark Added")
  }

  const [spentTimes,setSpentTimes] = useState([])

  const handleSpentTimes =(blog)=>{
    const newAddedTimes = [...spentTimes,blog]
    setSpentTimes(newAddedTimes)
    alert("Marked as read")
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== blog.id)
    setBookmarks(remainingBookmarks)
  }
 

  return (
    <>
      <div className='w-4/5 mx-auto pt-10 '>
        <Header></Header>

        <div className='flex md:flex-row flex-col-reverse gap-5'>
          <Blogs handleBookmarks={handleBookmarks} handleSpentTimes={handleSpentTimes}></Blogs>
          <Bookmarks bookmarks={bookmarks} spentTimes={spentTimes}></Bookmarks>
        </div>
      </div>
    </>
  )
}

export default App
