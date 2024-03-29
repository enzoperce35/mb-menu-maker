import { useState, useRef } from "react";
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
    <div ref={printRef} className={focus == group ? "preview-content" : "hidden"} >
      <div id="preview-left" >
        <div id="preview-brand" style={{boxShadow: '0 4px 15px -5px black'}}>
          <span className={'brand-corners'} id={"corner-left"} >
            <svg viewBox="0 0 287.5 287.5" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <g transform="matrix(-.035677 0 0 -.035677 264.78 257.77)" stroke="#000" stroke-width="35.278">
                <path d="m2714 2070h-2375v4580h-339v-4920h3054l-340 340z" fill="#eb615b"/>
                <g fill="#eb615b"><path d="m6650 0v339h-4580v2375l-340 340v-3054h4920z"/></g>
                <g fill="#eb6187"><path d="m1018 4513v-3156h-1018v-1357h1357v1018h3156l-340 339h-2816v2816l-339 340zm0-3495v-679h-679v679h679z"/></g>
              </g>
            </svg>
          </span>

          <span className={'brand-corners'} id={"corner-right"} >
            <svg viewBox="0 0 287.5 287.5" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <g transform="matrix(-.035677 0 0 -.035677 264.78 257.77)" stroke="#000" stroke-width="35.278">
                <path d="m2714 2070h-2375v4580h-339v-4920h3054l-340 340z" fill="#eb615b"/>
                <g fill="#eb615b"><path d="m6650 0v339h-4580v2375l-340 340v-3054h4920z"/></g>
                <g fill="#eb6187"><path d="m1018 4513v-3156h-1018v-1357h1357v1018h3156l-340 339h-2816v2816l-339 340zm0-3495v-679h-679v679h679z"/></g>
              </g>
            </svg>
          </span>

          <img src={downloadIcon} data-html2canvas-ignore={true} id={"print-button"} onClick={handleDownloadImage}></img>

          <h5>Madonna's</h5>
        </div>

        <div className="preview-items">
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
