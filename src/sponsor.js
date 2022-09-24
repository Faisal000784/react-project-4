import logo from './images/logo10.png';
import logo2 from './images/logo2.png';
import logo3 from './images/logo3.png';
import logo4 from './images/logo4.png';
import logo5 from './images/logo5.png';
import logo6 from './images/logo6.png';
import logo7 from './images/logo7.png';
import logo8 from './images/logo8.png';
import logo9 from './images/logo9.png';
import logo10 from './images/logo.png';








function Sponsor() {
    return (
      <div className="h-[100vh] bg-gray-800 pt-[6rem]">
        <h1 className="flex justify-center text-7xl text-red-500 font-semibold">
          Sponsor
        </h1>
        <div className='flex mt-28 ml-20'>
            <img src={logo} alt="" className='h-[3rem] w-[11rem]' />
            <img src={logo2} alt="" className='h-[3rem] w-[11rem] ml-16' />
            <img src={logo3} alt="" className='h-[3rem] w-[12rem] ml-16' />
            <img src={logo4} alt="" className='h-[3rem] w-[12rem] ml-16' />
            <img src={logo9} alt="" className='h-[3rem] w-[12rem] ml-16' />



           
        </div>


        <div className='flex mt-24 ml-20'>
        <img src={logo10} alt="" className='h-[3rem] w-[11rem]' />
            <img src={logo5} alt="" className='h-[3rem] w-[11rem] ml-16' />
            <img src={logo6} alt="" className='h-[3rem] w-[12rem] ml-16' />
            <img src={logo7} alt="" className='h-[3rem] w-[12rem] ml-16' />
            <img src={logo8} alt="" className='h-[3rem] w-[12rem] ml-16' />


           
        </div>
       
      </div>
    );
  }
  
  export default Sponsor;
  