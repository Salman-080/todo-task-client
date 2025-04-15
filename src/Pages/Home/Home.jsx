import "./Home.css";

const Home = () => {
  return (
    <div className=" max-w-screen-2xl mx-auto mt-20">
      <div className="flex px-16">
        <div className="space-y-8">
          <h1 className=" text-2xl md:text-3xl lg:text-5xl font-bold">
            Take Control of <br /> Your Tasks
          </h1>
          <p className="text-lg font-semibold">
            Fast, intuitive, and collaborative—organize your tasks, track
            progress, and get more done every day
          </p>
          <div className="flex relative gap-2 ">
            <input
              className="pl-2 py-2 border border-black rounded-lg w-80 pr-[40px]"
              type="text"
              placeholder="Enter your email"
            />
            <button className="bg-green-500 px-3 py-[9px] rounded-r-lg rounded-l-none  whitespace-nowrap absolute right-[30%] text-white font-semibold">
              Subscribe
            </button>
          </div>
          <div className="space-y-8">
            <div className="flex gap-16">
              <div className="text-center">
                <p className="text-5xl font-semibold">75.2%</p>

                <p className="font-semibold">Average daily user</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-semibold">20K</p>

                <p>Average daily user</p>
              </div>
            </div>
            <div className=" flex space-x-4">
              <div className="rating rating-xl space-x-1">
                <input
                  type="radio"
                  name="rating-9"
                  className="mask mask-star-2 bg-orange-400"
                  aria-label="1 star"
                />
                <input
                  type="radio"
                  name="rating-9"
                  className="mask mask-star-2 bg-orange-400"
                  aria-label="2 star"
                  
                />
                <input
                  type="radio"
                  name="rating-9"
                  className="mask mask-star-2 bg-orange-400"
                  aria-label="3 star"
                />
                <input
                  type="radio"
                  name="rating-9"
                  className="mask mask-star-2 bg-orange-400"
                  aria-label="4 star"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-9"
                  className="mask mask-star-2 bg-orange-400"
                  aria-label="5 star"
                /> 
                
              </div>
              <p>4.5</p>
                <p className="text-gray-500">Average User Rating</p>
            </div>
          </div>
        </div>
       
          <div className="w-[80%]  border-green-800 flex">
            <img className="w-full mx-auto" src="/todoBanner.jpg" alt="" />
       
        </div>
      </div>

      
    </div>
  );
};

export default Home;
