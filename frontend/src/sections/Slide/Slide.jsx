import PropTypes from "prop-types";
import "./slide.css";
import image1 from "../../assets/image-1.png";
import image2 from "../../assets/image-2.png";
import image3 from "../../assets/image-3.png";
import image4 from "../../assets/image-4.png";
import image5 from "../../assets/image-5.png";
import image6 from "../../assets/image-6.png";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const Slide = () => {
  const products = [
    {
      poster: image1,
      name: "Airplane",
    },
    {
      poster: image2,
      name: "Family man",
    },
    {
      poster: image3,
      name: "Laboratory",
    },
    {
      poster: image4,
      name: "Napoleon",
    },
    {
      poster: image5,
      name: "Person in Darkness",
    },
    {
      poster: image6,
      name: "Scary Building",
    },
    { poster: image1, name: "Stars" },
  ];

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.4, 1]);

  const randomProductsSet1 = products
    .sort(() => Math.random() - 0.5)
    .concat(products.sort(() => Math.random() - 0.5))
    .concat(products.sort(() => Math.random() - 0.5));

  const randomProductsSet2 = products
    .sort(() => Math.random() - 0.5)
    .concat(products.sort(() => Math.random() - 0.5))
    .concat(products.sort(() => Math.random() - 0.5))
    .sort(() => Math.random() - 0.5);

  const SmallVideoCarousel = ({ products }) => {
    return (
      <div
        style={{
          overflow: "clip",
        }}
      >
        <div
          className="carousel-container"
          style={{
            display: "flex",
            gap: "0.5rem",
          }}
        >
          {products.map((product, index) => (
            <div
              key={`${product.name}-${index}`}
              className="image-container-carousel"
            >
              <img src={product.poster} alt={product.name} />
            </div>
          ))}
        </div>
      </div>
    );
  };
  SmallVideoCarousel.propTypes = {
    products: PropTypes.arrayOf(
      PropTypes.shape({
        poster: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  };
  return (
    <motion.div ref={targetRef} style={{ opacity }}>
      <SmallVideoCarousel products={randomProductsSet1} />
      <div style={{ "--duration": "70s", "--carousel-offset": "2rem" }}>
        <SmallVideoCarousel products={randomProductsSet2} />
      </div>
    </motion.div>
  );
};

export default Slide;
