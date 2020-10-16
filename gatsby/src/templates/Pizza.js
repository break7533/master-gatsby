import { graphql } from 'gatsby';
import React from 'react';

export default function SinglePizzaPage() {
  return <div>Single Page</div>;
}

// This will be dynamic according to the slug
export const query = graphql`
  query($slug: String!) {
    pizza: sanityPizza(slug: { current: { eq: $slug } }) {
      name
      id
      image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
      toppings {
        name
        id
        vegetarian
      }
    }
  }
`;
