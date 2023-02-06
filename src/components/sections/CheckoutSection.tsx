"use client";

import { Elements } from "@stripe/react-stripe-js";
// import { getClientStripe } from "../../lib/clients/AWS";
import CheckoutForm from "../forms/CheckoutForm";
import { useCartContext } from "../../providers/CartContextProvider";
import { useEffect } from "react";
import { OrderDetails } from "../../app/checkout/[orderId]/page";
import CartCard from "../cards/CartCard";
import { displayNumbers } from "../../helpers/numbers";

interface CheckoutSectionProps {
  paymentIntentClientSecret: string;
  order: OrderDetails;
}
const CheckoutSection = ({
  paymentIntentClientSecret,
  order,
}: CheckoutSectionProps) => {
  const { setCartItems } = useCartContext();

  useEffect(() => {
    setCartItems([]);
    // eslint-disable-next-line
  }, []);

  // const stripeClientPromise = getClientStripe();

  const { orderItems } = order;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="hidden grid-cols-1 px-4 md:block md:py-20">
        <h2 className="mb-4 text-2xl font-black">
          Your Cart ({orderItems.length}):
        </h2>
        <>
          {orderItems.map((item, idx) => (
            <CartCard
              index={idx}
              key={item.id + idx}
              item={{
                id: item.product.id,
                image: item.product.image,
                name: item.product.name,
                size: item.size,
              }}
              price={item.product.price}
              disableAction
            />
          ))}
          <div className="my-5 border-t border-zinc-300" />
          <div className="flex w-full flex-col items-end">
            <p className="mb-2 font-medium">Your Total</p>
            <h2 className="mb-4 text-4xl font-black text-red-800">
              $
              {displayNumbers(
                order.orderItems.reduce(
                  (acc, curr) => acc + curr.product.price,
                  0
                )
              )}
            </h2>
          </div>
        </>
      </div>
    </div>
  );
};

export default CheckoutSection;
