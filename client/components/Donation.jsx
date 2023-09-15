import React, { useEffect } from 'react';
import $ from 'jquery';

export default function Donation() {
    useEffect(() => {
        function calculateRegistration() {
            var amount = parseInt($('input[name="donate-amount"]:checked').val());
            var donationAmount = isNaN(amount) ? 0 : amount;
            return donationAmount;
        }

        function buildUrl() {
            var donationAmount = calculateRegistration();
            var campaign_id = 'YOUR_CAMPAIGN_ID_HERE'; // Replace with your campaign ID

            var url = 'https://testorg.kindful.com/widget?campaign_id=' + campaign_id;
            url += '&schedule=0';
            url += '&success_action=GET';
            url += '&success_url=http%3A//testorg.org/';
            url += '&cart[desc]=Test Donation';

            if (donationAmount > 0) {
            url += '&cart[items][0][amount]=' + donationAmount;
            url += '&cart[items][0][desc]=Online Donation';
            url += '&cart[items][0][product_id]=online_donation';
            url += '&cart[items][0][quantity]=1';
            }

            window.location.href = url;
        }

        // Event listener to trigger the buildUrl function when needed
        $('input[name="donate-amount"]').change(buildUrl);
    }, []);

    return (
        <div className="row">
            <div className="donate-options">
                <label>
                    <input type="radio" value="25" name="donate-amount" /> $25
                </label>
                    <label>
                <input type="radio" checked value="50" name="donate-amount" /> $50
                    </label>
                <label>
                    <input type="radio" value="100" name="donate-amount" /> $100
                </label>
            </div>
        </div>
    );
}
