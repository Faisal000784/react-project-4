import Event from "./images/event8.jpg";
import Event2 from "./images/event2.jpg";
import Event3 from "./images/event3.jpg";
import Event4 from "./images/event4.jpg";

import Event6 from "./images/event6.jpg";
import Event7 from "./images/event7.jpg";
import Event8 from "./images/event1.jpg";
import Event9 from "./images/event9.jpg";
import Event10 from "./images/event10.jpg";

function Highlight() {
  return (
    <div className="h-[145vh] bg-gray-800">
      <h1 className="text-red-500 w-[65rem] text-6xl font-semibold text-center ml-[9.5rem] pt-28">
        forecast for the future of conferences and business events on marketing,
        entertainment, and more.
      </h1>

      <div className="flex">
        <div className="ml-20 text-white w-[30rem]">
          <h1 className="text-red-500 text-4xl mt-20 font-bold">
            Event Highlights
          </h1>

          <p className="w-[24rem] text-white pt-6 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            congue aliquam posuere. Nullam risus velit, porttitor in vehicula
            quis, sagittis eget nisl.
          </p>

          <p className="w-[24rem] text-white pt-6 text-xl">
            Nullam hendrerit, risus vel lacinia consequat, ligula neque
            fringilla metus, sit amet mattis augue magna vel mi. Nulla ultricies
            nunc non interdum dignissim. Morbi vel porttitor urna. Cras non
            volutpat enim, id molestie tellus.
          </p>
        </div>
        <img src={Event} alt="" className='h-[23rem] w-[45rem] mt-20' />
      </div>
      <div className='flex mt-1'>
        <img src={Event2} alt="" className= 'h-20 w-20 ml-[35rem]' />
        <img src={Event3} alt="" className= 'h-20 w-20 ' />
        <img src={Event4} alt="" className= 'h-20 w-20 ' />
        <img src={Event6} alt="" className= 'h-20 w-20 ' />
        <img src={Event7} alt="" className= 'h-20 w-20 ' />
        <img src={Event8} alt="" className= 'h-20 w-20 ' />
        <img src={Event9} alt="" className= 'h-20 w-20 ' />
        <img src={Event} alt="" className= 'h-20 w-20 ' />
        <img src={Event10} alt="" className= 'h-20 w-20 ' />



      </div>
    </div>
  );
}

export default Highlight;
