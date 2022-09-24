import Event3 from "./images/event3.jpg";

function Whom() {
  return (
    <div className="h-[90vh]">
            <div className="h-[100vh] w-[100%] bg-contain"  style={{backgroundImage: `linear-gradient(to bottom, rgba(0.00, 0.02, 0.02, 0.8),rgba(0.00, 0.02, 0.01, 0.8)),url(${Event3})`}}></div>

      <h1 className="mt-[-31rem] text-white text-7xl font-medium ml-[30rem]">
        For Whom?
      </h1>

      <div className="flex ">
        <div className="flex flex-col  text-white ml-16 mt-[6rem]">
          <h1 className="text-4xl font-medium w-[13rem] ">
            For System Administrators
          </h1>
          <p className="w-[22rem] text-xl pt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            congue aliquam posuere.
          </p>
        </div>

        <div className="flex flex-col  text-white ml-20 mt-[6rem]">
          <h1 className="text-4xl font-medium w-[15rem] ">
          For Architects  Managers
          </h1>
          <p className="w-[22rem] text-xl pt-6">
          Praesent congue aliquam posuere. Nullam risus velit, porttitor in vehicula quis, sagittis eget nisl.


          </p>
        </div>

        <div className="flex flex-col  text-white ml-20 mt-[6rem]">
          <h1 className="text-3xl font-medium w-[13rem] ">
         Chief Technical Officers
          </h1>
          <p className="w-[22rem] text-xl pt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue aliquam posuere.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Whom;
