import locImg from "../../src/assets/location.png"
import '../../src/styles/locPage/LocationInfo.css'

// bootstrap imports
import { Container, Row, Col } from "react-bootstrap"
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css"
  integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7"
  crossorigin="anonymous"
/>

const DirRedirect = () => {
  window.location.href = "https://www.google.ca/maps/dir//Paan+Hut,+831+Bovaird+Dr+W,+Brampton,+ON+L6X+0G3/@43.6876689,-79.8082214,17z/data=!4m17!1m7!3m6!1s0x882b156ab2571289:0xa4be3cd9036c8d4a!2sPaan+Hut!8m2!3d43.6876689!4d-79.8056411!16s%2Fg%2F11h7tg8kmy!4m8!1m0!1m5!1m1!1s0x882b156ab2571289:0xa4be3cd9036c8d4a!2m2!1d-79.8056411!2d43.6876689!3e3?hl=en&entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D";
  return null;
};

function LocationInfo(){
    return(
        <Container>
                <Row>
                    <Col className="text-end">
                        <h1 className="headerLoc" >Our Location</h1>
                        <div className="textContentLoc">
                            <p> 📍 831 Bovaird Dr W, Brampton, ON L6X 0G3</p>
                            <p> 📞 +1(905)452-8888 </p>
                            <p> 🕐 Open 24/7 to serve your paan needs 😋</p>
                            <br></br>
                            <br></br>
 
                            <button onClick={DirRedirect} style={{marginBottom:"1em"}} className='btnMenuDesk btn btn-outline-danger'>Direction</button>

                            
                        </div>
                    </Col>
                    <Col >
                        <img id="firstImg" className="responsive" src={locImg}></img>
                    </Col>
                </Row>
            </Container>
    )
}

export default LocationInfo