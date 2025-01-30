import type { Company } from "../../lib/companies.definition";

type CompanyCardProps = {
  company: Company;
};

const CompanyCard = ({ company }: CompanyCardProps) => {
  return (
    <section className="border p-4 rounded shadow border-primary-color">
      <h2 className="font-bold text-xl text-center">{company.company_name}</h2>
      <p>{company.description}</p>
      <p>
        <strong>Secteur:</strong> {company.sector}
      </p>
      <p>
        <strong>Nombre d'employés:</strong> {company.employee_number}
      </p>
      <a
        href={company.website_link}
        target="_blank"
        rel="noreferrer"
        className="link-primary-color"
      >
        Visiter le site
      </a>
    </section>
  );
};

export default CompanyCard;
