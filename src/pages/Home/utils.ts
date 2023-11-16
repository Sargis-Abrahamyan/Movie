export const settings = {
  centerPadding: '10px',
  slidesToShow: 8,
  slidesToScroll: 5,
  autoplay: true,
  speed: 2000,
  easing: ' easin',
  arrows: false,
  dots: false,
  responsive: [
    {
      breakpoint: 1395,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
