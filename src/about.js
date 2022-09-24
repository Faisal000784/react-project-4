
import about from './images/About.jpg'
function About() {
  return (
    <div className="h-[120vh] bg-gray-800 pt-[5.6rem]">
      <h1 className="flex justify-center text-7xl text-red-500 font-semibold">
        Venue
      </h1>
      <div className="flex ml-20 mt-20">
        <div className='flex flex-col pt-44'>
        <h1 className='text-5xl text-red-500 font-medium'>
          “Phoenix” <br />
          Exhibition Center
        </h1>
        <p className='mt-8 text-xl text-white'>1463 Oakwood Circle, <br/> Laguna Niguel, California, 92677</p>

        </div>
        <img src={about} alt=" " className=' w-[47rem] h-[30rem] ml-[4rem]'  />

       
      </div>
    </div>
  );
}

export default About;
