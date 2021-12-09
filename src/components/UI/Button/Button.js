import React from 'react'
import './Button.scss'

const Button = ({children}, props) => {
    const cls = ['btn']
    if (props.color === 'success') {
        cls.push('success')
    } else {
        cls.push('primary')
    }

    return (
        <button className={cls.join(' ')} {...props}>{children}</button>
    )
}

export default Button