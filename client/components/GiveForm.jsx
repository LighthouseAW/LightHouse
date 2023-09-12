import React, { useState } from 'react';

export default function GiveForm() {
    const [amount, setAmount] = useState('');
    const now = new Date();
    const timestamp = now.toISOString();
    const [schedule, setSchedule] = useState('0');
    // console.log('Kindful API Token:', process.env.NEXT_PUBLIC_TOKEN);
    // const [formData, setFormData] = useState({
    //     id: '',
    //     title: '',
    //     firstName: '',
    //     lastName: '',
    //     company_name: '',
    //     gender: '',
    //     employer: '',
    //     email: '',
    //     alt_email: '',
    //     addr1: '',
    //     addr2: '',
    //     city: '',
    //     state: '',
    //     postal: '',
    //     country: '',
    //     birthday: '',
    //     primary_phone: '',
    //     alt_phone: '',
    //     fax_phone: '',
    //     spouse_first: '',
    //     spouse_last: '',
    //     stripe_customer_id: '',
    //     authorize_customer_id: '',
    //     paypal_payer_id: '',
    //     created_at: '',
    //     transaction_id: '',
    //     amount_in_cents: '',
    //     currency: '',
    //     transaction_time: '',
    //     campaign: '',
    //     campaign_id: '',
    //     fund: '',
    //     fund_id: '',
    //     acknowledged: '',
    //     transaction_note: '',
    //     stripe_charge_id: '',
    //     authorize_transaction_id: '',
    //     paypal_transaction_id: '',
    //     transaction_type: '',
    //     was_refunded: '',
    //     check_num: '',
    //     card_type: '',
    //     non_tax_deductible_amount_in_cents: '',
    //     is_donation: '',
    //     cause: '',
    //     cause_id: '',
    //     team: '',
    //     team_id: '',
    //     team_member_first_name: '',
    //     team_member_last_name: '',
    //     team_member_id: ''
    // });

    const [formData, setFormData] = useState({
        id: '',
        title: 'ITsWORKING',
        firstName: 'react',
        lastName: 'app',
        company_name: 'ReactApp',
        gender: '',
        employer: 'ReactApp',
        email: 'ianholsteen@gmail.com',
        alt_email: 'ianholsteen@gmail.com',
        addr1: '123 ABC Ln.',
        addr2: 'Apt. 1001',
        city: 'Nashville',
        state: 'TN',
        postal: '37206',
        country: 'United States',
        birthday: '1985/02/13',
        primary_phone: '555-555-5555',
        alt_phone: '555-555-5555',
        fax_phone: '555-555-5555',
        spouse_first: '',
        spouse_last: '',
        stripe_customer_id: '',
        authorize_customer_id: '',
        paypal_payer_id: '',
        created_at: '2023-09-04 18:56:12 UTC',
        transaction_id: '987654',
        amount_in_cents: '5000',
        currency: 'usd',
        transaction_time: '2023-09-04 18:56:12 UTC',
        campaign: 'General',
        campaign_id: '123abc',
        fund: 'General',
        fund_id: '456def',
        acknowledged: 'true',
        transaction_note: 'This is a transaction note',
        stripe_charge_id: '',
        authorize_transaction_id: '',
        paypal_transaction_id: '',
        transaction_type: 'Cash',
        was_refunded: 'false',
        check_num: '',
        card_type: 'Mastercard',
        non_tax_deductible_amount_in_cents: '500',
        is_donation: 'true',
        cause: 'General',
        cause_id: '12345',
        team: 'Team John',
        team_id: '12345',
        team_member_first_name: 'John',
        team_member_last_name: 'Smith',
        team_member_id: '12345'
    });

    function updateAmount(newAmount) {
        setAmount(newAmount);
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    function createDonationData() {
        const data = {
            "data_format": "contact_with_transaction",
            "action_type": "update",
            "data_type": "json",
            "data": [
                {
                    "id": "id_09",
                    "title": formData.title,
                    "first_name": formData.firstName,
                    "last_name": formData.lastName,
                    "company_name": formData.company_name,
                    "gender": formData.gender,
                    "employer": formData.employer,
                    "email": formData.email,
                    "alt_email": formData.alt_email,
                    "addr1": formData.addr1,
                    "addr2": formData.addr2,
                    "city": formData.city,
                    "state": formData.state,
                    "postal": formData.postal,
                    "country": formData.country,
                    "birthday": formData.birthday,
                    "primary_phone": formData.primary_phone,
                    "alt_phone": formData.alt_phone,
                    "fax_phone": formData.fax_phone,
                    "spouse_first": formData.spouse_first,
                    "spouse_last": formData.spouse_last,
                    "stripe_customer_id": formData.stripe_customer_id,
                    "authorize_customer_id": formData.authorize_customer_id,
                    "paypal_payer_id": formData.paypal_payer_id,
                    "created_at": formData.created_at,
                    "transaction_id": formData.transaction_id,
                    "amount_in_cents": formData.amount_in_cents,
                    "currency": formData.currency,
                    "transaction_time": formData.transaction_time,
                    "campaign": formData.campaign,
                    "campaign_id": formData.campaign_id,
                    "fund": formData.fund,
                    "fund_id": formData.fund_id,
                    "acknowledged": formData.acknowledged,
                    "transaction_note": formData.transaction_note,
                    "stripe_charge_id": formData.stripe_charge_id,
                    "authorize_transaction_id": formData.authorize_transaction_id,
                    "paypal_transaction_id": formData.paypal_transaction_id,
                    "transaction_type": formData.transaction_type,
                    "was_refunded": formData.was_refunded,
                    "check_num": formData.check_num,
                    "card_type": formData.card_type,
                    "non_tax_deductible_amount_in_cents": formData.non_tax_deductible_amount_in_cents,
                    "is_donation": formData.is_donation,
                    "cause": formData.cause,
                    "cause_id": formData.cause_id,
                    "team": formData.team,
                    "team_id": formData.team_id,
                    "team_member_first_name": formData.team_member_first_name,
                    "team_member_last_name": formData.team_member_last_name,
                    "team_member_id": formData.team_member_id
                }
            ]
        };
        return data;
    }

    // const apiUrl = 'https://app-sandbox.kindful.com/api/v1/imports';

    // async function submitDonation() {
    //     if (isValidDonation()) {
    //         const requestBody = createDonationData();

    //         const requestOptions = {
    //             method: 'POST',
    //             headers: {
    //                 'Authorization': `Token token="${process.env.NEXT_PUBLIC_TOKEN}"`,
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(requestBody),
    //         };

    //         console.log(requestOptions.headers);
    //         console.log(requestOptions.body)
    
    //         try {
    //             const response = await fetch(apiUrl, requestOptions);
    //             if (!response.ok) {
    //                 throw new Error(`Request failed with status ${response.status}`);
    //             }
    
    //             const data = await response.json();
    //             console.log('Response data:', data);
    //             // Handle the response data from Kindful here
    //             // You might want to redirect to a thank-you page or process the response
    //         } catch (error) {
    //             // Handle any errors here
    //             console.error('Fetch Error:', error);
    //         }
    //     } else {
    //         // Display an error message if needed
    //         // document.getElementById('donate-message').style.display = "block";
    //     }
    // }

    function updateAmount(newAmount) {
        setAmount(newAmount);
    }

    async function submitDonation() {
        if (isValidDonation()) {
            buildUrl();
        } else {
            // Display an error message if needed
            // document.getElementById('donate-message').style.display = "block";
        }
    }

    function getAmount() {
        return parseFloat(amount.toString().replace('$', '').replace(/,/g, ''));
    }

    function isValidDonation() {
        return getAmount() > 0;
    }

    function calculateRegistration() {
        var donationRadios = document.querySelectorAll('input[name="amount"]');
        var donation_amount = 0;

        donationRadios.forEach(function (radio) {
            if (radio.checked) {
                donation_amount = parseInt(radio.value);
            }
        });

        return isNaN(donation_amount) ? 0 : donation_amount;
    }

    function buildUrl() {
        var items = 0;
        var donation_amount = calculateRegistration();
        var campaign_id = "0000"; // Substitute with your Kindful campaign ID

        var url = `https://testorg.kindful.com/widget?campaign_id=${campaign_id}`;
        url += "&schedule=0";
        url += "&success_action=GET";
        url += "&success_url=http%3A//testorg.org/";
        url += "&cart[desc]=Test Donation";

        if (donation_amount > 0) {
            url += `&cart[items][${items}][amount]=${donation_amount}`;
            url += "&cart[items][" + items + "][desc]=Online Donation";
            url += "&cart[items][" + items + "][product_id]=online_donation";
            url += "&cart[items][" + items + "][quantity]=1";
            items++;
        }

        if (items > 0) {
            window.location.href = url;
        } else {
            alert('Please select a donation amount');
        }
    }

    return (
        <form className="p-4 bg-white text-black shadow-md rounded-lg z-20">
        <span id="donate-message" className="text-black">
            Please enter a valid amount.
        </span>
        <div className="my-4">
            <div className="flex items-center space-x-4">
            <label>
                <input
                type="radio"
                name="amount"
                onClick={() => updateAmount(50)}
                className="form-radio text-blue-500"
                />{" "}
                $25
            </label>
            <label>
                <input
                type="radio"
                name="amount"
                onClick={() => updateAmount(100)}
                className="form-radio text-blue-500"
                />{" "}
                $50
            </label>
            <label>
                <input
                type="radio"
                name="amount"
                onClick={() => updateAmount(250)}
                className="form-radio text-blue-500"
                />{" "}
                $75
            </label>
            {/* <label>
                <input
                type="radio"
                name="amount"
                onClick={() => updateAmount(100)}
                className="form-radio text-blue-500"
                />{" "}
                $100
            </label> */}
            {/* Other radio buttons */}
            </div>
        </div>
        <div className="my-4">
            <label htmlFor="amount" className="block text-gray-600">
            </label>
            <input
            type="text"
            name="amount"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder='Enter your gift amount'
            />
        </div>
        <div className="my-4">
            <div className="flex items-center space-x-4">
            {/* ... (existing schedule radio buttons) */}
            </div>
        </div>
        <div className="my-4">
            <label htmlFor="firstName" className="block text-black">
            First Name*:
            </label>
            <input
            type="text"
            name="firstName"
            id="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
        </div>
        <div className="my-4">
            <label htmlFor="lastName" className="block text-black">
            Last Name*:
            </label>
            <input
            type="text"
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
        </div>
        <div className="my-4">
            <label htmlFor="email" className="block text-black">
            Email*:
            </label>
            <input
            type="text"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
        </div>
        <div className="my-4">
            <label htmlFor="company_name" className="block text-black">
            Address*:
            </label>
            <input
            type="text"
            name="company_name"
            id="company_name"
            value={formData.company_name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
        </div>
        {/* Add more form fields here */}
        <div className="my-4">
            <button
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none"
            onClick={submitDonation}
            >
            Donate
            </button>
        </div>
    </form>
    );
}