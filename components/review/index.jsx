import { useEffect, useRef, useState } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

import { peoplesReview } from "@/utils/review-api";
import { renderStars } from "@/utils/render-star";

const Review = () => {
  const [product, setProduct] = useState(peoplesReview);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const ref = useRef();

  useEffect(() => {
    setIntervalId(
      setInterval(() => {
        if (currentIndex < product.length - 1) {
          setCurrentIndex(currentIndex + 1);
          handleNextCategory();
        } else {
          setCurrentIndex(0);
          ref.current.scrollLeft = 0;
        }
      }, 10000)
    );
    const handleStopScrolling = () => clearInterval(setIntervalId);

    document.addEventListener("mouseover", handleStopScrolling);
    document.addEventListener("focus", handleStopScrolling);
    document.addEventListener("touchstart", handleStopScrolling);

    return () => {
      clearInterval(setIntervalId);

      document.removeEventListener("mouseover", handleStopScrolling);
      document.removeEventListener("focus", handleStopScrolling);
      document.removeEventListener("touchstart", handleStopScrolling);
    };
  }, [currentIndex]);

  const handlePreviousCategory = (e) => {
    clearInterval(intervalId);
    setCurrentIndex(currentIndex - 1);
    let width = ref.current.clientWidth;
    ref.current.scrollLeft -= width;
  };

  const handleNextCategory = (e) => {
    clearInterval(intervalId);
    setCurrentIndex(currentIndex + 1);
    let width = 370;

    if (ref.current && width) {
      ref.current.scrollLeft += width;
      if (currentIndex === product.length - 1) {
        setCurrentIndex(0);
        ref.current.scrollLeft = 0;
      }
    }
  };

  return (
    <section
      className={`padding_inside relative top-52 lg:top-56 mb-[5rem] mt-[2rem] md:mt-[4rem] lg:mt-10`}
    >
      <h2 className="text-honey md:text-center text-center drop-shadow-md">
        Customer Reviews
        <hr class="w-[60px] my-[5px] border-2 mx-auto border-honey" />
        <hr class="w-[40px] my-[5px] border-1 mx-auto border-honey" />
      </h2>
      <div className="">
        <div
          className="grid grid-flow-col gap-3 auto-cols-auto scroll-smooth x-scrollable-content"
          ref={ref}
        >
          {peoplesReview.map((review, index) => {
            return (
              <div className="flex my-[2.5rem] justify-center items-center min-w-[360px] snap-center snap-mandatory">
                <div className="relative mr-[20px] ">
                  <div className="h-[60px] w-[60px]">
                    <img
                      src={review.image}
                      alt={review.productName}
                      className="bg-cover bg-center w-full h-full"
                    />
                  </div>
                </div>
                <div className="relative">
                  <p className=" mb-[5px]">{review.productName}</p>
                  <p className="flex text-honey  my-[5px]">
                    {renderStars(review.star)}
                  </p>
                  <div className="w-[90%]  my-[5px] bg-[#4070f4] relative p-5 rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-none">
                    <div className="overlay"></div>
                    <span className="text-white">{review.comment}</span>
                  </div>
                  <div className="absolute -bottom-[70px] right-0  my-[20px] flex flex-col justify-center items-center">
                    <p className="text-warmGray-600 italic font-semibold text-[.95rem]">
                      {review.customer}
                    </p>
                    <p className="text-violet-400 italic text-sm">
                      {review.createdBy}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Review;
