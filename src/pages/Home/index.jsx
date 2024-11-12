import Container from "../../component/ui/Container";

const Home = () => {
  return (
    <div className=" mx-auto">
      <header
        className="bg-gradient-to-br"
        style={{
          backgroundImage: 'linear-gradient(to bottom right, #FFF1BE 28%, #EE87CB 70%, #B060FF 100%)',
        }}
      >
        <Container>
          <div className="py-16 text-center md:text-left">
            <h3 className="text-5xl md:text-[100px] leading-124px] font-bold py-4">
              Empowering Tomorrow’s Leaders Today
            </h3>
            <p className="font-inter text-lg md:text-2xl w-full md:w-2/3 leading-relaxed md:leading-8 text-left mt-4">
              Join a community of changemakers, access exclusive grants, and lead impactful projects to shape a better future.
            </p>
            <button className="font-inter text-lg font-medium leading-[24.2px] text-white bg-black px-6 py-3 md:py-4 rounded-full mt-10">
              Become a Leader
            </button>
          </div>
        </Container>
      </header>
     
    </div>
  );
};

export default Home;

