import { ChangeEvent } from 'react'

export type id = string | number

export interface Field {
  [id: id]: {
    type: string;
    id: number;
    value: string;
  }
}

interface SelectValue {
  id: id;
  label: string;
}

export interface Select {
  values: SelectValue[];
  selectValue: id;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export interface Input {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface Button {
  text: string;
  onClick: () => void;
}

