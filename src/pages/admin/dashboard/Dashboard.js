import React from 'react';

import Template from '../../../components/admin/template/Template';

function Dashboard() {
  function renderContent() {
    return <h2>Dashboard</h2>;
  }

  return <Template content={renderContent()} />;
}

export default Dashboard;
