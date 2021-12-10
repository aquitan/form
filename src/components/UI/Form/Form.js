import { ErrorMessage } from '@hookform/error-message'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { SimpleContext } from '../../../context'
import Button from '../Button/Button'
import Input from '../Input/Input'
import './Form.scss'

const Form = () => {
    const {isChecked, setIsChecked} = useContext(SimpleContext)
    const {setIsSuccess, setIsModal} = useContext(SimpleContext)
    const {register, handleSubmit, formState: {errors}} = useForm()

    const onFormSubmit = (data) => {
        if (data.cryptoOne && data.cryptoTwo && !data.cryptoEmail) {
            console.log('checked')
            setIsChecked(true)
            setIsSuccess(false)
        } else if (data.cryptoOne && data.cryptoTwo && data.cryptoEmail) {
            console.log(data)
            setIsChecked(false)
            setIsSuccess(true)
            data.cryptoOne = ''
            data.cryptoTwo = ''
            data.cryptoEmail = ''
            setIsModal(true)
        }
    }
    const checkInputs = (e) => {
        e.preventDefault()
        console.log('click')
    }

    return (
        <div className='form-wrap'>
            <h4>Form</h4>
            <form className='form' onSubmit={handleSubmit(onFormSubmit)}>
                <Input {...register('cryptoOne', {
                    required: 'This value is required!',
                    minLength: {
                        value: 44,
                        message: 'Min value is 44 characters'
                    },
                    maxLength: {
                        value: 49,
                        message: 'Max value is 49 characters'
                    }
                    
                    })} placeholder='Crypto One' type='text' />
                    <ErrorMessage name='cryptoOne' errors={errors} render={({message}) => <p>{message}</p>} />
                    

                <Input {...register('cryptoTwo', {
                    required: 'This value is required!',
                    minLength: {
                        value: 44,
                        message: 'Min value is 44 characters'
                    },
                    maxLength: {
                        value: 49,
                        message: 'Max value is 49 characters'
                    }
                })} placeholder='Crypto Two' type='text' />
                <ErrorMessage name='cryptoTwo' errors={errors} render={({message}) => <p>{message}</p>} />

                {
                    isChecked ?
                    <Input {...register('cryptoEmail')} placeholder='Email' type='email' />
                    : null
                }
                <Button onClick={checkInputs} color='primary'> 
                {
                    isChecked ? 'Submit' : 'Next'
                } 
                </Button>
            </form>
        </div>
    )
}

export default Form