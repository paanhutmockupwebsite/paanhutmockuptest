import { Row, Container, Col } from "react-bootstrap";
import NavBar from "../components/NavBar";
import { useEffect,useState } from "react";
import axios from 'axios';

import '../src/styles/menuPage/page.css'
import Footer from "../components/Footer.jsx";

function Menu() {
    const [json, setJson] = useState([]);

    async function fetchJson() {
    try {
        let url = 'https://raw.githubusercontent.com/subvertReal/dataRepoForMockups/refs/heads/main/paanhut/menu.json';

        const response = await axios.get(url);
        const res = response.data;

        let arr = [];

        for (const category in res) {
            for (const item in res[category]) {

                arr.push({
                    category: category,
                    name: item,
                    price: res[category][item]
                });

            }
        }
        console.log('test');
        console.log(arr);

        setJson(arr);

    } catch (err) {
        console.error(err);
    }
}
    useEffect(()=>{
        fetchJson();

        

    }, [])
    

 const groupedItems = json.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
        }

        acc[item.category].push(item);

        return acc;
    }, {});

    return (
        <div>
            <NavBar />



            <Container>
                {Object.keys(groupedItems).map((category, index) => (
                    <div key={index}>
                        <h2 className="text-center header">
                            {category}
                        </h2>

                       <Row className="text-center justify-content-center">
                            {groupedItems[category].map((item, i) => (

                                <Col xs={12} md={6} lg={4} className="menuItem" key={i}>
                                    <Row className="align-items-center">

                                        <Col xs={6}>
                                            <h5>{item.name}</h5>
                                            <p>${item.price}</p>
                                        </Col>

                                        <Col xs={6}>
                                            <img
                                                className="img-fluid img"
                                                src={`../src/assets/menuItems/${item.name}.png`}
                                                alt=''
                                            />
                                        </Col>

                                    </Row>
                                </Col>

                            ))}
                        </Row>
                    </div>
                ))}
            </Container>

            <Footer />
        </div>
    );
}
export default Menu;