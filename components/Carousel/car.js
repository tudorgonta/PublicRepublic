import { useState, useEffect, useCallback } from "react"
import { PrevButton, NextButton } from "./EmblaCarouselButtons"
import useEmblaCarousel from "embla-carousel-react"
import client from '../../client'
import imageUrlBuilder from '@sanity/image-url'
import Hr from "../Hr"

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const EmblaCarousel = ({ category }) => {
  const [viewportRef, embla] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 3,
    skipSnaps: false
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <>
    <div className="MOBILE flex flex-col items-center md:hidden w-5/6 m-auto text-center">
      {category.map(({title, catImage}, index) => (
        <div key={index}>
          <Hr />
          <h3 className="p-3 font-Bulkey">{title}</h3>
          <div className="relative">
            <a href={`/category/${encodeURIComponent(title)}`} className="text-white absolute inset-0 z-10 bg-zinc-500/[0.6] text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
              <h1 className="tracking-wider uppercase font-Roboto" >{title}</h1>
            </a>
            <div className="relative">
              <div className="h-auto flex flex-col content-center">
                <img src={urlFor(catImage).quality(40).url()} className="mx-auto " alt="" />
              </div>
            </div>
        </div>
        </div>
      ))}
    </div>

    <div className="DESKTOP embla hidden md:block border-[3px] border-solid border-gray-200">
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">
          {category.map(({title, catImage}, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__inner">
                <img
                  className="embla__slide__img"
                  src={urlFor(catImage).quality(40).url()}
                  alt={title}
                />
                <a
                  href={`/category/${encodeURIComponent(title)}`}
                  className="flex h-full w-full align-middle aspect-square absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-zinc-500/[0.4] z-10"
                >
                  <h3 className="text-white text-xl m-auto uppercase font-Roboto opacity-100">
                    {title}
                  </h3>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
    </>
  );
};

export default EmblaCarousel;
