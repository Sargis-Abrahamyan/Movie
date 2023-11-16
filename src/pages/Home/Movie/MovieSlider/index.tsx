import { FC } from 'react';

import { MovieSliderProps } from './types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './movieSlider.css';
import * as Styled from './movieSlider.styled';



const MovieSlider: FC<MovieSliderProps> = ({ item: { CoverImage } }) => {
  return (
    <Styled.SliderImage src={require('../../../../assets/' + CoverImage)} />
  );
};

export default MovieSlider;
