const Hero = () => {
  return (
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen">
      <div 
        className="absolute top-0 w-full h-full bg-center bg-no-repeat bg-cover"
        style={{ 
          backgroundImage: `url('/background.png')`,
        }}
      >
        <span className="w-full h-full absolute opacity-75 bg-black"></span>
      </div>
      <div className="container relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div className="pr-12">
              <h1 className="text-white font-semibold text-5xl">
                uxad87ted7tq
              </h1>
              <p className="mt-4 text-lg text-gray-200">
                jkaehricougxueywrguwguyrod3gr8uhgr8iuwguyexdst7uwegfocxg
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;