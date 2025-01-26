import "./ratingSlide.css";
import image1 from "../../assets/user1.png";
import image2 from "../../assets/user2.png";
import image3 from "../../assets/user3.png";
import user from "../../assets/user.png";
import React from "react";

const RatingSlide = () => {
  const ratings = [
    {
      poster: user,
      name: "Airplane",
      rating: 5,
    },
    {
      poster: image2,
      name: "Family man",
      rating: 4,
    },
    {
      poster: user,
      name: "Laboratory",
      rating: 3,
    },
    {
      poster: user,
      name: "Napoleon",
      rating: 5,
    },
    {
      poster: image1,
      name: "Person in Darkness",
      rating: 2,
    },
    {
      poster: user,
      name: "Scary Building",
      rating: 5,
    },

    {
      poster: image3,
      name: "Person in Darkness",
      rating: 3,
    },
    {
      poster: user,
      name: "Scary Building",
      rating: 1,
    },
  ];
  return (
    <div
      style={{
        "--duration": "40s",
        overflow: "clip",
      }}
    >
      <h1>Ratings</h1>
      <div
        className="carousel-container"
        style={{
          display: "flex",
          gap: "0.5rem",
        }}
      >
        {ratings.map((rating, index) => (
          <div key={`${rating.name}-${index}`} className="rating-container">
            <div className="ratingPdp">
              <img src={rating.poster} alt={rating.name} />
            </div>
            <div className="rating">
              {[5, 4, 3, 2, 1].map((star) => (
                <React.Fragment key={star}>
                  <input
                    value={star}
                    name={`rating-${index}`}
                    id={`star${star}-${index}`}
                    type="radio"
                    checked={rating.rating === star}
                    readOnly
                  />
                  <label htmlFor={`star${star}-${index}`}></label>
                </React.Fragment>
              ))}
            </div>
            <div className="comments">
              <h3>{rating.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default RatingSlide;
