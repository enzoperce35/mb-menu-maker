import { useRef } from "react";
import html2canvas from "html2canvas";
import Item from "./item";
import {default as downloadIcon} from "../../../assets/icons/download_icon.svg";

export default function Contents({focus, group}) {
  const printRef = useRef();

  const handleDownloadImage = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);

    const data = canvas.toDataURL('image/jpg');
    const link = document.createElement('a');

    if (typeof link.download === 'string') {
      link.href = data;
      link.download = `madonna_group${group}_menu.jpg`;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };

  return (
    <div ref={printRef} className={focus === group ? "preview-content" : "hidden"} style={{ backgroundImage: group === 3 ? "linear-gradient(to top right, #cfc9d3, #f6f2c2)" : "linear-gradient(to top right, #96f226, #439207)" }}>
    <div id={group === 3 ? "preview-left-2" : "preview-left"} >
        <div id={group === 3 ? "preview-brand-2": "preview-brand" }>
          <img src={downloadIcon} data-html2canvas-ignore={true} id={"print-button"} onClick={handleDownloadImage}></img>
        </div>

        <div className="preview-items">
          <h2><span>💖</span> {group === 3 ? 'Pre Order Bilao' : 'Available Today'} <span>💖</span></h2>

          <Item group={1} focus={focus} />
          <Item group={2} focus={focus} />
          <Item group={3} focus={focus} />
        </div>
      </div>

      <div id="preview-images">
        <div id={`preview-image-large-a${focus}`}></div>

        <div className={'image-double'} >
          <div id={`preview-image-double-a${focus}`}></div>
          <div id={`preview-image-double-b${focus}`}></div>
        </div>

        <div className={'image-double'} >
          <div id={`preview-image-double-c${focus}`}></div>
          <div id={`preview-image-double-d${focus}`}></div>
        </div>

        <div id={`preview-image-single-a${focus}`}></div>

        <div id={`preview-image-large-b${focus}`}></div>
      </div>
    </div>
  )
}
