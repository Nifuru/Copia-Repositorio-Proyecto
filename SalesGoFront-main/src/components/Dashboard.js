import React from 'react';
import { useParams } from 'react-router-dom';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';

const Dashboard = () => {
  const { productId } = useParams();

  return (
    <div>
      <Navbar >
      
      </Navbar>
    </div>
  );
};

export default Dashboard;




