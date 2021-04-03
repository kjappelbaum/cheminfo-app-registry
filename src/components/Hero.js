import * as React from 'react';

function Hero() {
  return (
    <div className="mt-5 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div>
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6x">
          <span className="block xl:inline">Cheminfo App Store</span>
        </h1>
        <p className="block  text-4xl tracking-tight text-indigo-600 lg:inline font-extrabold">
          Building blocks for cheminformatics and beyond
        </p>
      </div>
    </div>
  );
}

export default Hero;
