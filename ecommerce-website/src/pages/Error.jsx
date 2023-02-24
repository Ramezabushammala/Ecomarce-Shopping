import { Link } from 'react-router-dom'
import ErrorImage from '../assets/images/error.png'

const Error = () => {
  return (
    <div className='flex flex-col items-center py-[50px] justify-center min-h-screen'>
      <div className="img ">
        <img src={ErrorImage} alt="error" 
        className='w-full h-full'
        />
      </div>
      <p>{
        `This Page Is Not Found Back To `
        }
        <Link className='text-red-400 font-semibold' to='/'>Home</Link>
      </p>
    </div>
  )
}

export default Error