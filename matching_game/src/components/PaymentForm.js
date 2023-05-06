import React, {useState} from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from "axios"
import { Checkbox, Container, Input, Radio, Group, Text } from '@mantine/core'
import '../css/paymentForm.css'


const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}

// Stripe payment form - added in extra styling and elements to allow user to choose donation amount.
export default function PaymentForm() {
    const [success, setSuccess ] = useState(false)
    const [price, setPrice] = useState(5)
    const stripe = useStripe()
    const elements = useElements()

    console.log(price)
    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })
    


    if(!error) {
        try {
            const {id} = paymentMethod
            const response = await axios.post("http://localhost:4000/payment", {
                amount: price * 100,
                id
            })

            if (response.data.success) {
                console.log("Successful payment!")
                setSuccess(true)
            }

        } catch (error) {
            console.log("Error", error)
        }
    } else {
        console.log(error.message)
    }
    }

  return (
    <>
    {!success ?
    <Container size="xs" px="xs" mt={40}>
        <Radio.Group
         value={price}
         onChange={setPrice}
        //  name="DonationAmount"
        //  label="Select your desired donation amount"
         >
        <Text>Choose a donation amount!</Text>
        <Group mt="xs" id="radioGroup">
            <Radio value="5" label="Donate $5" />
            <Radio value="10" label="Donate $10" />
            <Radio value="20" label="Donate $20" />
            <Radio value="30" label="Donate $30" />
        </Group>
        </Radio.Group>
    <form onSubmit={handleSubmit}>
        <fieldset className="FormGroup">
            <div className="FormRow">
                <CardElement options={CARD_OPTIONS} />
            </div>
        </fieldset>
        <button>Pay</button>
    </form>
    </Container>
    :
    <div>
        <h2>Success! Thank you for your donation!</h2>
    </div>
    }

    </>
    

  )

}
