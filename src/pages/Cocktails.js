import React from "react";
import MainLayout from "../layout/MainLayout";
import cocktail from "../data";

function Cocktails() {
  const asideData = (
    <div>
      {/* Insert your aside content here */}
      <h2 className="text-center">Aside Header</h2>
      <p>This is the data for the aside element.</p>
    </div>
  );

  console.log(`Cocktail`, cocktail);
  return (
    <MainLayout asideData={asideData}>
      {cocktail.map((info) => (
        <Cocktail
          cocktail={info.name}
          ingredients={info.ingredients}
          image={info.image}
          key={info.id}
        />
      ))}
    </MainLayout>
  );
}

function Cocktail({ ingredients, cocktail, image, key }) {
  return (
    <div key={key} className="card  w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={cocktail} />
      </figure>
      <div className="card-body">
        <h2 className="card-title capitalize">{cocktail}</h2>
        <p>{ingredients}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Read More</button>
        </div>
      </div>
    </div>
  );
}

export default Cocktails;
