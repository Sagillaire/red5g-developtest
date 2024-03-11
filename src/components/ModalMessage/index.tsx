import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import './styles.css';

export const ModalMessage = () => {
    const [active, setActive] = useState<boolean>(true);

    const handleActive = () => setActive(!active);

    return (
        active && (
            <div className="modal-container">
                <FaTimes onClick={handleActive} size={13} className="close" />
                <span className="modal-container__text">Pedro Pérez ha hecho una compra por valor de <b>$1.800.000</b></span>
            </div>
        )
    )
}
