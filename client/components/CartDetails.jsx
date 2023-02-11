import React, { useContext, useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link';
// import Cirrus from '../public/logos/payments/cirrus.svg'
// import Maestro from '../public/logos/payments/maestro.svg'
// import Mastercard from '../public/logos/payments/mastercard.svg'
// import PayPal from '../public/logos/payments/paypal.svg'
// import Sofort from '../public/logos/payments/sofort.svg'
// import Visa from '../public/logos/payments/visa.svg'
import CartItemCard from './CartItemCard'
import ArrowLeft from '../public/icons/arrow-left--dark.svg'
import CartContext from '../contexts/CartContext';
import { checkout } from "./Checkout"
import StripeCheckout from 'react-stripe-checkout';


export default function CartDetails () {
    const [cart, setCart] = useContext(CartContext);

    let total_cart_items = 0
    let total = 0
    let quantity = 0

    const updateCartItem = (item) => {
        setCart(cart.map(i => i.id === item.id ? item : i));
    }

    const handleDeleteData = (id) => {
        const updatedCart = cart.filter((item) => item.id != id)
        setCart(updatedCart)
    }

    const createCartItems = cart?.map((cartItem) => {
        console.log(cartItem)
        total += cartItem.lease.price
        return <CartItemCard
            key={cartItem.id}
            cartItem={cartItem}
            updateCartItem={updateCartItem}
            handleDeleteData={handleDeleteData}
        />
    });

    useEffect(() => {
        if (!cart) {
            return;
        }
    }, [cart]);

    const onToken = (token) => {

        const charge = {
            token: token.id
        };
    
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ charge: charge, price: total * 100 })
        };
    
        fetch(CHARGES_URL, config)
        .then(res => res.json())
        .then(console.log)
    }

    const handlePurchase = () => {
        fetch("/api/orders/purchase", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                cartId: cart.id
            })
            })
            .then(response => {
                if (response.ok) {
                return response.json();
                } else {
                throw new Error("Failed to purchase");
                }
            })
            .then(data => {
                console.log("Purchase successful:", data);
                // Do something with the successful purchase data
            })
            .catch(error => {
                console.error("Error while purchasing:", error);
            });
        };

    if (!cart) {
        return (
        <div className="mt-32 w-screen">
            <div className="ml-32">
                <h1 className="font-bold text-4xl mt-5">Shopping Cart</h1>
                <Link href="/instrumentals" className='flex items-center mt-5 -ml-4 cursor-pointer '>
                    <Image src={ArrowLeft} alt="Arrow Left" width="48" height="48" />
                    <p className='-ml-2 font-medium'>Keep Shopping</p>
                </Link>
            </div>
            <div className="text-center h-[50vh]">
                <h1 className='text-4xl font-bold mb-10 pt-32'>Your cart is empty</h1>
                <Link href='/instrumentals'>
                    <button className="bg-black text-white rounded-full text-base font-medium m-2 py-3 px-32">Keep Shopping</button>
                </Link>
            </div>
        </div>
        );
    }


    return (
        <div className="grid grid-cols-2 mt-20 ml-32">
            <div>
                <h1 className="font-bold text-4xl mt-5">Shopping Cart</h1>
                <Link href="/instrumentals" className='flex items-center mt-5 -ml-4 cursor-pointer '>
                    <Image src={ArrowLeft} alt="Arrow Left" width="48" height="48"/>
                    <p className='-ml-2 font-medium'>Keep Shopping</p>
                </Link>
                <div className='mt-5 divide-y'>
                    {createCartItems}
                </div>
            </div>
            <div className="bg-stone-100">
                <div className="grid grid-row-1 divide-y ml-20 max-w-[600px]">
                    <h1 className="font-bold text-4xl mb-10 mt-5">Order Summary</h1>
                    <div className='py-5'>
                        <button className='text-base'>+ Apply discount</button>
                        <form></form>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <td className="pt-5 font-medium">
                                    Subtotal <span>({total_cart_items} product{total_cart_items > 1 ? "s" : null})</span>
                                </td>
                                <td className='pt-5 font-medium text-right'>
                                    <span>$ {total}.00</span>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='text-base font-light pb-2'>Taxes</td>
                                <td className='text-sm font-normal italic pb-2 text-right'>taxes will be calculated at checkout</td>
                            </tr>
                            <tr className='border-b'>
                                <td className='text-base font-bold pb-10'>Total</td>
                                <td className='text-base font-bold pb-10 text-right'><span>$ {total}.00</span></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='items-center text-center mt-2'>
                        <button onClick={handlePurchase}
                            className='bg-black text-white rounded-full text-sm m-2 py-3 px-64'
                        >
                            Success Test
                        </button>
                        <StripeCheckout
                            token={onToken}
                            stripeKey={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}