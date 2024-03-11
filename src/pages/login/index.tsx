import './styles.css';
import { useLogin } from './useLogin';
import { Link } from "react-router-dom";
import Logo from '/assets/Grupo_258.svg';
import { Button } from '../../components/Button';

export const LoginPage = () => {
    const { handleSubmit, username, setUsername, password, setPassword, error } = useLogin();

    return (
        <section className='container-background'>
            <div className='flex-column-center'>
                <header className='flex-column-center'>
                    <img src={Logo.toString()} alt="Logo" />
                    <h2>SufiPay</h2>
                    <p>Administrador comercial</p>
                </header>
                <form style={{ width: '100%', margin: '0 auto' }} onSubmit={handleSubmit}>
                    <div className='centered-shadow-container' >
                        <div className="input-container">
                            <input
                                type="text"
                                id="username"
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="input-field"
                            />
                            <label htmlFor="username" className="input-label">Usuario</label>
                        </div>
                        <div className="input-container">
                            <input
                                type="password"
                                id="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="input-field"
                            />
                            <label htmlFor="password" className="input-label">Contraseña</label>
                        </div>
                    </div>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <Button
                        text='INGRESAR'
                        style={{ margin: '24px auto' }}
                        type='submit'
                    />
                </form>
                <Link to="/forgot-password" style={{ display: 'block', textAlign: 'center', color: '#413E4D', fontSize: '12px' }}>No recuerdo mi contraseña</Link>
            </div>
        </section>
    )
}