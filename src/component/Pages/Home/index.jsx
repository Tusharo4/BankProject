import { Card, Carousel, Space } from 'antd';
import React from 'react'
import banner from '../../../Asset/banner.jpg'
import banner3 from '../../../Asset/banner3.jpg'
import banner2 from '../../../Asset/banner2.jpg'
import banner4 from '../../../Asset/banner4.jpg'
import './index.css'
import ceo from '../../../Asset/ceo.png'
import Meta from 'antd/es/card/Meta';

const contentStyle = {
  height: '30em',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

function HomeComponent() {
  return (
    <div>
      {/* Banner */}
      <Carousel autoplay>
        <div>
          <img style={contentStyle} width="100%" src={banner} alt="Banner" ></img>
        </div>
        <div>
          <img style={contentStyle} width="100%" src={banner2} alt="Banner" ></img>
        </div>
        <div>
          <img style={contentStyle} width="100%" src={banner3} alt="Banner" ></img>
        </div>
        <div>
          <img style={contentStyle} width="100%" src={banner4} alt="Banner" ></img>
        </div>
      </Carousel>

      {/* VISION MISSION STATEMENT */}
      <Card className='Vision_Statement'>
        <h1>VISION MISSION STATEMENT</h1>
        <Space className='mid'>

          <img className='ceo' src={ceo} alt="CEO image" />
          <p className='vision'>
            "CSB endeavours to be a leading bank striving to excel in bringing products that satisfy the needs of targeted client segments, backed by excellent service
            through our branches and technology driven initiatives in a compliant and regulated manner. For our employees, we want to create a culture of pride
            driven by performance and productivity that should eventually result in sustainable growth in business and deliver superior returns to our Shareholders."
          </p>
        </Space>
      </Card>

      {/* Services */}

      <div className='service'>
        <Card className='service-img'
          hoverable
          cover={<img alt="example" src={banner} />}
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
        <Card className='service-img'
          hoverable
          cover={<img alt="example" src={banner2} />}
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
        <Card className='service-img'
          hoverable

          cover={<img alt="example" src={banner3} />}
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
        <Card className='service-img'
          hoverable
          cover={<img alt="example" src={banner4} />}
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </div>


    </div>

  )
}

export default HomeComponent