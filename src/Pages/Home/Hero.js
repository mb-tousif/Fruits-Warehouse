import React from 'react';
import { backgroundImg } from "../../Constants/ConstantDB";

const Hero = () => {
    return (
      <div
        class="hero h-96"
        style={{ backgroundImage: `url(${backgroundImg})`, backgroundColor: "green" }}
      >
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
            <p class="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button class="btn btn-info">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Hero;