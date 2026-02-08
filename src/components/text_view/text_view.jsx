import { allItems } from "../all_items";
import { useState } from "react";

const filteredAndSortedItems = () => {
  const currentHour = new Date().getHours();
  const isMeriendaTime = currentHour >= 13 && currentHour < 17;

  let filteredItems = allItems.filter(item => item.display);

  filteredItems = filteredItems.filter(item =>
    Object.keys(item.variants).some(variant =>
      !localStorage.getItem(`${item.name}${variant}`)
    )
  );

  const meals = filteredItems.filter(item => item.category === "Meals");
  const merienda = filteredItems.filter(item => item.category === "Merienda");
  const others = filteredItems.filter(item => item.category !== "Meals" && item.category !== "Merienda");

  const shuffleArray = array => array.sort(() => Math.random() - 0.5);

  const shuffledMeals = shuffleArray(meals);
  const shuffledMerienda = shuffleArray(merienda);
  const shuffledOthers = shuffleArray(others);

  return isMeriendaTime
    ? [...shuffledMerienda, ...shuffledMeals, ...shuffledOthers]
    : [...shuffledMeals, ...shuffledMerienda, ...shuffledOthers];
};

export default function TextView() {
  const [showToast, setShowToast] = useState(false);
  const items = filteredAndSortedItems().map(item => item.name);

  const header = 'AVAILABLE NOW!';
  const orders = '📲 Order Online (Mb Castro ☝️) or pick-up';
  const location = "📍 Blk 1 Lot 10, Judith Street, Sampaguita West";
  const thanks = "✨ THANK YOU! ✨";
  const separator = "-------------------------";
  const appLink = "https://order-po.netlify.app/products?shop_id=1";

  const copyToClipboard = () => {
    const itemTexts = items.map(item => `• ${item}`).join("\n");

    const clipboardText = 
`${header}

${itemTexts}

${separator}
${orders}
${location}
${separator}

🛒 For more products and advanced orders, check our app → ${appLink}

${thanks}`;

    navigator.clipboard.writeText(clipboardText).then(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    });
  };

  return (
    <div id="text-container" className="p-4 max-w-lg mx-auto">
      {/* Header */}
      <p className="font-bold text-xl mb-2">{header}</p>

      {/* Item list */}
      <ul className="list-none p-0 mb-4">
        {items.map((item, index) => (
          <li key={index}>• {item}</li>
        ))}
      </ul>

      {/* Copy button */}
      <div className="text-center mb-6">
        <button
          onClick={copyToClipboard}
          className="px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Copy to Clipboard
        </button>
      </div>

      {/* Toast */}
      {showToast && (
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded shadow-lg">
          Copied to clipboard! ✅
        </div>
      )}

      {/* On-screen links */}
      <p className="mb-1">{orders}</p>
      <p className="mb-4">
        🛒 For more products and advanced orders, please check our app →{" "}
        <a
          href={appLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Click here
        </a>
      </p>

      <p className="mt-2">{thanks}</p>
    </div>
  );
}
