import { Link } from 'react-router-dom';
import './styles.css'

interface IButton {
    text: string;
    style?: React.CSSProperties;
    icon?: JSX.Element;
    onClick?: () => void;
    link?: string;
    type?: "button" | "submit" | "reset";
}

export const Button = ({ text, style, icon, onClick, link, type = "button" }: IButton) => {
    const ButtonContent = (
        <button type={type} style={style} className="btn" onClick={onClick}>
            {icon && (
                <span className="btn__icon">
                    {icon}
                </span>
            )}
            <span className="btn__text">
                {text}
            </span>
        </button>
    );

    return link ? (
        <Link to={link} style={{ textDecoration: 'none' }}>
            {ButtonContent}
        </Link>
    ) : (
        ButtonContent
    );
}