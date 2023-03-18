import './App.css';
import React from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';

function App() {
  const [navOpen, setNavOpen] = React.useState(false);
  return (
    <React.Fragment key='anchor'>
      <button onClick={() => setNavOpen(!navOpen)}>NAV</button>
      <Drawer open={navOpen} onClose={() => setNavOpen(false)}>
        <List>
          <ListItem>
            <ListItemButton onClick={() => {}} />
            <ListItemText>
              <Link to='pictures'>Pictures</Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <Outlet />
    </React.Fragment>
  );
}

export default App;
