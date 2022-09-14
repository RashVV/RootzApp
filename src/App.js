import React, { useState, useRef } from 'react';
import { LandingNewRoot1 } from "./LandingNewRoot1";
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { Burger, Menu } from './components';
import FocusLock from 'react-focus-lock';

export default function App() {
  document.body.style.backgroundColor = "#e5e5e5";
  document.body.style.margin = "0";
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  return (
    <ThemeProvider theme={theme}>
    <>
      <div ref={node}>
          <FocusLock disabled={!open}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
          </FocusLock>
          </div>
        <LandingNewRoot1 />
        </>
    </ThemeProvider>

  );
}
