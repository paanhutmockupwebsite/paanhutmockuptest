// js conditoin statement that determiens if mobile or desktop... probably a easier way to do this ngl
const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      console.log("Mobile resolution");
    } else {
      console.log("Desktop resolution");
    }

// bootstrap imports
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css"
  integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7"
  crossorigin="anonymous"
/>
import 'bootstrap/dist/css/bootstrap.min.css';

// global css
import '../src/styles/App.css'

// component imports
import NavBar from '../components/NavBar.jsx';
import Head from '../components/homePage/Head.jsx'
import FirstPara from '../components/homePage/FirstPara.jsx'
import SecPara from '../components/homePage/SecPara.jsx'
import Thirdpara from '../components/homePage/ThirdPara.jsx';
import MenuComponent from '../components/homePage/MenuComponent.jsx';
import Footer from '../components/Footer.jsx';


function Home() {


  return (
    <div>

     <script src="http://localhost:8097"></script>

      <NavBar />
      <Head  />
      <br></br>

      <MenuComponent isMobile={isMobile} />
      <br></br>

      <FirstPara isMobile={isMobile} />
      <br></br>

      <SecPara isMobile={isMobile} />
      <br></br>

      <Thirdpara isMobile={isMobile} />
      <br></br>

      <Footer />
    </div> 
  )
}




export default Home
