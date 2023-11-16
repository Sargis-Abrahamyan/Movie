import { useEffect, useState } from 'react';

import data from '../../data.json';
import { TengingNew } from './types';

const useHome = () => {
  const { Featured, TendingNow } = data;
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [movieId, setMovieId] = useState<string>(
    JSON.parse(`${sessionStorage.getItem('movieId')}`) || ''
  );
  const [movieItems, setMovieItems] = useState<TengingNew>(
    JSON.parse(`${sessionStorage.getItem('moveItems')}`) || TendingNow
  );
  const findMovieId = movieItems.find((item) => item.Id === movieId);

  useEffect(() => {
    sessionStorage.setItem('movieId', JSON.stringify(movieId));
  }, [movieId]);

  useEffect(() => {
    sessionStorage.setItem('moveItems', JSON.stringify(movieItems));
  }, [movieItems]);

  const handelSelectedMovie = (
    Id: string,
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    let selectedMovie: any;

    const seletecedMovie = movieItems.filter((movie) => {
      if (movie.Id === Id) {
        selectedMovie = [movie];
        return false;
      }
      return true;
    });

    if (event.detail === 2) {
      setTimeout(() => {
        setMovieItems([...selectedMovie, ...seletecedMovie]);
        setMovieId(Id);
      }, 2000);
    }
  };


  return {
    Featured,
    movieId,
    setMovieId,
    movieItems,
    setMovieItems,
    handelSelectedMovie,
    findMovieId,
    openModal,
    setOpenModal,
  };
};

export default useHome;
