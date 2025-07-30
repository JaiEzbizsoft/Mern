// import React, { useState } from 'react';
// import AdminSidebar from './adminsidebar';
// import Dashboard from './dashboard';

// const App = () => {
//  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   const sidebarWidth = isSidebarOpen ? 250 : 60;

//   const layoutStyle = {
//     display: 'flex',
//     width: '100%',
//     height: '100vh',
//     overflow: 'hidden',
//   };
//   return (
//  <div style={layoutStyle}>
//       <AdminSidebar isOpen={isSidebarOpen} toggle={() => setIsSidebarOpen(!isSidebarOpen)} />
//  <div
//         style={{
//           flex: 1,
//           overflowY: 'auto',
//    transition: 'margin-left 0.3s ease',
//           padding: '20px',
//         }}
//       >
//         <Dashboard />
//     </div>
//     </div>
//   );
// };

// export default App;


import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from './adminsidebar';

const Appadmin = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div style={{ display: 'flex', width: '100%', height: '100vh', overflow: 'hidden' }}>
      <AdminSidebar isOpen={isSidebarOpen} toggle={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          transition: 'margin-left 0.3s ease',
          padding: '20px',
        }}
      >
        <Outlet /> {/* All admin child routes including dashboard go here */}
      </div>
    </div>
  );
};

export default Appadmin;
