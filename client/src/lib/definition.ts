export type SearchDataType = {
  titre?: string;
  contract_type?: string;
  location?: string;
  is_teleworking?: string;
};

export type CandidateDataType = {
  cv: string;
  photo: string;
  user_id: number;
  is_disabled: boolean;
};

export type OffersDataType = {
  id: number;
  titre: string;
  logo: string;
  wage: number;
  description: string;
  location: string;
  is_teleworking: boolean;
  contract_type: string;
  company_id: number;
  is_opened_to_disabled: boolean;
};
