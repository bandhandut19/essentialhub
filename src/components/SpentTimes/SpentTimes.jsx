
import PropTypes from 'prop-types'

const SpentTimes = ({spentTimes}) => {
    let totalTime = 0;
  return (
    <div className='bg-purple-100 font-semibold border-2 border-purple-800 rounded-lg p-2 mb-4 text-center'>
        {
            
            spentTimes.forEach((time)=>{
                const newTime = time.reading_time;
                totalTime += parseInt(newTime)
            })
        }
        <h1>Spent time on read: {totalTime} min</h1>

    </div>
  )
}

SpentTimes.propTypes = {
    spentTimes:PropTypes.array
}

export default SpentTimes