export type UserFormData = {
  lastname: string;
  firstname: string;
  email: string;
  address: string;
  city: string;
  postal_code: number;
  tel: number;
  password: string;
  confirmPassword: string;
  is_active: boolean;
  is_role: boolean;
};

export type CandidateFormData = {
  cv: string;
  photo: string;
  is_disabled: boolean;
};
