import React from "react";
import { ImagesList } from "../../assets/images/imageslist";
import "./styles.scss";

const AboutUsComponent = () => {
  return (
    <>
      <div className="container">
        <div className="our_story_div d-flex justify-content-center">
          <div className="os_heading ">
            <h1 className="font-weight-bold">Our Story</h1>
          </div>
        </div>

        <div className="my-2 text-center">
          <img src={ImagesList.logopng} alt="" className="about_us_logo" />
        </div>

        <div className="aboutus_description text-center my-5">
          <h4 className="about_us_desc_heading font-weight-bold">
            Welcome to AI Decoded
          </h4>

          <h6>The nexus of innovation and education in the digital age. </h6>

          <p>
            In a rapidly evolving technological landscape, AI Decoded stands as
            a beacon of transformative learning. We are not just a platform. we
            are a movement. A movement that believes in empowering individuals
            with the tools and knowledge they need to thrive in the digital
            realm. Our courses, designed by leading industry experts, offer an
            immersive experience, blending the intricacies of coding with the
            beauty of web design and the power of data analysis. But at AI
            Decoded, learning goes beyond the screen. Our community fosters
            collaboration, networking, and real-time interaction with top
            educators. As you engage with our content, you also engage with a
            network of like-minded enthusiasts, each on a unique journey to
            mastery.
          </p>

          <h6>
            Every lesson, every interaction, and every achievement badge at AI
            Decoded is a step towards the future. A future where our students
            don't just adapt to industry trends—they set them.
          </h6>

          <h6 className="mt-5">
            Join us in our mission to decode the future. Step into the AI
            Decoded Universe.
          </h6>
        </div>
      </div>
    </>
  );
};

export default AboutUsComponent;
