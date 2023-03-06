import React from 'react';
import classess from './GalleryDisplay.module.css'

//bootstrap

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import {
    MDBCard,
    MDBCardBody,
    MDBCardText,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit';


const GalleryDisplay = (props) => {
    console.log(props)
    return (
        <div className="vh-100 d-inline mx-auto">
            <h1 className='mt-5'>GALLERY</h1>
            <Container>
                {props.images.map(allData =>
                    <div key={allData.id}>
                        <MDBCard style={{ width: 'auto' }} className='mb-4'>
                            <Row>
                                <Col className='col-md-4 col-sm-4 col-sm-12'>
                                    <MDBCardImage src={allData.image} position='top' alt='...' className='m-2 rounded' />
                                </Col>

                                <Col className='col-md-8 col-sm-8'>
                                    <MDBCardBody>
                                        {/* <MDBCardTitle> */}
                                        <h2>
                                            {allData.category.toUpperCase()}
                                        </h2>
                                        {/* </MDBCardTitle> */}
                                        <MDBCardText>
                                            Some quick example text to build on the card title and make up the bulk of the card's content.
                                        </MDBCardText>

                                        <MDBBtn className={classess.bootBtn}>
                                            <Link to={`/gallery/${allData.category}`} className={classess.btnLink}>More Photos
                                            </Link>
                                        </MDBBtn>

                                    </MDBCardBody>
                                </Col>

                            </Row>
                        </MDBCard>
                    </div>
                )
                }
            </Container >
        </div >
    );
}

export default GalleryDisplay;