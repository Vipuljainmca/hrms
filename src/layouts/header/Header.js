import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navbar, Nav, NavItem, Button, Input } from 'reactstrap';
import * as Icon from 'react-feather';
import { UserButton, useUser } from '@clerk/clerk-react';

import { ToggleMiniSidebar, ToggleMobileSidebar } from '../../store/customizer/CustomizerSlice';
import Logo from '../logo/Logo';

const Header = () => {
  const isDarkMode = useSelector((state) => state.customizer.isDark);
  const topbarColor = useSelector((state) => state.customizer.topbarBg);
  const dispatch = useDispatch();
  const { user } = useUser();
  return (
    <Navbar
      color={topbarColor}
      dark={!isDarkMode}
      light={isDarkMode}
      expand="lg"
      className="topbar"
    >
      {/******************************/}
      {/**********Toggle Buttons**********/}
      {/******************************/}
      <div className="d-flex align-items-center">
        <Button
          color={topbarColor}
          className="d-none d-lg-block"
          onClick={() => dispatch(ToggleMiniSidebar())}
        >
          <Icon.Menu size={22} />
        </Button>
        <div href="/" className="d-sm-flex d-lg-none">
          <Logo />
        </div>
        <Button
          color={topbarColor}
          className="d-sm-block d-lg-none"
          onClick={() => dispatch(ToggleMobileSidebar())}
        >
          <Icon.Menu size={22} />
        </Button>
      </div>

      {/******************************/}
      {/**********Left Nav Bar**********/}
      {/******************************/}

      <Nav className="me-auto d-none d-lg-flex" navbar>
        <NavItem className="app-search ps-3">
          <Input
            id="txt-srch"
            name="search"
            placeholder="Search & Enter"
            className="rounded-pill"
            type="text"
          />
        </NavItem>
      </Nav>

      <div className="d-flex align-items-center mx-2">
        <UserButton afterSignOutUrl="/" />
      </div>
      <div className="d-flex text-secondary mx-2">{user.username}</div>
    </Navbar>
  );
};

export default Header;
