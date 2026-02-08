import { useRef } from "react";
import html2canvas from "html2canvas";
import Item from "./item";
import downloadIcon from "../../../assets/icons/download_icon.svg";

export default function Contents({ focus, group }) {
  const printRef = useRef();

  const handleDownloadImage = async () => {
    const element = printRef.current;
    if (!element) return;

    try {
      const canvas = await html2canvas(element, { useCORS: true });
      const dataUrl = canvas.toDataURL("image/jpeg");
      const link = document.createElement("a");

      link.href = dataUrl;
      link.download = `madonna_group${group}_menu.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Failed to capture image:", error);
    }
  };

  // 🎨 Easy-to-switch themed background styles
  const backgroundStyles = {
    default: {
      group3: "linear-gradient(to top right, #cfc9d3, #f6f2c2)", // reserved
      other: "linear-gradient(to top right, #96f226, #439207)",  // reserved
    },

    amber: {
      group3: "linear-gradient(to top right, #FFC371, #FF5F6D)",
      other: "linear-gradient(to top right, #FFF8DC, #FFE4B5)",
    },

    goldenHour: {
      group3: "linear-gradient(to top right, #FAD961, #F76B1C)",
      other: "linear-gradient(to top right, #FFE29F, #FFA07A)",
    },

    cinnamon: {
      group3: "linear-gradient(to top right, #B05E27, #FFD194)",
      other: "linear-gradient(to top right, #FAD6A5, #E2B07F)",
    },
    
  };

  // 🌟 Select the active theme here
  const activeStyle = backgroundStyles.goldenHour; // 🌟 change this to use another theme (sunrise, amber, terracotta, etc.)

  const isGroup3 = group === 3;

  return (
    <div
      ref={printRef}
      className={focus === group ? "preview-content" : "hidden"}
      style={{
        backgroundImage: isGroup3
          ? activeStyle.group3
          : activeStyle.other,
      }}
    >
      <div id={isGroup3 ? "preview-left-2" : "preview-left"}>
        <div id={isGroup3 ? "preview-brand-2" : "preview-brand"}>
          <img
            src={downloadIcon}
            alt="Download"
            data-html2canvas-ignore="true"
            id="print-button"
            onClick={handleDownloadImage}
            style={{ cursor: "pointer" }}
          />
        </div>

        <div className="preview-items">
          <h2>
            <span>💖</span> {isGroup3 ? "Pre Order Bilao" : "Available Today"}{" "}
            <span>💖</span>
          </h2>

          {[1, 2, 3].map((grp) => (
            <Item key={grp} group={grp} focus={focus} />
          ))}
        </div>
      </div>

      <div id="preview-images">
        <div id={`preview-image-large-a${focus}`} />

        <div className="image-double">
          <div id={`preview-image-double-a${focus}`} />
          <div id={`preview-image-double-b${focus}`} />
        </div>

        <div className="image-double">
          <div id={`preview-image-double-c${focus}`} />
          <div id={`preview-image-double-d${focus}`} />
        </div>

        <div id={`preview-image-single-a${focus}`} />
        <div id={`preview-image-large-b${focus}`} />
      </div>
    </div>
  );
}

// 💖🎄 menu header icons
