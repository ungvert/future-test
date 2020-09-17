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

// interface Data {
//     calories: number;
//     carbs: number;
//     fat: number;
//     name: string;
//     protein: number;
//   }

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
  sortable: boolean;
}
