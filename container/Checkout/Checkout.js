import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import { Formik } from 'formik';
import * as yup from 'yup';
import { CheckoutOuter, CheckoutTitle, FormChecking, FieldInput, StyledErrorMessage, SelectCity, ContinueButton, Buttons, GoBachBtn } from '../Checkout/Checkout.styled';

const options = [
    {
        label: "Lviv",
        value: "Lviv",
    },
    {
        label: "Kyiv",
        value: "Kyiv",
    },
    {
        label: "Odesa",
        value: "Odesa",
    },
    {
        label: "Kharkiv",
        value: "Kharkiv",
    },
    {
        label: "Dnipro",
        value: "Dnipro",
    },
    {
        label: "Ternopil",
        value: "Ternopil",
    }
    ];

const schema = yup.object().shape({
    firstName: yup.string()
    .min(3, 'Min length must be 3')
    .max(20, 'Max length must be 25')
    .required('This field is required'),
    lastName: yup.string()
    .min(3, 'Min length must be 3')
    .max(20, 'Max length must be 30')
    .required('This field is required'),
    age: yup.number().typeError('Only numbers')
    .min(18, 'Min age = 21 years')
    .integer('Only numbers')
    .required('This field is required'),
    phoneNumber: yup.string()
    .matches(
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
        "Invalid phone number"
    )
    .required("This field is required"),
    email: yup.string()                       
    .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        "Invalid email"
    )
    .required("This field required"),
    city: yup.string()
    .oneOf(['Lviv', 'Kyiv', 'Odesa', 'Kharkiv', 'Dnipro', 'Ternopil'], 'Select city of sending invitation')
})
const Checkout = () => {
    let history = useHistory();

    const goBack = () => {
        history.push(`/catalog`);
    }

    const succ = () => {
        history.push(`/success`);
        console.log("rrrrrrrrrrr")
    }

    return(
        <CheckoutOuter>
            <CheckoutTitle>Checkout</CheckoutTitle>
            <Formik
                initialValues={{ firstName: '', lastName: '', age: '', email: '', phoneNumber: '', city: '' }}
                validationSchema = {schema}
                onSubmit={succ}
                >
                {({ isSubmitting, handleSubmit}) => (
                        <FormChecking onSubmit={handleSubmit}>
                            <div>
                                <label>First Name</label>
                                <FieldInput type="firstName" name="firstName" />
                                <StyledErrorMessage name="firstName" component="div" />
                            </div>
                            <div>
                                <label>Last Name</label>
                                <FieldInput type="lastName" name="lastName" />
                                <StyledErrorMessage name="lastName" component="div" />
                            </div>
                            <div>
                                <label>Age</label>
                                <FieldInput type="age" name="age" />
                                <StyledErrorMessage name="age" component="div" />
                            </div>
                            <div>
                                <label>Email</label>
                                <FieldInput type="email" name="email" />
                                <StyledErrorMessage name="email" component="div" />
                            </div>
                            <div>
                                <label>Phone number</label>
                                <FieldInput type="phoneNumber" name="phoneNumber" />
                                <StyledErrorMessage name="phoneNumber" component="div" />
                            </div>
                            <div>
                                <label>City</label>
                                <SelectCity type="city" name="city" >
                                    {options.map((option) => (
                                            <option value={option.value}>{option.label}</option>
                                    ))}
                                <StyledErrorMessage name="city" component="div" />
                                </SelectCity>
                            </div>
                            <Buttons>
                                <GoBachBtn onClick={goBack}>Go Back</GoBachBtn>
                                <ContinueButton type="submit" disabled={isSubmitting} onSubmit={handleSubmit}>Continue</ContinueButton>
                            </Buttons>
                        </FormChecking>
                    )}
            </Formik>
        </CheckoutOuter>
    );
};

export default Checkout;