import { allItems } from "../all_items";
import { useState } from "react";

const filteredAndSortedItems = () => {
  const currentHour = new Date().getHours();
  const isMeriendaTime = currentHour >= 13 && currentHour < 17; // 1 PM to 5 PM

  // Step 1: Filter displayed items
  let filteredItems = allItems.filter(item => item.display);

  // Step 2: Remove items if any variant exists in localStorage
  filteredItems = filteredItems.filter(item =>
    Object.keys(item.variants).some(variant =>
      !localStorage.getItem(`${item.name}${variant}`)
    )
  );

  // Step 3: Categorize items
  const meals = filteredItems.filter(item => item.category === "Meals");
  const merienda = filteredItems.filter(item => item.category === "Merienda");
  const others = filteredItems.filter(item => item.category !== "Meals" && item.category !== "Merienda");

  // Function to shuffle an array randomly
  function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  // Shuffle each category separately
  const shuffledMeals = shuffleArray(meals);
  const shuffledMerienda = shuffleArray(merienda);
  const shuffledOthers = shuffleArray(others);

  // Step 4: Merge back based on priority
  return isMeriendaTime
    ? [...shuffledMerienda, ...shuffledMeals, ...shuffledOthers]
    : [...shuffledMeals, ...shuffledMerienda, ...shuffledOthers];
};

export default function TextView({ }) {
  const [showToast, setShowToast] = useState(false);
  const items = filteredAndSortedItems().map(item => item.name)
  const text1 = 'AVAILABLE NOW!'
  const orders = '📲 Order Online( Mb Castro ☝️) or Pick-up'
  const location = "📍 Blk 1 Lot 10, Judith Street, Sampaguita West"
  const text3 = "✨ THANK YOU! ✨"

  const copyToClipboard = () => {
    const itemTexts = items.join("\n");
    const clipBoardText = `${text1}\n\n${itemTexts}\n\n\n\n\n\n${separationLines}\n${orders}\n${location}\n${payment}\n${delivery}\n${separationLines}\n\n${text2}\n\n${text3}\n\n`;

    navigator.clipboard.writeText(clipBoardText).then(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000); // Hide after 2 seconds
    });
  };

  return (
    <div id="text-container">
      <p>{text1}</p>

      <br />

      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <div id="text-items" >
          <div>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </div>

          <div id="copy-button">
            <button onClick={copyToClipboard} className="px-4 py-2 bg-blue-500 text-white rounded">
              Copy to Clipboard
            </button>

            {showToast && (
              <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded shadow-lg">
                Copied to clipboard! ✅
              </div>
            )}
          </div>
        </div>

        <br />

        <p>📲 Order Online( Mb Castro ☝️)</p>
        <br />
        <p>
          🛒 For more products and advanced orders, please check our app:{" "}
          <a
            href="https://order-po.netlify.app/products?shop_id=1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Click here
          </a>
        </p>


        <br />
        <br />
        <br />

        <p>{text3}</p>
      </ul>

      <br />
      <br />
    </div>
  )
}
