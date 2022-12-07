import { Divider, Menu, Space, Button } from 'antd';
import { Header } from 'antd/es/layout/layout';
import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'
import logo from '../../../Asset/logo.png'

function HeaderComponent() {

  return (
    <Header>
      <Menu
        theme="light"
        mode="horizontal">

        <div className="col-md-4">
          <Link to={'/'}> <img src={logo} alt="logo" height="100em" width="40%" /> </Link>
        </div>

        <Space className='col-md-5' split={<Divider type='verticle' />}>
          <Link to={'/'} className="text-dark " >Home</Link>
          <Link to={'/about'} className="text-dark">About</Link>
        </Space>
        <div className="col-md-3 text-end">
          <Button type='text'> <Link to={'/login'}>Login</Link> </Button>
          <Button type='primary'><Link to={'/signup'} className="text-dark ">SignUp</Link></Button>
        </div>
      </Menu>
    </Header>
  );

}

export default HeaderComponent