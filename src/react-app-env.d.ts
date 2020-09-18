/// <reference types="react-scripts" />

type Data = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: {
    streetAddress: string;
    city: string;
    state: string;
    zip: string;
  };
  description: string;
};

type Order = 'asc' | 'desc';
type SortableRows =
  | 'id'
  | 'firstName'
  | 'lastName'
  | 'email'
  | 'phone'
  | 'description';

interface TableCell {
  id: keyof Data;
  label: string;
  disablePadding: boolean;
  numeric: boolean;
  sortable: boolean;
}

type ApiDataVariant = 'small' | 'big';