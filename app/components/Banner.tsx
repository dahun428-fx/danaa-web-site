
import React from "react";

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
      className="relative mt-20 flex w-full min-h-[220px] items-center justify-center overflow-hidden rounded-none bg-brand-navy bg-cover bg-center text-center text-white sm:mt-0 sm:min-h-[280px] md:min-h-[320px] lg:min-h-[420px]"
      style={bannerStyle}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,21,41,0.68)_0%,rgba(10,21,41,0.4)_65%,rgba(10,21,41,0.55)_100%)]" />
      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-20">
        <h1 className="text-[1.8rem] font-semibold sm:text-[2.2rem] md:text-[2.6rem]">
          {title}
        </h1>
        {description ? (
          <p className="mt-3 text-base leading-relaxed text-white/90 sm:px-4 sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
};

export default Banner;
