import { useState } from "react";
import { allItems } from "../all_items";

const getItems = (group) => allItems.filter(item => item.group === group);

export default function Contents({focus,group}) {
  const [contents, setContents] = useState(getItems(group))
  console.log(contents)

  return (
    <div className={focus === group ? "preview" : "hidden"}>
      <div className="prev-left">
        <div className="prev-brand"></div>
          <div id="prev-content">
            {group}
          </div>
      </div>

      <div className="prev-right"></div>
    </div>
  )
}
