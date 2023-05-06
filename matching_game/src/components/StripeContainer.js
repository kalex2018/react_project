import React from 'react'
import PaymentForm from './PaymentForm'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import '../css/App.css'


const PUBLIC_KEY = "pk_test_51N4YEgDQlNioWJcmuLTNO7HPd7me4fk2wfEjkM05beYDATTNx0odnY5oObofVyj52JU1S7pw4PhyFMKdMleBdHfT00wvVYmdRK"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
        <PaymentForm />
    </Elements>
  )
}
