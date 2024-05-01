import React from "react";

const products = [
  { title: "Cabbage", id: 1 },
  { title: "Garlic", id: 2 },
  { title: "Apple", id: 3 },
  { title: "Apple", id: 4 },
  { title: "Apple", id: 5 },
  { title: "Apple", id: 6 },
  { title: "Apple", id: 7 },
  { title: "Apple", id: 8 },
];

function RenderingList() {
  return (
    <div className="p-5 font-bold text-lg">
      RenderingList
      <div>
        {products.map((item) => {
          return (
            <div key={item.id} className="bg-pink-800 mt-3 font-semibold text-sm">
              This is Title : {item.title} {item.id}
            </div>
          );
        })}
      </div>
    </div>
  );
}


export default RenderingList;