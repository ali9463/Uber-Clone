import carImg from '/images/car-detail.jpg'; 

const Features = () => {
  return (
    <div className=" py-16 bg-gradient-to-tl to-black from-green-900">
      <div className="text-start mb-12 ml-12">
        <p className="text-6xl text-white font-medium">The</p>
        <h2 className="text-5xl font-extrabold text-green-500">Best Site to Go</h2>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center container mx-auto px-6">
        {/* Left Section - Image */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 relative">
          <img src={carImg} alt="Detailed car" className="rounded-lg shadow-xl" />
          <span role="img" aria-label="sparkles" className="absolute top-4 right-4 text-4xl">✨</span>
        </div>

        {/* Right Section - Features */}
        <div className="w-full lg:w-1/2 lg:pl-16">
         
            <div className="flex items-start mb-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2"><span className='text-green-500'>Multiple Ride Options</span> Book a car, auto, or motorcycle as per your need fast, flexible, and affordable.</h3>
                <h3 className="text-2xl font-bold text-white mb-2"><span className='text-green-500'>Verified Drivers</span> the trained and background checked drivers for your safety and peace of mind.</h3>
                <h3 className="text-2xl font-bold text-white mb-2"><span className='text-green-500'>Instant & Scheduled Booking</span> Whether it's now or later, book your ride in seconds anytime, anywhere.</h3>
                <h3 className="text-2xl font-bold text-white mb-2"><span className='text-green-500'>Clean & Maintained Vehicles </span>Every ride comes with a clean vehicle be it a car, auto, or bike for a comfortable experience.</h3>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Features;