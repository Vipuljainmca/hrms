import React from 'react';
import { Navbar, Nav, Button, Container, NavItem, Input } from 'reactstrap';
import { Menu } from 'react-feather';
import { useSelector, useDispatch } from 'react-redux';
import { UserButton } from '@clerk/clerk-react';

import { ToggleMobileSidebar } from '../../store/customizer/CustomizerSlice';

import HorizontalLogo from '../logo/HorizontalLogo';

const HorizontalHeader = () => {
  const isDarkMode = useSelector((state) => state.customizer.isDark);
  const topbarColor = useSelector((state) => state.customizer.topbarBg);
  const dispatch = useDispatch();

  return (
    <Navbar
      color={topbarColor}
      dark={!isDarkMode}
      light={isDarkMode}
      expand="lg"
      className="shadow HorizontalTopbar p-0"
    >
      <Container fluid className="d-flex align-items-center boxContainer">
        <div className="pe-4 py-3 ">
          <HorizontalLogo />
        </div>

        <Nav className="me-auto" navbar>
          <Button
            color={topbarColor}
            className="d-sm-block d-lg-none"
            onClick={() => dispatch(ToggleMobileSidebar())}
          >
            <Menu size={22} />
          </Button>
          <NavItem className="app-search d-none d-lg-flex">
            <Input
              id="txt-srch"
              name="search"
              placeholder="Search & Enter"
              className="rounded-pill"
              type="text"
            />
          </NavItem>
        </Nav>
      </Container>
      <div className="mx-4">
        <UserButton afterSignOutUrl="/" />
      </div>
    </Navbar>
  );
};

export default HorizontalHeader;
