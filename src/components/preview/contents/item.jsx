import { allItems } from "../../all_items";

const getItems = (group) => allItems.filter(item => item.group === group);

export default function Item({group, focus}) {
  let newCategory = '';
  let showableItems = 0;

   return (
    <>
      { getItems(group).map((item) => {
        let variants = [];
        let itemShowable = false;  // the item can be shown

        if (newCategory !== item.category) {
          newCategory = item.category;

          showableItems = 0;
        }

        Object.entries(item.variants).map(variant => {
          const [key, value] = variant;
          const variantId = `${item.name}${key}`;
          const variantIsAvailable = localStorage.getItem(variantId) === null;
          const variantSchedule = sessionStorage.getItem(variantId);

          if (variantIsAvailable || variantSchedule !== null) itemShowable = true;

          variants.push({name: key, id: variantId, price: value.price, available: variantIsAvailable, schedule: variantSchedule})
        })

        if (!itemShowable) {
          return
        } else {
          showableItems += 1;
        }

        return (
          <div className={focus === group ? "preview-item" : "hidden"} >
            <h4 className={(showableItems === 1 && itemShowable) ? "preview-category" : "hidden"}>
              {item.category}
            </h4>

            { variants.map(variant => (

              <div className={variant.schedule !== null || variant.available ? "preview-variant" : "hidden"}>
                <span>
                  {`${(item.category === item.name) ? "" : item.name} ${(variant.name === item.name) ? "" : variant.name}`}

                  <span className={variant.schedule !== null ? "variant-schedule" : 'hidden'}>{variant.schedule}</span>
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
