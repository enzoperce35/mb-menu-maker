import { getAffiliates, collectClosedAffiliates, toggleAffiliates } from "./affiliates";
import ToggleSwitch from "../editor/content/toggleswitch";
import { useState, useEffect } from "react";

export default function InitialView({}) {
  const [updates, setUpdates] = useState({updated: false})

  useEffect(() => {
    const handleStorageUpdate = () => {
      setUpdates(prev => ({ ...prev, updated: true }));
    };

    window.addEventListener("updatedAffiliates", handleStorageUpdate);
    
    return () => window.removeEventListener("updatedAffiliates", handleStorageUpdate);
  }, []);

  return (
    <div id="affiliates-table">
    <table id="initial-table">
      <thead>
        <tr>
          <th></th>
          <th></th>
        </tr>
      </thead>
       
      <tbody>
        {getAffiliates().map(obj => {
          const affiliate = obj.affiliate
          const variants = obj.affiliatedVariants
          const closedAffiliates = collectClosedAffiliates(affiliate)
          const checked = obj.checked

          return (
            <tr key={affiliate}>
              <td>{affiliate}</td>
            
              <td className="availability-toggle">
                <span onClick={(e) => {
                  e.preventDefault();
                  toggleAffiliates(variants, checked, closedAffiliates);
                }}>
                
                <ToggleSwitch itemId={affiliate} checked={checked} motherItem={null} />
                </span>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table></div>
  )
}
