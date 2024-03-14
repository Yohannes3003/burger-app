import { formatNumber } from '../../utils/helper';

export default function OrderPicker({ allIngredients = [], manageIngredients, isReachMax }) {
  const disabledStyle = `bg-gray-400`;
  return (
    <section className="container mx-auto">
      {isReachMax && <p className="text-center mb-5">Udah full</p>}
      <div className="grid grid-cols-4 gap-8 max-w-sm w-full mx-auto">
        {allIngredients.map((item) => (
          <div
            key={item?.id}
            className={`flex flex-col items-center cursor-pointer hover:scale-[0.95] active:opacity-80 bg-amber-300 rounded-md p-2 ${isReachMax && disabledStyle}`}
            onClick={() => (isReachMax ? null : manageIngredients(item?.id))}
          >
            <p className="font-bold">{item?.name}</p>
            <p className="text-sm">Rp{formatNumber(item?.price)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
