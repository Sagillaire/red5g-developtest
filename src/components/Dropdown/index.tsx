import './styles.css';
import { useDropdown } from './useDropdown';
import { EnumtypeSelect, IDropdown } from './interface';

/**
 * Renders a dropdown component with customizable options and behavior.
 *
 * @param {string} typeSelect - the type of dropdown behavior
 * @param {Array} props.options - the list of options to display in the dropdown
 * @param {string} props.label - the label for the dropdown
 * @param {string} props.mode - the mode for the dropdown (e.g. dropdown-menu-down)
 * @param {function} props.setChanges - the function to set changes
 * @param {any} props.changes - the current changes
 * @param {string} props.nameChanges - the name of changes
 * @return {JSX.Element} the rendered dropdown component
 */
export const Dropdown = ({ typeSelect = 'grow', options, label, mode = 'dropdown-menu-down', setChanges, changes, nameChanges }: IDropdown) => {
    const { isOpen, setIsOpen, handleSelect } = useDropdown(setChanges as never, nameChanges);

    return (
        <div className="container-dropdown">
            <div className='dropdown'>
                <div className={`dropdown_content ${EnumtypeSelect[typeSelect]}`}>
                    <button onClick={() => setIsOpen(!isOpen)} className={`dropdown_button ${isOpen ? 'dropdown' : ''}`}>
                        <div className='dropdown_selected'>
                            <span>{label}</span>
                            <span>{changes}</span>
                        </div>
                        <svg className={`dropdown-arrow ${isOpen ? 'dropdown-open' : ''}`} style={{ width: '24px', height: '24px', marginLeft: '8px' }} viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                    {isOpen && (
                        <div className={`dropdown-menu ${mode} ${isOpen ? 'open' : ''}`}>
                            <div className='options-content'>
                                {options?.map((option) => (
                                    <li key={option.value} onClick={() => handleSelect(option?.value)}>{option.label}</li>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
