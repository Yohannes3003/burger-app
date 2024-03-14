import '../../page/order/breadcolor.css';
import { useEffect, useState } from 'react';
import OrderDisplay from './OrderDisplay';
import OrderHeader from './OrderHeader';
import OrderPicker from './OrderPicker';
import { Link, useLocation, useRoutes } from 'react-router-dom';

const allIngredients = [
  {
    id: 'cheese',
    name: 'Cheese',
    price: 5000,
  },
  {
    id: 'lettuce',
    name: 'Lettuce',
    price: 1000,
  },
  {
    id: 'tomato',
    name: 'Tomato',
    price: 2500,
  },
  {
    id: 'pickles',
    name: 'Pickles',
    price: 2000,
  },
  {
    id: 'meat',
    name: 'Meat',
    price: 14000,
  },
  {
    id: 'mayo',
    name: 'Mayo',
    price: 4000,
  },
  {
    id: 'sauce',
    name: 'Sauce',
    price: 4000,
  },
];

export default function OrderPage() {
  const [selectedIngredients, selectedIngredientsSet] = useState([]);
  const [isReachMax, isReachMaxSet] = useState(false);
  const [isDone, isDoneSet] = useState(false);

  const { search } = useLocation();

  function manageIngredients(type, id, idx) {
    if (type === 'add') {
      selectedIngredientsSet((prev) => [...prev, id]);
    }
    if (type === 'remove') {
      selectedIngredientsSet((prev) => {
        const filtered = [...prev].filter((_, index) => index !== idx);
        return filtered;
      });
    }
  }

  useEffect(() => {
    if (selectedIngredients.length >= 10) {
      isReachMaxSet(true);
    }
  }, [selectedIngredients]);

  useEffect(() => {
    if (new URLSearchParams(search).get('done') === 'true') {
      isDoneSet(true);
    }
  }, [search]);

  if (isDone)
    return (
      <div className="baru">
        <h1 className="flex justify-center mt-5">Your order has been done</h1>
        <img src="../../..//src/assets/burger.png"></img>
        <Link to="/" className="bg-blue-400 rounded-lg flex justify-center mt-5 py-2 px-6">
          Back to home
        </Link>
      </div>
    );

  return (
    <section>
      <OrderHeader allIngredients={allIngredients} selectedIngredients={selectedIngredients} onReset={() => selectedIngredientsSet([])} />
      <OrderDisplay selectedIngredients={selectedIngredients} removeIngredient={(idx) => manageIngredients('remove', undefined, idx)} />
      <OrderPicker allIngredients={allIngredients} manageIngredients={(id) => manageIngredients('add', id)} isReachMax={isReachMax} />
    </section>
  );
}
