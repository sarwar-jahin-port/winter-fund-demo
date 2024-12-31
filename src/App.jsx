import './App.css'
import Carousel from './components/Carousel'
import RaisedWidget from './components/RaisedWidget'

function App() {
  const fundDetail = {
    "raised": "5,500",
    "goal": "10,000",
    "progress": "55%",
    "deadline": "15 Dec 2024",
    "remaining_days": 32 
  }

  return (
    <div className='max-w-[1290px] mx-auto p-10'>
        <h1 className='text-4xl font-semibold mb-7'>Winter Aid - Keep Gaza Warm</h1>
      <div className='flex gap-4'>
      <div className="aid-left lg:w-[60%]">
        <Carousel/>
      </div>
      <div className="aid-right lg:w-[40%]">
        <RaisedWidget fundDetail={fundDetail}/>
      </div>
      </div>
    </div>
  )
}

export default App
