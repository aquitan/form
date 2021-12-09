import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { SimpleContext } from '../../../context'
import Button from '../Button/Button'
import Input from '../Input/Input'
import './Form.scss'

const Form = () => {
    const {isChecked, setIsChecked} = useContext(SimpleContext)
    const {register, handleSubmit, formState: {errors}} = useForm()

    const onFormSubmit = (data) => {
        if (data.cryptoOne && data.cryptoTwo && !data.cryptoEmail) {
            console.log('checked')
            setIsChecked(true)
        } else if (data.cryptoOne && data.cryptoTwo && data.cryptoEmail) {
            console.log(data)
            setIsChecked(false)
            data.cryptoOne = ''
            data.cryptoTwo = ''
            data.cryptoEmail = ''
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
                    required: true,
                    minLength: {
                        value: 44,
                        message: 'Min value is 44 characters'
                    },
                    maxLength: {
                        value: 49,
                        message: 'Max value is 49 characters'
                    }
                    
                    })} placeholder='Crypto One' type='text' />

                <Input {...register('cryptoTwo', {required: true})} placeholder='Crypto Two' type='text' />
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