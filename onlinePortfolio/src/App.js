import './App.css';
import { Layout, Header, Navigation, Content, Drawer } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header className="header-color" title="My portfolio" scroll>
          <Navigation>
            <Link to="/resume">Resume</Link>
            {/* <Link to="/aboutMe">About me</Link> */}
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Header>
        <Drawer title="My portfolio">
          <Navigation>
            <Link to="/resume">Resume</Link>
            {/* <Link to="/aboutMe">About me</Link> */}
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
