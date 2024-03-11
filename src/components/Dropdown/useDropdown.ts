import { useState } from "react";

export const useDropdown = (setChanges: (value: number | string | null, name: string) => void, nameChanges: string) => {
    const [isOpen, setIsOpen] = useState(false);

    /**
     * Handles the selection of a value.
     *
     * @param {number | string | null} value - the selected value
     * @return {void} 
     */
    const handleSelect = (value: number | string | null) => {
        setIsOpen(false);
        setChanges(value, nameChanges);
    };

    return {
        isOpen,
        setIsOpen,
        handleSelect
    };
}