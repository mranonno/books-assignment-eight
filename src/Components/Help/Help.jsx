const Help = () => {
  return (
    <div className="lg:mt-8 my-4 lg:mx-32 mx-4 font-sans">
      <div className="flex lg:flex-row flex-col-reverse bg-center bg-no-repeat items-center lg:h-full lg:w-full  justify-between lg:gap-20 bg-[url('https://i.ibb.co/wL3hcbP/help-Page-Background.png')]">
      <div className="lg:p-5 p-3 lg:w-2/3">
        <h3 className="lg:text-5xl text-[28px] font-bold text-slate-900">
          Help Desk and Support !!
        </h3>
        <p className="text-slate-900 opacity-80 mt-2 lg:text-lg">
          Please share your inquiry or problem with Us. We will <br className="hidden lg:block" />try to solve
          your issue and give you feedback.
        </p>
        <div className="flex flex-col lg:gap-7 gap-4 mt-4 lg:mt-7 lg:w-3/4">
          <input
            className="lg:py-4 py-2 bg-[#DAE0FE] focus:outline-[#7838B9] rounded-lg px-3"
            placeholder="Your name"
            type="text"
          />
          <input className="lg:py-4 py-2 rounded-lg focus:outline-[#7838B9] bg-[#DAE0FE] px-3 placeholder:font-medium" placeholder="Your email" type="email"/>
                  <textarea
                      className="px-3 focus:outline-[#7838B9] lg:py-4 py-2 bg-[#DAE0FE] rounded-lg"
                      placeholder="Message..."          
            cols="30"
            rows="6"
          ></textarea>
          <button className="bg-[#59C6D2] lg:px-7 px-4 py-2 lg:py-[14px] rounded-lg text-white duration-500 focus:outline-none transform text-lg font-medium lg:font-semibold border border-transparent teal-hover">Send Message</button>
        </div>
      </div>
      <div>
        <img
          className="lg:w-[700px]"
          src="https://i.ibb.co/VpJr3Yr/support.png"
          alt=""
        />
      </div>
    </div>
    </div>
    
  );
};

export default Help;
