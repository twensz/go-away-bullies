import React from 'react';
import AdminTemplate from './AdminTemplate';

function AdminDashboard() {
  function renderContent() {
    return <h2>Dashboard</h2>;
  }

  return <AdminTemplate content={renderContent()} />;
}

export default AdminDashboard;
