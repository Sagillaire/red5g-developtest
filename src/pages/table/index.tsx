import './styles.css'
import { Link } from "react-router-dom"
import { Button, Dropdown, Input, ModalMessage } from "../../components"
import { HiMiniChevronLeft, HiMiniChevronRight } from 'react-icons/hi2';
import { useEffect, useState } from 'react';
import { MdCancel } from 'react-icons/md';
import { CustomInput } from '../../components/CustomInput';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { PiArrowLineDown } from 'react-icons/pi';
import { CiLogin } from 'react-icons/ci';
import { optionsDocuments, optionsPerPage } from './Data';

interface IForm {
    document?: string;
    disbursement?: string;
    page?: number | string;
    since_date?: Date | string;
    until_date?: Date | string;
    registers?: number | string;
    typeDocument?: string | string;
}

export const TablePage = () => {
    const [form, setForm] = useState<IForm>({});

    const handleChange = (value: string | number, name: string) => {
        setForm({ ...form, [name]: value })
    }

    const [value, setValue] = useState(1);
    const [isInputEmpty, setIsInputEmpty] = useState(true);

    const increment = () => {
        if (value < 10) {
            setValue(prevValue => prevValue + 1);
        }
    };

    const decrement = () => {
        if (value > 1) {
            setValue(prevValue => prevValue - 1);
        }
    };

    const resetFilters = () => {
        setForm({
            document: '',
            since_date: '',
            until_date: '',
            disbursement: '',
            typeDocument: '',
        });
    }


    useEffect(() => {
        setIsInputEmpty(!form?.document && !form?.disbursement && !form?.since_date && !form?.until_date && !form?.typeDocument);
    }, [form?.document, form?.disbursement, form?.since_date, form?.until_date, form?.typeDocument]);

    return (
        <div className='container'>
            <header className="header">
                <div className="header--logo">
                    <img src="/assets/headerLogo.svg" alt="logo" />
                </div>
                <Link className="link" to="/">
                    <span className="header--logout">
                        Cerrar sesión
                        <CiLogin size={25} />
                    </span>
                </Link>
            </header>

            <div className="header-title h-88 px-50">
                <span className="header-title__text">
                    Mis desembolsos
                </span>
                <Button icon={<PiArrowLineDown size={22} />} text="Descargar" />
            </div>

            <div className='filters h-88 px-50'>
                {!isInputEmpty && (
                    <button
                        onClick={resetFilters}
                        style={{ border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }}
                    >
                        <MdCancel color="red" size={24} />
                    </button>
                )}
                <Dropdown
                    label='Tipo doc.'
                    typeSelect='normal'
                    mode='dropdown-menu-down'
                    setChanges={handleChange}
                    nameChanges='typeDocument'
                    options={optionsDocuments}
                    changes={form?.typeDocument as string}
                />

                <Input
                    label='Número de documento'
                    id="document_number"
                    value={form?.document}
                    onChange={(e) => handleChange(e.target.value, 'document')}
                />
                <Input
                    label='Número de desembolso'
                    id="discharge_number"
                    value={form?.disbursement}
                    onChange={(e) => handleChange(e.target.value, 'disbursement')}
                />
                <DatePicker
                    selected={form?.since_date as Date}
                    onChange={date => handleChange(date as never, 'since_date')}
                    customInput={<CustomInput label='Desde' id="to_date" />}
                />
                <DatePicker
                    selected={form?.until_date as Date}
                    onChange={date => handleChange(date as never, 'until_date')}
                    customInput={<CustomInput label='Hasta' id="until_date" />}
                />
            </div>

            <div className='table-container'>
                <table className='table'>
                    <thead className='table--header h-48'>
                        <tr>
                            <th style={{ paddingLeft: '50px' }}>Fecha y hora</th>
                            <th>Número de desembolso</th>
                            <th>Tipo de documento</th>
                            <th>Número de documento</th>
                            <th style={{ paddingRight: '50px' }}>Monto</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[...Array(14).keys()].map((_, key) => (
                            <tr key={key} className={`table--row h-48 px-50  ${key % 2 === 0 ? 'row--white' : 'row--gray'}`}>
                                <td style={{ paddingLeft: '50px' }}>00-00-0000 00:00:00</td>
                                <td>00000000</td>
                                <td>Cédula</td>
                                <td>0000000000</td>
                                <td style={{ paddingRight: '50px' }} className='bold'>$000.000.000</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className='container-dropdown-buttons'>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <button
                            onClick={decrement}
                            className='button-decrement'
                        >
                            <HiMiniChevronLeft />
                        </button>
                        <input type="number" value={value} className='input-dropdown' readOnly />
                        <span style={{ fontSize: '16px' }}>{`de ${form?.registers ? form?.registers : '10'}`}</span>
                        <button
                            onClick={increment}
                            className='button-increment'
                        >
                            <HiMiniChevronRight />
                        </button>
                    </div>
                    <Dropdown typeSelect='grow' options={optionsPerPage} label='Registros por página' mode='dropdown-menu-up' setChanges={handleChange} changes={form?.registers as string} nameChanges='registers' />
                </div>
            </div >
            <ModalMessage />
        </div >
    )
}
