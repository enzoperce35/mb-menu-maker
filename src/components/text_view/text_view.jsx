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

  const text1 = 'AVAILABLE NOW!';
  const orders = '📲 Order Online( Mb Castro ☝️) or pick-up';
  const location = "📍 Blk 1 Lot 10, Judith Street, Sampaguita West";
  const text3 = "✨ THANK YOU! ✨";
  const separationLine = "-------------------------";
  const appLink = "https://order-po.netlify.app/products?shop_id=1";

  const copyToClipboard = () => {
    const itemTexts = items.map(item => `• ${item}`).join("\n");

    const clipBoardText = 
`${text1}

${itemTexts}

${separationLine}
${orders}
${location}
${separationLine}

🛒 For more products and advanced orders, check our app: Click here → ${appLink}

${text3}`;

    navigator.clipboard.writeText(clipBoardText).then(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    });
  };

  return (
    <div id="text-container" className="p-4">
      <p className="font-bold">{text1}</p>

      <ul className="list-none p-0 mt-2 mb-4">
        {items.map((item, index) => (
          <li key={index}>• {item}</li>
        ))}
      </ul>

      {/* Copy button */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <button
          onClick={copyToClipboard}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Copy to Clipboard
        </button>
      </div>

      {showToast && (
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded shadow-lg">
          Copied to clipboard! ✅
        </div>
      )}

      <p>{orders}</p>
      <p>
        🛒 For more products and advanced orders, check our app:{" "}
        <a
          href={appLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Click here
        </a>
      </p>

      <p className="mt-4">{text3}</p>
    </div>
  );
}
