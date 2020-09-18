/// <reference types="react-scripts" />

type RawData = {
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

type Data = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  addressStreetAddress: string;
  addressCity: string;
  addressState: string;
  addressZip: string;
  description: string;
};
type SetData = React.Dispatch<React.SetStateAction<Data[]>>;

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
  displayInTable: boolean;
  inputType: string;
}

type ApiDataVariant = 'small' | 'big';
