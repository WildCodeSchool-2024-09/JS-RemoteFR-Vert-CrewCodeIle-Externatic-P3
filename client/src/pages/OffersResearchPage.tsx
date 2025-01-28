import { useState } from "react";
import OffersList from "../components/Offers/OffersList";
import OffersResearch from "../components/Offers/OffersResearch";
import type { OffersDataType } from "../lib/offers.definitions";
import type { SearchDataType } from "../lib/search.definition";

export default function OffersResearchPage() {
  const VITE_API_URL = import.meta.env.VITE_API_URL;

  const [filteredOffers, setFilteredOffers] = useState<OffersDataType[]>([]);

  const handleFilteredOffers = async (searchData: SearchDataType) => {
    try {
      const response = await fetch(`${VITE_API_URL}/api/offers`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(searchData),
      });
      const data: OffersDataType[] = await response.json();
      setFilteredOffers(data);
    } catch (err) {
      console.error("error");
    }
  };

  return (
    <>
      <OffersResearch
        handleFilteredOffers={handleFilteredOffers}
        filteredOffers={filteredOffers}
      />
      <OffersList />
    </>
  );
}
