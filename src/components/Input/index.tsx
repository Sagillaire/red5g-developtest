import { IInput } from './interface'
import './styles.css'

export const Input = ({ id, value, onChange, type, label }: IInput) => {
    return (
        <div className="input-container">
            <input
                id={id}
                required
                type={type}
                value={value}
                onChange={onChange}
                className="input-field"
            />
            <label htmlFor={id} className="input-label">{label}</label>
        </div>
    )
}
