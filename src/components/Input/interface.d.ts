export interface IInput {
    id: string;
    value?: string;
    label?: string;
    type?: InputType;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export type InputType =
    | 'text'
    | 'password'
    | 'email'
    | 'number'
    | 'date'
    | 'time'
    | 'datetime-local'
    | 'month'
    | 'week'
    | 'url'
    | 'search'
    | 'tel'
    | 'color'
    | 'file'
    | 'range'
    | 'hidden'
    | 'checkbox'
    | 'radio'
    | 'image'
    | 'submit'
    | 'reset'
    | 'button'
    | 'datetime'
    | 'range';