import { useState, useRef } from "react";
import html2canvas from "html2canvas";
import Item from "./item";
import {default as downloadIcon} from "../../../assets/icons/download_icon.svg"
import {default as corner} from "../../../assets/icons/brand_corner.svg"

export default function Contents({focus, group}) {
  const printRef = useRef();

  const handleDownloadImage = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element, { scale: 1.1 });

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
          <img src={corner} className={'brand-corners'} id={"corner-left"} ></img>
          <img src={corner} className={'brand-corners'} id={"corner-right"} ></img>
          <img src={downloadIcon} data-html2canvas-ignore={true} id={"print-button"} onClick={handleDownloadImage}></img>
          <h5>Madonna's</h5>
        </div>

        <div class="preview-items">
          <h2>Available Today</h2>

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
