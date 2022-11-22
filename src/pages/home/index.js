import React, { useEffect, useState } from "react";
import ItemBox from "../../components/item_box";
import useApi from "../../hooks/useApi";

const Home = () => {
  const api = useApi();
  const [categoryBoxes, setCategoryBoxes] = useState([]);

  useEffect(() => {
    api
      .get(
        "public/categories/listMainCategories"
      )
      .then((result) => {
        const tempCategoryBoxes = [];

        result.data.data.map((item, index) => {
          //console.log('>> ITEM', index, item);

          tempCategoryBoxes.push(
            <ItemBox
              key={index}
              id={item.id}
              name={item.name}
              image={item.image}
              slug={item.slug}
            />
          );

          setCategoryBoxes(tempCategoryBoxes);
        });
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <main>
        <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
          <h1 className="display-4 fw-normal">Service Founder</h1>
          <p className="fs-5 text-muted">
            Please click one of categories below
          </p>
        </div>
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          {categoryBoxes}
        </div>
      </main>
    </div>
  );
};

export default Home;
