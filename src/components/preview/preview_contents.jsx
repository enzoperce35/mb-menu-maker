import { useState, useRef } from "react";
import html2canvas from "html2canvas";
import { default as downloadIcon} from "../../assets/download_icon.svg"

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
    <div ref={printRef} className={focus == group ? "preview-content" : "hidden"} >
      <div id="preview-left" >
        <div id="preview-brand">
          <img src={downloadIcon} data-html2canvas-ignore={true} id={"print-button"} type="button" onClick={handleDownloadImage}></img>
        </div>

        <div id="prev-content">
          {group}
        </div>
      </div>

      <div id="preview-right"></div>
    </div>
  )
}
