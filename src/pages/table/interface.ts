export interface IDropdown {
    mode?: TMode;
    label: string;
    options: TOptions;
    nameChanges: string;
    typeSelect?: TTypeSelect;
    changes: number | string;
    setChanges: (value: number | string | null, name: string) => void;
}

type TOptions = {
    value: number | string,
    label: string
}[]

type TTypeSelect = 'normal' | 'grow';

type TMode = 'dropdown-menu-down' | 'dropdown-menu-up';

export enum EnumtypeSelect {
    'normal' = 'dropdown-normal',
    'grow' = 'dropdown-grow',
}