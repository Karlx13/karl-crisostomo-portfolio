import type { ReactNode } from 'react';

export interface IColumn<T> {
  key: string;
  header: string;
  render?: (row: T) => ReactNode;
  accessor?: keyof T;
}

export interface IGeneralTableProps<T> {
  columns: IColumn<T>[];
  data: T[];
  expandableRow: (row: T) => ReactNode;
}
