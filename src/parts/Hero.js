const Hero = () => {
  return (
    <div className="bg-gray-900 h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40">
        <div className="w-1/2 sm:w-full">
          <div className="text-indigo-300 font-semibold text-sm tracking-widest">
            HELLO MY NAME IS
          </div>
          <div className="text-white font-semibold text-3xl mt-3 leading-11">
            Nashir Jamali & <br /> I'm a Software Engineer{" "}
          </div>
          <div className="w-20 mt-8 bg-white h-0.5"></div>
          <p className="text-sm font-light text-gray-400 mt-8 leading-6 w-1/3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, omnis
            facere deleniti ipsum voluptatum sequi? Sint saepe ut quaerat! Hic
            consequuntur at architecto deleniti facilis expedita vero placeat
            itaque quisquam!
          </p>
          <button
            className="mt-16 bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none
          shadow-inner text-white px-6 py-3"
          >
            Hire me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
