function Nav() {
  return (
    <nav className="nav w-full bg-gray-800 shadow-md h-16 flex justify-between px-11 items-center fixed z-50">
      <div className="flex  text-white text-xl font-normal font-sans">
        <h1 className='pl-1'>IMPREZA</h1>
        <h2 className='pl-10'>Conference</h2>
        <h2 className='pl-10'>Speakers</h2>
        <h2 className='pl-10'>Schedule</h2>
        <h2 className='pl-10'>Venue</h2>
       
      </div>
      <div>
          <button className="px-5 py-1 border-4 border-red-600 text-white">
            Register
          </button>
        </div>
    </nav>
  );
}

export default Nav;
