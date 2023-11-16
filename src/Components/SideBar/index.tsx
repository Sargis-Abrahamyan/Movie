import { FC } from 'react';

import { useSideBar } from './useSideBar';
import { menuItem } from './utils';
import * as Styled from './sidebar.styled';

const SideBar: FC = () => {
  const { openSideBar, setOpenSideBar, activeMenu, setActiveMenu } =
    useSideBar();

  return (
    <Styled.SideBar $openSideBar={openSideBar}>
      <Styled.SideBarContainer
        onMouseMove={() => setOpenSideBar(true)}
        onMouseOut={() => setOpenSideBar(false)}>
        <Styled.User $openSideBar={openSideBar}>
          <Styled.UserAvatar/>
          <Styled.UserName>Daniel</Styled.UserName>
        </Styled.User>
        <Styled.SearchBar>
          <Styled.SearchIcon />
          <Styled.SearchTitle $openSideBar={openSideBar}>
            Search
          </Styled.SearchTitle>
        </Styled.SearchBar>
        <Styled.Menu>
          {menuItem.map(({ id, path, title, icon }) => (
            <Styled.MenuItem
              key={id}
              onClick={() => setActiveMenu(title)}
              $openSideBar={openSideBar}
              className={title === activeMenu ? 'active' : ''}>
              <Styled.Links to={path}>
                <Styled.Icon src={icon} />
                <Styled.LinkTitle $openSideBar={openSideBar}>
                  {title}
                </Styled.LinkTitle>
              </Styled.Links>
            </Styled.MenuItem>
          ))}
        </Styled.Menu>
        <Styled.SideBarFooter $openSideBar={openSideBar}>
          <Styled.FooterItem>LANGUAGE</Styled.FooterItem>
          <Styled.FooterItem>GET HELP</Styled.FooterItem>
          <Styled.FooterItem>EXIT</Styled.FooterItem>
        </Styled.SideBarFooter>
      </Styled.SideBarContainer>
    </Styled.SideBar>
  );
};

export default SideBar;
