import React from 'react';
import { Progress } from '@/components/ui/progress';

interface RatingData {
  value: number;
}

interface RatingBarProps {
  stars: number;
  value: number;
  maxValue: number;
}

interface RatingBarsProps {
  ratings: RatingData[];
}

const RatingBar: React.FC<RatingBarProps> = ({ stars, value, maxValue }) => {
  const percentage = (maxValue > 0) ? (value / maxValue) * 100 : 0;

  return (
    <div className="flex items-center">
      <div className="flex justify-end w-[80px] h-[18px]">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="w-[16px] h-[16px]">
            {index < stars && (
              <img 
                src="/src/assets/HomePage/image/star.svg" 
                alt="star" 
                className="w-full h-full"
              />
            )}
          </div>
        ))}
      </div>
      <div className="mx-4 flex-grow">
        <Progress value={percentage} className="h-2" />
      </div>
      <span className="font-normal text-xs text-[#1F23AA] w-[50px] text-right">({value})</span>
    </div>
  );
};

const RatingBars: React.FC<RatingBarsProps> = ({ ratings }) => {
  const sortedRatings = [...ratings].sort((a, b) => b.value - a.value);
  
  const maxValue = sortedRatings.length > 0 ? sortedRatings[0].value : 1;

  return (
    <div className="space-y-2">
      {sortedRatings.map((rating, index) => (
        <RatingBar
          key={index}
          stars={5 - index}
          value={rating.value}
          maxValue={maxValue}
        />
      ))}
    </div>
  );
};

export default RatingBars;
