import CloseBtn from "../components/shared/close-btn";

import { useCart } from "../context/cart-context";
import { priceFormat } from "../helper/helper";
import Service from "./../components/service";

//get from  server
const balance = 120000;

const CheckOut = () => {
   //get cart from store
   const { state } = useCart();
   const cart = state.cart;

   const totalPriceCart = cart.reduce((acc, curr) => acc + curr.price, 0);

   return (
      <div className="min-h-screen relative text-gray-700">
         <h2 className="text-center  font-semibold text-lg">پرداخت هزینه</h2>
         <div className="mx-auto max-w-max border rounded shadow-dosma shadow-sm py-2 px-4 mt-8 text-sm font-normal">{`موجودی ${priceFormat(
            balance
         )} تومان`}</div>
         <p className="text-center my-8  font-medium text-sm ">
            روش پرداخت سفارشات را انتخاب کنید.
         </p>
         <ul className="py-5 ">
            {cart.map((crt) => {
               return <Service crt={crt} key={crt.id} />;
            })}
         </ul>

         <div className="flex justify-between items-center border-t-2 py-2 border-gray-400 text-sm font-semibold">
            <span>جمع کل سفارشات</span>
            <span>{priceFormat(totalPriceCart)}تومان</span>
         </div>

         <div className="flex justify-between text-dosma items-center border-t-2 py-2  text-sm font-semibold">
            <span> شارژ آنلاین مورد نیاز </span>
            <span>{priceFormat(10000)}تومان</span>
         </div>

         <footer className="bg-white fixed bottom-0 p-4 w-full sm:w-[24rem] inset-x-0 mx-auto">
            {balance < totalPriceCart && <p className="text-center mb-2 text-sm">موجودی ناکافی</p>}
            <button className="primary-button w-full ">{`شارژ کیف پول ${priceFormat(
               10000
            )} تومان`}</button>
         </footer>
         <CloseBtn to="/" />
      </div>
   );
};

export default CheckOut;
