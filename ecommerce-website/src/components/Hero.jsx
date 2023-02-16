import heroImage from '../assets/images/slider-img-2.png'

function Hero() {
  return (
        <div className='h-[280px] '>
            <img 
            src={heroImage} 
            alt="hero"
            className='h-full w-full object-cover'
            />
        </div>
    )
}

export default Hero