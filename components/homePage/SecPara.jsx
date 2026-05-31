
import burger from '../../src/assets/burger.webp'
import '../../src/styles/secpara.css'
import '../../src/styles/App.css'

import { useEffect } from "react";
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SecPara({isMobile}){

  useEffect(() => {

    function show() {
      const reveal = document.querySelectorAll(".reveal");

      for (let i = 0; i < reveal.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveal[i].getBoundingClientRect().top;
        const e = 190;

        if (elementTop < windowHeight - e) {
          reveal[i].classList.add("active");
        } else {
          reveal[i].classList.remove("active");
        }
      }
    }

    window.addEventListener("scroll", show);
    return () => window.removeEventListener("scroll", show);
  }, [isMobile]);


    if (isMobile){
          return(
            <div>
              <Container>
                <Row>
                  <Col className='text-center'>
                    <img className='img1FP ' src={burger}></img>
                  </Col>
                </Row>
              </Container>
            <p className='mobileText'>Beatae inventore aut aspernatur facilis. Voluptatum ut ex sint nihil ex vero totam suscipit dignissimos. Aliquam facere quis quae veniam voluptates debitis. Cum voluptatibus itaque porro. Dolor qui aspernatur dolores. Cum quod et maxime.
    
            Aut assumenda amet deleniti nisi cumque voluptatibus optio eius. Quia et modi qui veniam ipsum accusantium ea dicta dignissimos. Aut in ut consequatur doloribus ut nisi omnis expedita sit.
            
            Et quia fuga et amet repellat iusto minus consequatur maiores. Modi sunt officia ea qui iure porro nesciunt. Et odit aut reiciendis. Voluptatum molestiae iure facere pariatur est aut ea.Enim distinctio et dolores. Iure est excepturi quia et et id harum officiis fuga. Eos non eligendi perferendis velit assumenda ut consequatur.
            
            Aut consequatur quasi culpa. Tempore et et aut culpa. At sint ipsum eaque et deleniti dolore non.
            
            Exercitationem sapiente dolore. Explicabo eos optio possimus adipisci consequatur. Fugit amet sed voluptas explicabo.</p>
    
        </div>
          )
        }
        else{
        return(
        <div>    
            {/* Run this if it is desktop */}
        <div className='popInBottom2 reveal' isMobile={false}>
            
            <div className='container '>
                <div className="row align-items-left">
    
                    
                    <div className='col text'>
                        <p>Beatae inventore aut aspernatur facilis. Voluptatum ut ex sint nihil ex vero totam suscipit dignissimos. Aliquam facere quis quae veniam voluptates debitis. Cum voluptatibus itaque porro. Dolor qui aspernatur dolores. Cum quod et maxime.
     
                        Aut assumenda amet deleniti nisi cumque voluptatibus optio eius. Quia et modi qui veniam ipsum accusantium ea dicta dignissimos. Aut in ut consequatur doloribus ut nisi omnis expedita sit.
                        
                        Et quia fuga et amet repellat iusto minus consequatur maiores. Modi sunt officia ea qui iure porro nesciunt. Et odit aut reiciendis. Voluptatum molestiae iure facere pariatur est aut ea.Enim distinctio et dolores. Iure est excepturi quia et et id harum officiis fuga. Eos non eligendi perferendis velit assumenda ut consequatur.
                        
                        Aut consequatur quasi culpa. Tempore et et aut culpa. At sint ipsum eaque et deleniti dolore non.
                        
                        Exercitationem sapiente dolore. Explicabo eos optio possimus adipisci consequatur. Fugit amet sed voluptas explicabo.</p>
                    </div>
                    <div className='col'>
                        <img className='img1FP' src={burger}></img>
                    </div>
                   
                </div>
            </div>
            
        </div>
        </div>
        )}
}

export default SecPara;