export type InputType = Exclude<HTMLInputElement['type'], 'checkbox' | 'file' | 'radio' | 'reset' | 'submit' | 'button' | 'file'>;
