import { MdLocalPizza as icon } from 'react-icons/md';
import PrinceInput from '../components/PriceInput';

export default {
  // Computer Name
  name: 'pizza',
  // Visible Title
  title: 'Pizzas',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Pizza Name',
      type: 'string',
      description: 'Name of the pizza',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Price of the pizza in cents',
      inputComponent: PrinceInput,
      options: {
        validation: (Rule) => Rule.min(1000),
      },
    },
    {
      name: 'toppings',
      title: 'Toppings',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'topping' }],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      topping0: 'toppings.0.name',
      topping1: 'toppings.1.name',
      topping2: 'toppings.2.name',
      topping3: 'toppings.3.name',
      topping0Veg: 'toppings.0.vegetarian',
      topping1Veg: 'toppings.1.vegetarian',
      topping2Veg: 'toppings.2.vegetarian',
      topping3Veg: 'toppings.3.vegetarian',
    },
    prepare: ({
      title,
      media,
      topping0,
      topping1,
      topping2,
      topping3,
      ...vegToppings
    }) => {
      const toppings = { topping0, topping1, topping2, topping3 };
      // 1. Filter undefined toppings out
      const tops = Object.values(toppings).filter(Boolean);

      // 2. Find if it is a veggie pizza
      const isVeggie = Object.values(vegToppings).every(Boolean);

      // 3. return the preview object for the pizza
      return {
        title: `${title} ${isVeggie ? '🌱' : ''}`,
        media,
        subtitle: tops.join(', '),
      };
    },
  },
};
