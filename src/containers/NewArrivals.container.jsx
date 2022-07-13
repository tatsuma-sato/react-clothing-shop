import React, { useState } from "react";
import shirt from "../assets/images/blue-t-shirt.jpg";
import {
  Container,
  ButtonContainer,
  Btn,
  Title,
  Border,
} from "../assets/styles/NewArrivals.styles";
import { ProductCard } from "../components";
const categories = ["All", "Women's", "Accessories's", "Men's"];

const NewArrivals = () => {
  const [isActive, setIsActive] = useState(categories[0]);

  return (
    <Container>
      <Title className="section-title">new arrivals</Title>
      <Border className="border"></Border>

      <ButtonContainer className="categories-btn-container">
        {categories.map((category) => {
          return (
            <Btn
              className="categories-btn"
              isActive={isActive === category}
              value={category}
              key={category}
              onClick={() => setIsActive(category)}
            >
              {category}
            </Btn>
          );
        })}
      </ButtonContainer>

      {/* Products List */}
      <div className="list">
        {Array.from({ length: 10 }, (v, i) => {
          return <ProductCard img={shirt} name="shirt" price={30} />;
        })}
      </div>
    </Container>
  );
};

// const CategoryButton = () => {
//   const [isActive, setIsActive] = useState(false);

//   return (
//     <Btn
//       className="categories-btn"
//       isActive={isActive}
//       onClick={() => setIsActive(!isActive)}
//     >
//       All
//     </Btn>
//   );
// };

export default NewArrivals;
