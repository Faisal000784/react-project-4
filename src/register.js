
// import about from './images/About.jpg'
function Register() {
  return (
    <div className="h-[145vh] bg-gray-800 pt-[5.6rem]">
      <h1 className="flex justify-center text-7xl text-red-500 font-semibold">
        Register
      </h1>
      <div className='ml-[25rem] mt-20'>
     <input type="text" placeholder='Name*' className='bg-gray-900 w-[35rem] py-4 pl-4 rounded-md text-2xl mt-3' />
     <input type="text" placeholder='Email*' className='bg-gray-900 w-[35rem] py-4 pl-4 rounded-md text-2xl mt-4' />
     <input type="text" placeholder='Select Plan' className='bg-gray-900 w-[35rem] py-4 pl-4 rounded-md text-2xl mt-4' />
     <input type="text" placeholder='Company' className='bg-gray-900 w-[35rem] py-4 pl-4 rounded-md text-2xl mt-4' />
     <input type="text" placeholder='Job Title' className='bg-gray-900 w-[35rem] py-4 pl-4 rounded-md text-2xl mt-4' />

   




      </div>
      
     <button className="px-5 py-3 border-4 border-red-600 text-white w-[9rem] mt-16 ml-[37rem] text-xl font-medium">
            Submit
          </button>

          <div className='bg-black opacity-70 h-28 mt-20 flex justify-center items-center'>
            <p className='text-gray-500 text-xl '>©  <span className='text-pink-600'>Impreza Theme</span> by UpSolution</p>

          </div>


    </div>


  );
}

export default Register;
