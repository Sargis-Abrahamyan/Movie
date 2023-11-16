import home from '../../assets/icons/Home.png';
import tvShows from '../../assets/icons/TvShows.png';
import movies from '../../assets/icons/Movies.png';
import genres from '../../assets/icons/Genres.png';
import watchLater from '../../assets/icons/WatchLeter.png';
import { MenuItem } from './types';

export const menuItem: MenuItem = [
  {
    id: 1,
    title: 'Home',
    path: '/',
    icon: home,
  },
  {
    id: 2,
    title: 'Tv Shows',
    path: '/tv shows',
    icon: tvShows,
  },
  {
    id: 3,
    title: 'Movies',
    path: '/movies',
    icon: movies,
  },
  {
    id: 4,
    title: 'Genres',
    path: '/genres',
    icon: genres,
  },
  {
    id: 5,
    title: 'Watch Later',
    path: '/watch later',
    icon: watchLater,
  },
];
