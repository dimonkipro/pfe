import Footer from "../components/Footer";
import Hero from "../sections/Hero/Hero";
import ProductHero from "../sections/ProductHero/ProductHero";
import RatingSlide from "../sections/RatingSlide/RatingSlide";
import Slide from "../sections/Slide/Slide";
import pic from "../assets/image-7.png";
import pic1 from "../assets/image-8.png";
import pic2 from "../assets/image-4.png";


const Home = () => {
  
  return (
    <div style={{ overflow: "clip" }}>
      <Hero />

      <ProductHero
        from={[0.1, 0.5, 0.7, 1]}
        to={["0%", "-60%", "-30%", "0%"]}
        title={"Offers"}
        startScale={[0.2, 0.5, 0.7, 1]}
        endScale={[1, 1.8, 1, 0.7]}
        pic={pic}
      />
      <ProductHero
        from={[0.1, 0.5, 0.7, 1]}
        to={["0%", "-60%", "-30%", "0%"]}
        title={"jhon"}
        startScale={[0.2, 0.5, 0.7, 1]}
        endScale={[1, 1.8, 1, 0.7]}
        pic={pic}
      />

      <ProductHero
        from={[0.1, 0.5, 0.7, 1]}
        to={["0%", "100%", "50%", "0%"]}
        title={"Most Sales"}
        startScale={[0.2, 0.5, 0.7, 1]}
        endScale={[1, 1.8, 1, 0.7]}
        pic={pic1}
      />

      <div>
        <ProductHero
          from={[0, 1]}
          to={["0%", "0%"]}
          title={"New Arrival"}
          startScale={[0, 0.4, 1]}
          endScale={[1, 1.5, 0.7]}
          pic={pic2}
        />
      </div>

      <Slide endOp={0} />
      <RatingSlide />
      <Footer />
    </div>
  );
};

export default Home;
