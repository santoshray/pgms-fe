import React from 'react';
import { Alert } from 'react-bootstrap';

const infoMessage = (message) => {
    return (
        <Alert key='primary' variant='primary'>
            {message}
        </Alert>
    )
}

const errorMessage = (message) => {
    return (
        <Alert key='danger' variant='danger'>
            {message}
        </Alert>
    )
}

const successMessage = (message) => {
    return (
        <Alert key='success' variant='success'>
            {message}
        </Alert>
    )
}

export default {
    infoMessage:infoMessage,
    errorMessage:errorMessage,
    successMessage:successMessage
}