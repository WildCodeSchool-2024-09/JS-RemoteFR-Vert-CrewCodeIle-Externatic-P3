export type Offer = {
  id: number;
  logo: string;
  title: string;
  wage: number;
  description: string;
  location: string;
  is_teleworking: boolean;
  contract_type: string;
  is_opened_to_disabled: boolean;
  company_id: number;
  is_active: boolean;
};

export type OffersDataType = {
  id: number;
  title: string;
  logo: string;
  wage: number;
  description: string;
  location: string;
  is_teleworking: boolean;
  contract_type: string;
  company_id: number;
  is_opened_to_disabled: boolean;
};
