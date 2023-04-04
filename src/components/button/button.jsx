import './button.css'
import className from 'classname'

export const Button = ({
    onClick,
    type,
    children,
    size = 's'
}) => {
    const btnClass = className ({
        'btn': true,
        'btn-secondary':type === 'secondary',
        'btn-primary':type === 'primary',
        'btn-small':size === 's',
        'btn-medium':size === 'm',
    })
    return (
        <button 
        className= { btnClass }
        onClick={ onClick }
        >
            { children }
        </button>
    )
}