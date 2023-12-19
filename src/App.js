import React, { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  PhoneOutlined,
  BookOutlined,
} from '@ant-design/icons';
import './App.css';
import Learning from "./assets/learning.svg"
import Build from "./assets/build.svg";
import { Collapse } from 'antd';
import { motion } from "framer-motion"
// eslint-disable-next-line
const { Header, Content, Footer } = Layout;
const { Panel } = Collapse;

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const webDevelopment = ['React JS', 'HTML', 'CSS', 'Javascript'];
  const mobileDevelopment = ['React Native (Andoid)', 'React Native (IOS)'];
  const Database = ['Postgres', 'node js', 'Mango DB', 'Express js'];

  const handleMenuClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (sectionId === 'home') {
      window.scrollTo(0, 0)
    }
    else if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Layout className="layout">
      <div style={{ position: 'sticky', top: 0, backgroundColor: scrollY > 60 ? 'black' : 'transparent', zIndex: 1, transition: 'background-color 0.5s ease', overflowX: 'hidden' }}>
        <Header>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<HomeOutlined />} onClick={() => handleMenuClick('home')}>
              Home
            </Menu.Item>

            <Menu.Item key="4" icon={<BookOutlined />} onClick={() => handleMenuClick('courses')}>
              Courses
            </Menu.Item>

            <Menu.Item key="2" icon={<UserOutlined />} onClick={() => handleMenuClick('about')}>
              About Us
            </Menu.Item>

            <Menu.Item key="3" icon={<PhoneOutlined />} onClick={() => handleMenuClick('contact-us')}>
              Contact
            </Menu.Item>
          </Menu>
        </Header>
      </div>
      <Content>
        <div>
          <section
            style={{
              display: 'flex',
              minHeight: '110vh',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              backgroundColor: scrollY > 60 ? 'black' : 'white',
              transition: 'background-color 0.5s ease',
              overflowX: 'hidden'
            }}
            className='home'
            id='home'
          >
            <div>
              {scrollY > 60 ? (
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', overflowX: 'hidden' }}>
                  <p className='title fade-out' style={{ color: 'white' }}>We <span style={{ fontWeight: 600 }}>Build</span> </p>
                  <img src={Build} alt="Build" style={{ width: 200, height: 200, objectFit: 'contain' }} />
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', overflowX: 'hidden' }}>
                  <p className='title fade-in' style={{ opacity: scrollY > 60 ? 0 : 1, color: 'black' }}>We <span style={{ fontWeight: 600 }}>Learn</span> </p>
                  <img src={Learning} alt="Learning" style={{ width: 200, height: 200, objectFit: 'contain' }} />
                </div>
              )}
            </div>
          </section>

          <motion.section
            initial={{ x: -300 }}
            whileInView={{ x: 10 }}
            transition={{
              ease: 'easeIn',
              duration: 2,
              x: { duration: 1 }
            }}
            id='courses' style={{ overflowX: 'hidden', backgroundColor: 'white', minHeight: '100vh' }}>
            < motion.div
              className='learn-div' >
              <img className='Learn-image' alt='boy' src={require("./assets/boy.png")} />

            </motion.div>

            <motion.p

              style={{ marginTop: '10%' }} className='titleText'>THINGS YOU WILL LEARN</motion.p>

            <Collapse defaultActiveKey={['1', '2', '3']} style={{ display: 'flex', flexDirection: window.innerWidth < 600 ? 'column' : 'row', justifyContent: 'space-evenly', width: '100vw', overflowX: 'hidden', marginRight: 100 }}>
              <Panel header="Web Development" key="1">
                {webDevelopment.map((item, index) => (
                  <div key={index} style={{ flexDirection: 'row', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                    <div className='round'></div>
                    <p style={{ marginLeft: 10 }}>{item}</p>
                  </div>
                ))}
              </Panel>

              <Panel header="Mobile Development" key="2">
                {mobileDevelopment.map((item, index) => (
                  <div key={index} style={{ flexDirection: 'row', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                    <div className='round'></div>
                    <p style={{ marginLeft: 10 }}>{item}</p>
                  </div>
                ))}
              </Panel>

              <Panel style={{ minWidth: 100 }} header="Api & Database" key="3">
                {Database.map((item, index) => (
                  <div key={index} style={{ flexDirection: 'row', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                    <div className='round'></div>
                    <p style={{ marginLeft: 10 }}>{item}</p>
                  </div>
                ))}
              </Panel>
            </Collapse>

          </motion.section>

          <motion.section
            initial={{ scale: 0 }} // Initial scale of 0 (hidden)
            whileInView={{ scale: 1 }} // Zoom in to a scale of 1
            transition={{ duration: 0.5 }}
            id='at-the-end' style={{ overflowX: 'hidden', backgroundColor: 'white' }}>
            <div className='at-the-end'>
              {/* <p className='titleText'>At the End of the Course</p> */}
              {/* <motion.img
             
                style={{ position: 'relative', left: '30vw' }} src={require("./assets/sucess.png")} alt='sucess' /> */}
              <motion.p className='titleText'>Upon completing our courses, you will gain a comprehensive skill set that empowers you to:</motion.p >

              <ul>
                <li>Build and deploy your own websites</li>
                <li>Host and manage web applications</li>
                <li>Develop and deploy APIs</li>
                <li>Understand and utilize AWS services</li>
                <li>Work with databases for data storage</li>
                <li>Create a personalized web portfolio for your resume</li>
                <li>Engage in one-on-one mentorship sessions in Kannada</li>
                <li>Prepare for interviews through mock interview sessions</li>
              </ul>

              <p className='our-focus'>Our focus on one-on-one mentorship ensures personalized guidance, and our commitment to solving doubts in Kannada fosters a supportive learning environment. Whether you're aiming to launch a career in web development or enhance your existing skills, our courses provide the knowledge and hands-on experience you need.</p>
            </div>

          </motion.section>

        </div>
      </Content>
      <Footer id='contact-us' style={{ textAlign: 'center', backgroundColor: 'white' }}>For More Detail Contact : 9113996277</Footer>
    </Layout>
  );
}

export default App;
