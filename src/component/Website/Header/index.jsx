import { Button, Divider, Space } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

function HeaderComponent() {
  

  return (
   <header className='d-flex align-item-center justify-content-center-md-between-md py-2 mx-2'>

    <div className="col-md-4">
        <Link to={'/'} className="text-dark fw-light fs-5" >CSB Bank Limited</Link>
    </div>

    <Space className='col-md-5' split={<Divider type='verticle'/>}>
    <Link to={'/'} className="text-dark " >Home</Link>
    <Link to={'/about'} className="text-dark">About</Link>
    </Space>

    <div className="col-md-3 text-end">
        <Button type='text'>Login</Button>
        <Button type='primary'>Signup</Button>
    </div>

   </header>
  );

}

export default HeaderComponent