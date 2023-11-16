import styled from 'styled-components';
import title from '../../assets/FeaturedTitleImage.png';
import play from '../../assets/icons/play.svg';

export const Home = styled.div<{ $CoverImage: any }>`
  width: 100%;
  height: 100vh;
  background-image: ${({ $CoverImage }) =>
    `url(${require('../../assets/' + $CoverImage)})`};
  background-position: center center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding-left: 160px;
`;

export const HomeContainer = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
`;

export const FeaturedVideo = styled.div`
  width: 100%;
  max-width: 775px;
  padding-top: 180px;
`;

export const Head = styled.div`
  width: 100%;
  margin-bottom: 23px;
`;

export const VideoCategory = styled.h2`
  text-align: left;
  font: normal normal bold 24px/42px Tajawal;
  letter-spacing: 4.8px;
  color: #858688;
  text-transform: uppercase;
  opacity: 1;
`;

export const VideoTitle = styled.img.attrs({ alt: 'title', src: title })`
  width: 100%;
  max-width: 683px;
  height: auto;
  object-fit: cover;
`;

export const VideoDate = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 18px;
`;

export const DateInfo = styled.p`
  text-align: left;
  font: normal normal normal 30px/42px Tajawal;
  letter-spacing: 0px;
  color: #f1f1f1;
`;

export const VideoDescription = styled.p`
  text-align: left;
  font: normal normal normal 32px/40px Tajawal;
  letter-spacing: 0px;
  color: #f1f1f1;
  margin-bottom: 45px;
`;

export const VideoButton = styled.div`
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  width: 240px;
  height: 72px;
  text-align: center;
  font: normal normal bold 32px/30px Tajawal;
  letter-spacing: -0.32px;
  color: #0c0c0c;
  background: #f1f1f1 0% 0% no-repeat padding-box;
  border-radius: 40px;
  border: 0;
  cursor: pointer;
  transition: all 0.4s ease-in-out;

  &:last-child {
    background: transparent linear-gradient(128deg, #2727f5 0%, #001671 100%) 0%
      0% no-repeat padding-box;
    color: #f1f1f1;
  }

  &:hover {
    box-shadow: 0 40px 12px rgba(70, 150, 240, 0.25) inset,
      0 -40px 12px rgba(70, 150, 240, 0.25) inset;
    border: 1px solid rgba(255, 255, 255, 1);
    color: rgba(255, 255, 255, 1);
  }
`;

export const ButtonIcon = styled.img.attrs({ alt: 'icon', src: play })`
  width: 16px;
  height: 19px;
  object-fit: cover;
  margin-right: 12.08px;
`;

export const Video = styled.video`
  width: 100%;
`;

export const VideoSource = styled.source``;

export const SliderContainer = styled.div`
  width: 100%;
  transition: all 0.3 ease-in;
`;

export const SliderTitle = styled.h2`
  text-align: left;
  font: normal bold 32px/38px Tajawal;
  letter-spacing: 0px;
  color: #f1f1f1;
  margin-bottom: 35px;
`;

export const SlideImageWrapper = styled.div`
  cursor: pointer;
  transform: scaleY(1);
  transition: transform 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
`;
