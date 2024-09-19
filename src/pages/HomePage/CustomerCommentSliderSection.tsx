import { useEffect, useRef } from "react";
import BlazeSlider from "blaze-slider";
import "blaze-slider/dist/blaze.css";

interface CustomerComment {
  date: string;
  title: string;
  description: string;
  author:string;
}

const comments: CustomerComment[] = [
  {
    date: "03/05/24",
    title: "Beğendim gayet güzeldi 1",
    description:
      "Ürün gayet güzel ama ekşiliği bi süreden sonra bayabiliyor insanı teşekkürler.",
      author:"Berk Ç.",
  },
  {
    date: "03/05/24",
    title: "Beğendim gayet güzeldi 2",
    description:
      "Ürün gayet güzel ama ekşiliği bi süreden sonra bayabiliyor insanı teşekkürler.",
      author:"Berk Ç.",
  },
  {
    date: "03/05/24",
    title: "Beğendim gayet güzeldi 3",
    description:
      "Ürün gayet güzel ama ekşiliği bi süreden sonra bayabiliyor insanı teşekkürler.",
      author:"Berk Ç.",
  },
  {
    date: "03/05/24",
    title: "Beğendim gayet güzeldi 4",
    description:
      "Ürün gayet güzel ama ekşiliği bi süreden sonra bayabiliyor insanı teşekkürler.",
      author:"Berk Ç.",
  },
  {
    date: "03/05/24",
    title: "Beğendim gayet güzeldi 5",
    description:
      "Ürün gayet güzel ama ekşiliği bi süreden sonra bayabiliyor insanı teşekkürler.",
      author:"Berk Ç.",
  },
];

function CustomerCommentSliderSection() {
  const sliderRef = useRef<BlazeSlider | null>(null);
  const sliderElRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      !sliderRef.current &&
      sliderElRef.current
    ) {
      const blazeSlider = new BlazeSlider(sliderElRef.current, {
        all: {
          enableAutoplay: true,
          autoplayInterval: 2000,
          transitionDuration: 300,
          slidesToShow: 2,
        },
        "(min-width: 768px)": {
          slidesToShow: 3, 
        },
        "(min-width: 1024px)": {
          slidesToShow: 4, 
        },
      });
      sliderRef.current = blazeSlider;
    }
  }, []);

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.prev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.next();
    }
  };

  return (
    <>
      <div className="container my-6">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="uppercase mt-2 font-bold leading-4 text-base">
            Gerçek Müşteri Yorumları
          </div>
          <div className="flex ">
            <div className="flex justify-end">
              <img src="src/assets/HomePage/image/star.svg" alt="" />
              <img src="src/assets/HomePage/image/star.svg" alt="" />
              <img src="src/assets/HomePage/image/star.svg" alt="" />
              <img src="src/assets/HomePage/image/star.svg" alt="" />
              <img src="src/assets/HomePage/image/star.svg" alt="" />
            </div>
            <span className="underline mt-2 mx-4 font-bold text-xs leading-4 text-[#6A6C77] cursor-pointer">
              198453 Yorum
            </span>
            <div className="flex mt-2 ms-10 md:ms-0">
              <img
                src="src/assets/HomePage/image/left-chevron.svg"
                alt=""
                className="w-[10px] h-[17px] me-3 cursor-pointer"
                onClick={handlePrev}
              />
              <img
                src="src/assets/HomePage/image/right-chevron.svg"
                alt=""
                className="w-[10px] h-[17px] cursor-pointer"
                onClick={handleNext}
              />
            </div>
          </div>
        </div>
        <div className="border 2px text-[#E3E3E3] mt-2"></div>

        <div className="blaze-slider mt-5 mb-24" ref={sliderElRef}>
          <div className="blaze-container">
            <div className="blaze-track-container">
              <div className="blaze-track">
                {comments.map((comment, index) => (
                  <div className="blaze-slide" key={index}>
                    <p className="font-normal italic text-xs leading-7 text-[#6A6C77]">
                      {comment.date}
                    </p>
                    <h2 className="font-bold text-lg leading-6 my-2">
                      {comment.title}
                    </h2>
                    <p className="font-normal text-xs italic leading-4 text-[#6A6C77] w-40 md:w-56">
                      {comment.description}
                    </p>
                    <p className="text-xs font-bold leading-4 mt-2 text-[#737373]">{comment.author}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomerCommentSliderSection;
