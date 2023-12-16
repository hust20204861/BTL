import React, { Fragment, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'

import MetaData from '../../components/layout/MetaData'
import CheckoutSteps from './CheckoutSteps'
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBInput,
    MDBRow,
  } from "mdb-react-ui-kit";
  import 'mdb-react-ui-kit/dist/css/mdb.min.css';
  import "@fortawesome/fontawesome-free/css/all.min.css";

import { useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js'

import axios from 'axios'

const options = {
    style: {
        base: {
            fontSize: '16px'
        },
        invalid: {
            color: '#9e2146'
        }
    }
}

const Payment = () => {

    const alert = useAlert();
    const stripe = useStripe();
    const elements = useElements();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user } = useSelector(state => state.auth)
    const { cartItems, shippingInfo } = useSelector(state => state.cart);
    // const { error } = useSelector(state => state.newOrder)

    useEffect(() => {

        // if (error) {
        //     alert.error(error)
        //     dispatch(clearErrors())
        // }

    }, [dispatch, alert])

    const order = {
        orderItems: cartItems,
        shippingInfo
    }

    const orderInfo = JSON.parse(sessionStorage.getItem('orderInfo'));
    if (orderInfo) {
        order.itemsPrice = orderInfo.itemsPrice
        order.taxPrice = orderInfo.taxPrice
        order.totalPrice = orderInfo.totalPrice
        order.shippingPrice = orderInfo.shippingPrice
    }

    const paymentData = {
        amount: Math.round(orderInfo.totalPrice * 100)
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        document.querySelector('#pay_btn').disabled = true;

        let res;
        try {

            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            res = await axios.post('/api/v1/payment/process', paymentData, config)

            const clientSecret = res.data.client_secret;

            console.log(clientSecret);

            if (!stripe || !elements) {
                return;
            }

            const result = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardNumberElement),
                    billing_details: {
                        name: user.name,
                        email: user.email
                    }
                }
            });

            if (result.error) {
                alert.error(result.error.message);
                document.querySelector('#pay_btn').disabled = false;
            } else {

                // The payment is processed or not
                // if (result.paymentIntent.status === 'succeeded') {

                //     order.paymentInfo = {
                //         id: result.paymentIntent.id,
                //         status: result.paymentIntent.status
                //     }

                //     dispatch(createOrder(order))

                //     navigate('/success')
                // } else {
                //     alert.error('There is some issue while payment processing')
                // }
            }


        } catch (error) {
            document.querySelector('#pay_btn').disabled = false;
            alert.error(error.response.data.message)
        }
    }

    return (
        <Fragment>
            <MetaData title={'Payment'} />

            <CheckoutSteps shipping confirmOrder payment />

            <MDBContainer
      className="py-5"
      fluid
      style={{
        backgroundImage:
          "url(https://mdbcdn.b-cdn.net/img/Photos/Others/background3.webp)",
          height:"max-content"
      }}
    >
      <MDBRow className=" d-flex justify-content-center text-align"
      style={{marginTop: "60px",
      height: "800px"}}>
        <MDBCol md="10" lg="8" xl="5">
          <MDBCard className="rounded-3">
            <MDBCardBody className="p-4" onSubmit={submitHandler}>
              <div className="text-center mb-4">
                <h3>Payment</h3>
                
              </div>
              <p className="fw-bold mb-4 pb-2">Saved cards:</p>
              <div className="d-flex flex-row align-items-center mb-4 pb-1">
                <img
                  className="img-fluid"
                  src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
                />
                <div className="flex-fill mx-3">
                  <div className="form-outline">
                    <MDBInput
                      label="Card Number"
                      id="form1"
                      type="text"
                      size="lg"
                      value="**** **** **** 8188"
                    />
                  </div>
                </div>
                <a href="#!">Remove card</a>
              </div>
              <div className="d-flex flex-row align-items-center mb-4 pb-1">
                <img
                  className="img-fluid"
                  src="https://img.icons8.com/color/48/000000/visa.png"
                />
                <div className="flex-fill mx-3">
                  <div className="form-outline">
                    <MDBInput
                      label="Card Number"
                      id="form2"
                      type="text"
                      size="lg"
                      value="**** **** **** 4296"
                    />
                  </div>
                </div>
                <a href="#!">Remove card</a>
              </div>
              <p className="fw-bold mb-4">Add new card:</p>
              <MDBInput
                label="Cardholder's Name"
                id="form3"
                type="text"
                size="lg"
                value="Anna Doe"
              />
              <MDBRow className="my-4">
                <MDBCol size="7">
                  <MDBInput
                    label="Card Number"
                    id="card_num_field"
                    type="text"
                    size="lg"
                    value="1234 5678 1234 5678"
                    className="form-control"
                    options={options}
                  />
                  </MDBCol>
                <MDBCol size="3">
                  <MDBInput
                    label="Expire"
                    id="card_exp_field"
                    type="password"
                    size="lg"
                    placeholder="MM/YYYY"
                    className="form-control"
                    options={options}
                  />
                </MDBCol>
                <MDBCol size="2">
                  <MDBInput
                    label="CVV"
                    id="card_cvc_field"
                    type="password"
                    size="lg"
                    placeholder="CVV"
                    className="form-control"
                    options={options}
                  />
                </MDBCol>
              </MDBRow>
              <MDBBtn color="success" size="lg" block>
                <h3>PAY</h3>
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
        </Fragment>
    )
}

export default Payment
