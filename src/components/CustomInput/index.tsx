import { forwardRef } from 'react';
import { FaRegCalendarDays } from 'react-icons/fa6';
import './styles.css';

export const CustomInput = forwardRef(({ value, onClick, label, id }: { value?: string, onClick?: () => void, label: string, id: string }, ref) => (
    <div className="input-container-date">
        <input
            id={id}
            required
            type="text"
            value={value}
            onClick={onClick}
            ref={ref as never}
            className="input-field"
        />
        <label htmlFor={id} className="input-label">{label}</label>
        <FaRegCalendarDays style={{ margin: 'auto', display: 'block', width: '24px', height: '24px', textAlign: 'center', color: 'red' }} onClick={onClick} />
    </div>
));