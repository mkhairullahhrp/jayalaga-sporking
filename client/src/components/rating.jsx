// components/Rating.js
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';

const RatingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Star = styled(FaStar)`
  cursor: pointer;
  transition: transform 0.2s;
  color: ${(props) => (props.active || props.hover ? 'orange' : 'gray')};
  transform: ${(props) => (props.active || props.hover ? 'scale(1.2)' : 'scale(1)')};
`;

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);

  return (
    <RatingContainer>
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <Star
            key={index}
            size={30}
            active={ratingValue <= rating}
            hover={ratingValue <= hover}
            onClick={() => setRating(ratingValue)}
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(null)}
          />
        );
      })}
    </RatingContainer>
  );
};

export default Rating;
