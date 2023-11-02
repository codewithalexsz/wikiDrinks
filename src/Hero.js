function Hero() {
  return (
    <div className="hero h-[100vh] max-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="./img/hero-img-2.jpg"
          alt="hero-img"
          className="max-w-[50%] rounded-lg  shadow-2xl"
        />
        <div className="p-10">
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary mt-6">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
