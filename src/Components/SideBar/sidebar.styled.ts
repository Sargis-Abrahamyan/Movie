import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Soung from './img/Sung-Gi-Hoon.png';
import search from '../../assets/icons/ICON - Search.png';

export const SideBar = styled.div<{ $openSideBar: boolean }>`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: ${({ $openSideBar }) => ($openSideBar ? '100%' : '160px')};
  padding-left: 38px;
  min-height: 100vh;
  overflow: hidden;
  transition: width 0.8s ease-in-out;
  background: transparent
    linear-gradient(90deg, #040404 0%, #040404fa 21%, #04040400 100%) 0% 0%
    no-repeat padding-box;
`;

export const SideBarContainer = styled.div`
  max-width: 312px;
`;

export const User = styled.div<{ $openSideBar: boolean }>`
  display: flex;
  align-items: center;
  gap: 20px;
  visibility: ${({ $openSideBar }) => ($openSideBar ? 'visible' : 'hidden ')};
  opacity: ${({ $openSideBar }) => ($openSideBar ? '1' : '0')};
  transition: 0.8s ease-in-out;
  padding-top: 60px;
`;

export const UserAvatar = styled.img.attrs({ alt: 'avatar', src: Soung })`
  width: 82px;
  height: 82px;
  border-radius: 45px;
`;

export const UserName = styled.p`
  text-align: left;
  font: normal normal bold 32px/30px Tajawal;
  letter-spacing: -0.32px;
  color: rgba(241, 241, 241, 1);
  opacity: 1;
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  margin-top: 55px;
  margin-bottom: 35px;
  padding-left: 22px;
`;

export const SearchIcon = styled.img.attrs({ alt: 'search', src: search })`
  width: 30px;
  height: 26px;
  object-fit: cover;
`;

export const SearchTitle = styled.span<{ $openSideBar: boolean }>`
  text-align: left;
  font: normal normal normal 36px/43px Tajawal;
  letter-spacing: 0px;
  color: #f1f1f1;
  visibility: ${({ $openSideBar }) => ($openSideBar ? 'visible' : 'hidden')};
  opacity: ${({ $openSideBar }) => ($openSideBar ? '1' : '0')};
  transition: all 0.8s ease-in-out;
`;

export const Menu = styled.ul`
  margin-top: 37px;
  list-style: none;
`;

export const MenuItem = styled.li<{ $openSideBar: boolean }>`
  width: ${({ $openSideBar }) => (!$openSideBar ? '82px' : '312px')};
  height: 82px;
  border-radius: ${({ $openSideBar }) => ($openSideBar ? '12px' : '41px')};
  margin-top: 15px;
  white-space: nowrap;
  transition: all 0.8s ease-in-out;

  &.active {
    background: #3b486d 0% 0% no-repeat padding-box;
  }
  &:hover {
    background: #3b486d 0% 0% no-repeat padding-box;
    color: #000;
  }
`;

export const Links = styled(Link)`
  display: flex;
  align-items: center;
  gap: 52.08px;
  height: 100%;
  padding: 28px;
`;

export const LinkTitle = styled.span<{ $openSideBar: boolean }>`
  visibility: ${({ $openSideBar }) => ($openSideBar ? 'visible' : 'collapse')};
  opacity: ${({ $openSideBar }) => ($openSideBar ? '1' : '0')};
  transition: all 0.8s ease-in-out;
  text-align: left;
  color: #f1f1f1;
  font: normal normal bold 36px/43px Tajawal;
  letter-spacing: 0px;
`;

export const Icon = styled.img.attrs({ alt: 'icon' })`
  width: 26px;
  height: 29px;
  object-fit: contain;
`;

export const SideBarFooter = styled.div<{ $openSideBar: boolean }>`
  margin-left: 22px;
  visibility: ${({ $openSideBar }) => ($openSideBar ? 'visible' : 'collapse')};
  opacity: ${({ $openSideBar }) => ($openSideBar ? '1' : '0')};
  transition: all 0.8s ease-in-out;
  position: absolute;
  bottom: 60px;
`;

export const FooterItem = styled.p`
  color: #858688;
  margin-bottom: 10px;
  text-align: left;
  font: normal normal bold 24px/42px Tajawal;
  text-transform: uppercase;
  letter-spacing: 4.8px;
`;
