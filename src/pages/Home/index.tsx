import { FC } from 'react';

import Modal from '../../Ui/Modal';
import MovieSlider from './Movie/MovieSlider';
import useHome from './useHome';
import Slider from 'react-slick';
import { settings } from './utils';
import * as Styled from './home.styled';

const Home: FC = () => {
  const {
    Featured,
    movieId,
    movieItems,
    handelSelectedMovie,
    findMovieId,
    openModal,
    setOpenModal,
  } = useHome();

  return (
    <Styled.Home
      $CoverImage={movieId ? findMovieId?.CoverImage : Featured.CoverImage}>
      {openModal && (
        <Modal setOpenModal={setOpenModal}>
          <Styled.Video controls>
            <Styled.VideoSource
              src={movieId ? findMovieId?.VideoUrl : Featured.VideoUrl}
            />
          </Styled.Video>
        </Modal>
      )}
      <Styled.HomeContainer>
        <Styled.FeaturedVideo>
          <Styled.Head>
            <Styled.VideoCategory>
              {movieId ? findMovieId?.Category : Featured.Category}
            </Styled.VideoCategory>
            <Styled.VideoTitle />
          </Styled.Head>
          <Styled.VideoDate>
            <Styled.DateInfo>
              {movieId ? findMovieId?.ReleaseYear : Featured.ReleaseYear}
            </Styled.DateInfo>
            <Styled.DateInfo>
              {movieId ? findMovieId?.MpaRating : Featured.MpaRating}
            </Styled.DateInfo>
            <Styled.DateInfo>
              {movieId ? findMovieId?.Duration : Featured.Duration}
            </Styled.DateInfo>
          </Styled.VideoDate>
          <Styled.VideoDescription>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </Styled.VideoDescription>
          <Styled.VideoButton>
            <Styled.Button onClick={() => setOpenModal(!openModal)}>
              <Styled.ButtonIcon />
              Play
            </Styled.Button>
            <Styled.Button>More info</Styled.Button>
          </Styled.VideoButton>
        </Styled.FeaturedVideo>

        <Styled.SliderContainer>
          <Styled.SliderTitle>Trending Now</Styled.SliderTitle>
          <Slider {...settings}>
            {movieItems.length !== 0 &&
              movieItems.map((item) => (
                <Styled.SlideImageWrapper
                  key={item.Id}
                  onClick={(event) => handelSelectedMovie(item.Id, event)}>
                  <MovieSlider item={item} />
                </Styled.SlideImageWrapper>
              ))}
          </Slider>
        </Styled.SliderContainer>
      </Styled.HomeContainer>
    </Styled.Home>
  );
};

export default Home;
