
import React from 'react';

interface BannerProps {
  title: string;
  description?: string;
  backgroundImage?: string;
}

const Banner: React.FC<BannerProps> = ({ title, description, backgroundImage }) => {
  const bannerStyle = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})` }
    : {};

  return (
    <section
      className="relative w-full min-h-[220px] h-[clamp(220px,38vw,420px)] bg-gray-900 bg-cover bg-center flex items-center justify-center text-white text-center mt-[80px] md:mt-[72px]"
      style={bannerStyle}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/68 via-gray-900/40 to-gray-900/55"></div>
      <div className="relative z-10">
        <h1 className="text-[clamp(1.8rem,4vw,2.6rem)] mb-2">
          {title}
        </h1>
        {description && <p className="text-[clamp(1rem,2vw,1.2rem)] px-4 leading-tight md:px-0 md:leading-normal">{description}</p>}
      </div>
    </section>
  );
};

export default Banner;
