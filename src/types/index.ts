import {ChangeEvent} from 'react'

export type id = string | number

interface SelectValue {
  id: id;
  label: string;
}

export interface Select {
  values: SelectValue[];
  selectValue: id;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export interface Field {
  type: string;
  id: number;
  value: string;
}