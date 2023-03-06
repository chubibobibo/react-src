import React from 'react';
import classes from './Home.module.css'
import MyNavbar from '../MyNavbar'
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
    return (
        <div>
            <MyNavbar />s
            <main className={classes.mainpage}>
                <Row>
                    <Col>
                        <h1 className={classes.title}>Charles Cantin</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className={classes.sub}>photographe</p>
                    </Col>
                </Row>
            </main >
        </div >
    )
}

export default Home