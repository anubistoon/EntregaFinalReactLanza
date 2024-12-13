import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <header style={headerStyle}>

        <h1>Mi Tienda</h1>
      </header>
      
      <main>

        <Outlet />
      </main>

      <footer>

        <p>&copy; 2024 Mi Tienda</p>
      </footer>
    </div>
  );
};


const headerStyle = {
  textAlign: 'center',
  padding: '20px', 
  backgroundColor: '#f4f4f4',
};

export default Layout;
