import speaker from './images/1.jpg';
import speaker2 from './images/2.jpg';
import speaker3 from './images/3.jpg';
import speaker4 from './images/4.jpg';
import speaker5 from './images/5.jpg';
import speaker6 from './images/6.jpg';
import speaker7 from './images/7.jpg';
import speaker8 from './images/8.jpg';
import speaker9 from './images/9.jpg';






function Speaker() {

  return (
    <div className="h-[270vh] bg-gray-800 pt-[5rem]">
      <h1 className="flex justify-center text-7xl text-red-500 font-semibold">
        Speakers
      </h1>
      <div className='flex ml-20 mt-20'>
        <div className='flex flex-col '>
            <img src={speaker6} alt=""  className='h-[23rem] w-[23rem] border-[0.5rem] border-red-600'/>

            <h1 className='text-3xl text-white font-bold pt-4'>Martin White</h1>
            <h4 className='text-xl text-gray-500'>CEO at ACME</h4>

        </div>
        <div className='flex flex-col ml-10'>
            <img src={speaker9} alt=""  className='h-[23rem] w-[23rem] border-[0.5rem] border-red-600'/>

            <h1 className='text-3xl text-white font-bold pt-4'>Martha Cole</h1>
            <h4 className='text-xl text-gray-500'>PR Director at ACME</h4>

        </div>


        <div className='flex flex-col ml-10'>
            <img src={speaker8} alt=""  className='h-[23rem] w-[23rem] border-[0.5rem] border-red-600'/>

            <h1 className='text-3xl text-white font-bold pt-4'>Alice Coleman</h1>
            <h4 className='text-xl text-gray-500'>Blogging Guru</h4>

        </div>
      </div>

      <div className='flex ml-20 mt-20'>
        <div className='flex flex-col '>
            <img src={speaker7} alt=""  className='h-[23rem] w-[23rem] border-[0.5rem] border-red-600'/>

            <h1 className='text-3xl text-white font-bold pt-4'>Mike Strong</h1>
            <h4 className='text-xl text-gray-500'>Art Director at ACME</h4>

        </div>
        <div className='flex flex-col ml-10'>
            <img src={speaker5} alt=""  className='h-[23rem] w-[23rem] border-[0.5rem] border-red-600'/>

            <h1 className='text-3xl text-white font-bold pt-4'>Ashley Dawson</h1>
            <h4 className='text-xl text-gray-500'>HR Director at ACME</h4>

        </div>


        <div className='flex flex-col ml-10'>
            <img src={speaker4} alt=""  className='h-[23rem] w-[23rem] border-[0.5rem] border-red-600'/>

            <h1 className='text-3xl text-white font-bold pt-4'>Louis Mann</h1>
            <h4 className='text-xl text-gray-500'>CTO at ACME</h4>

        </div>
      </div>


      <div className='flex ml-20 mt-20'>
        <div className='flex flex-col '>
            <img src={speaker3} alt=""  className='h-[23rem] w-[23rem] border-[0.5rem] border-red-600'/>

            <h1 className='text-3xl text-white font-bold pt-4'>Alex Black</h1>
            <h4 className='text-xl text-gray-500'>Marketing Director at ACME</h4>

        </div>
        <div className='flex flex-col ml-10'>
            <img src={speaker2} alt=""  className='h-[23rem] w-[23rem] border-[0.5rem] border-red-600'/>

            <h1 className='text-3xl text-white font-bold pt-4'>Ellie Steel</h1>
            <h4 className='text-xl text-gray-500'>Social Media Expert</h4>

        </div>


        <div className='flex flex-col ml-10'>
            <img src={speaker} alt=""  className='h-[23rem] w-[23rem] border-[0.5rem] border-red-600'/>

            <h1 className='text-3xl text-white font-bold pt-4'>Melissa Smart</h1>
            <h4 className='text-xl text-gray-500'>Lead Designer at ACME</h4>

        </div>
      </div>
    </div>
  );
}

export default Speaker;
