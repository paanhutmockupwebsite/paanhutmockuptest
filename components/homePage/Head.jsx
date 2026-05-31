// css import
import '../../src/styles/App.css'
import '../../src/styles/head.css';

//bootstrap imports
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


//asset import
import paanHut from '../../src/assets/paanHutBackground.png'

function Head(){


        

            return(

                <div >
                    <img src={paanHut} className='crop'></img>
                </div>

                )
        }
    



export default Head;