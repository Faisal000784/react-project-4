import header from "./images/header1.jpeg";

function Header() {
  return (
    <div className="">
      <div>
        <img src={header} alt="" className="h-[100vh] w-full" />
        <div className="heading mt-[-30rem] text-white flex flex-col h-[30rem] w-[65rem] ml-[10rem]">
          <h2 className="text-3xl justify-center flex w-full">OCTOBER 11-13, 2019</h2>
          <h1 className="text-6xl font-black w-[67rem] text-center leading-[4.7rem]">Impreza Conference for Business and Marketing</h1>
         
          <button className="px-5 py-3 border-4 border-red-600 text-white w-[9rem] mt-16 ml-[27rem] text-xl font-medium">
            Register
          </button>
        </div>
        <p></p>
      </div>
    </div>
  );
}

export default Header;
