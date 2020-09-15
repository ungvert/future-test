/// <reference types="react-scripts" />

type TableItem = {
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


interface Data {
    calories: number;
    carbs: number;
    fat: number;
    name: string;
    protein: number;
  }