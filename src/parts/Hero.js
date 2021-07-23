const Hero = () => {
  return (
    <div className="bg-gray-900 -mt-16">
      <div className="grid grid-cols-2 gap-20 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen">
        <div className="pt-56">
          <div className="text-indigo-300 font-semibold text-sm tracking-widest">
            HELLO MY NAME IS
          </div>
          <div className="text-white font-semibold text-4xl mt-3 leading-11">
            Nashir Jamali & <br /> I'm a Software Engineer{" "}
          </div>
          <div className="w-20 mt-8 bg-white h-0.5"></div>
          <p className="text-base font-light text-gray-400 mt-8 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, omnis
            facere deleniti ipsum voluptatum sequi? Sint saepe ut quaerat! Hic
            consequuntur at architecto deleniti facilis expedita vero placeat
            itaque quisquam!
          </p>
          <button
            className="mt-16 bg-orange-500 hover:bg-gray-900 border-2
            focus:outline-none border-orange-500 transition duration-200
            shadow-inner text-white px-6 py-3"
          >
            Hire me
          </button>
        </div>
        <div className="relative">
          <img
            src="images/placeholder-header-main.png"
            className="w-full absolute bottom-0 left-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
