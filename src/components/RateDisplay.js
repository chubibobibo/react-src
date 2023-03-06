//child of RateDipslay
import React from 'react';


//bootstrap
import { MDBContainer, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import {
    MDBCard,
    MDBCardBody,

} from 'mdb-react-ui-kit';


const RateDisplay = ({ rates }) => {
    return (
        <div className="vh-100 d-inline mx-auto">
            <h1 className='mt-5'>RATES</h1>
            <MDBContainer>
                <MDBRow>
                    <MDBCol className="mt-3 d-flex flex-wrap">
                        {rates.map(allRates => (
                            <MDBCard className='mt-3 mx-auto shadow-5' style={{ width: 600 }} key={allRates.id}>
                                <MDBCardBody>
                                    <div key={allRates.id}>
                                        <div>
                                            <h5>{allRates.title}</h5>
                                        </div>
                                        <div>
                                            Prix: <span>{allRates.price}</span>
                                        </div>
                                        <div>
                                            <span>{allRates.description}</span>
                                        </div>
                                    </div>
                                </MDBCardBody>
                            </MDBCard>
                        ))
                        }
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div >
    );
}

export default RateDisplay;