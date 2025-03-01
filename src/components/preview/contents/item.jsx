import { allItems } from "../../all_items";

const getItems = (group) => allItems.filter(item => item.group === group);

export default function Item({group, focus}) {
  let newName = '';
  let showableItems = 0;

   return (
    <>
      { getItems(group).map((item) => {
        let variants = [];
        let itemShowable = false;  // the item can be shown

        if (newName !== item.name) {
          newName = item.category;

          showableItems = 0;
        }

        Object.entries(item.variants).map(variant => {
          const [key, value] = variant;
          const variantId = `${item.name}${key}`;
          const variantIsAvailable = localStorage.getItem(variantId) === null;

          if (variantIsAvailable) itemShowable = true;

          variants.push({name: key, code: value.code, id: variantId, price: value.price, pax: value.pax, available: variantIsAvailable})
        })

        if (!itemShowable) {
          return
        } else {
          showableItems += 1;
        }

        return (
          <div className={focus === group ? "preview-item" : "hidden"} >
            <h4 className={(showableItems === 1 && itemShowable) ? "preview-category" : "hidden"}>
              {item.name.replace(/ bilao/i, '')}
            </h4>

            { variants.map(variant => (
              <div className={variant.available ? ( variant.code === undefined ? (group === 3 ? 'triple-column': 'preview-variant-no-code') : 'preview-variant') : "hidden"}>
                <span className={variant.code === undefined ? 'hidden' : 'variant-code'}>{`${variant.code === undefined ? '~' : variant.code}`}</span>

                <span>
                  {`${(variant.name === item.name) ? "" : variant.name}`}
                </span>

                <span className={group === 3 ? '' : 'hidden'}>
                  {variant.pax?.min === undefined ? `${variant.pax?.max} pax` : `${variant.pax.min}-${variant.pax.max} pax`}
                </span>

                <span>{`${variant.price}`}</span>
              </div>
            ))}
          </div>
        )}
        )
      }
    </>
  )
}
