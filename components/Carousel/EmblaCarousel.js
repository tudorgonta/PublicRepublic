import React, { useState, useEffect, useCallback, useRef } from "react";
import { PrevButton, NextButton } from "./EmblaCarouselButtons";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import imageUrlBuilder from '@sanity/image-url'
import client from '../../client'
import Hr from "../Hr"

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const EmblaCarousel = ({ category, options = { loop: true } }) => {
  const autoplay = useRef(
    Autoplay(
      { delay: 4995, stopOnInteraction: false },
      (emblaRoot) => emblaRoot.parentElement
    )
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplay.current]);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    autoplay.current.reset();
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    autoplay.current.reset();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

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
    <div className="embla hidden md:block border-[3px] border-solid border-gray-200">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
        {category.map(({title, catImage}, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__inner">
                <img
                  className="embla__slide__img"
                  src={urlFor(catImage).quality(40).url()}
                  alt={title}
                />
                <div className="flex h-full w-full align-middle aspect-square absolute top-0 left-0 fade-in-text">
                  <h3 className="text-white text-6xl m-auto capitalize font-Dancing">
                    {title}
                  </h3>
                </div>
                <a
                  href={`/category/${encodeURIComponent(title)}`}
                  className="flex h-full w-full align-middle aspect-square absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-zinc-500/[0.4] z-10"
                ></a>
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
