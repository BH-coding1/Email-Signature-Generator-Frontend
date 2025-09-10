const Hero = () => {
  return (
    <div className="hero bg-white min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="\public\Screenshot 2025-09-10 202203.png"
          className="w-xl  rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Professional email signature generator for you and your team</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn h-13 w-50 rounded-4xl bg-blue-600 text-lg ">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
