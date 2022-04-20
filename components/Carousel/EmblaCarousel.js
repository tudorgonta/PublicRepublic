import { useState, useEffect, useCallback } from "react"
import { PrevButton, NextButton } from "./EmblaCarouselButtons"
import useEmblaCarousel from "embla-carousel-react"
import client from '../../client'
import imageUrlBuilder from '@sanity/image-url'

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const EmblaCarousel = ({ category }) => {
  const [viewportRef, embla] = useEmblaCarousel({
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
    <div className="embla">
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">
          {category.map(({title, catImage}, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__inner">
                <img
                  className="embla__slide__img"
                  src={urlFor(catImage).url()}
                  alt={title}
                />
                <a
                  href="/"
                  className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-slate-800/75 z-10"
                >
                  <h3 className="text-white py-6 px-3 mx-auto text-xl">
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
  );
};

export default EmblaCarousel;
