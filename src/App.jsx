
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
function App() {


  return (
    <>
      <div className='w-4/5 mx-auto pt-10 '>
        <Header></Header>
        
        <div>
          <Blogs></Blogs>

        </div>
      </div>
    </>
  )
}

export default App
