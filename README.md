LIGHTHOUSE AW WEB APP

This Rails application featuring a Next.js client is built as an information and donation website for Lighthouse AW.


This website is currently deployed to https://lighthouseaw.onrender.com/.

Due to the intuitive routing structure of Next.js, the components are largely named the same as the route that exists in the deployed website. Also due to the render of this website, the project can not be cloned and deployed as it currently exists in this repo. In order to deploy this application locally, follow these steps:

    1. Remove all controllers from the '/app/controllers/api' folder and move them one level up, into the 'controllers' folder.
    2. In the '/config/routes.rb' file, remove everything on line 3 and on line 24.
    3. In the '/client/next.config.js' file, change the entirety of line 9 to the following code:

        module.exports = {
            async rewrites() {
                return [
                    {
                        source: '/api/:path*',
                        destination: 'http://localhost:3000/:path*'
                    }
                ]
            },
        }

    4. In the  'client/pages/instrumentals/[id]' file, change the url on line 49 to the following:

        const audioUrl = `http://localhost:3000${instrumental && instrumental.audio_files && instrumental.audio_files[0].file}`

    5. Repeat step 4 for the 'client/pages/instrumentals/index' file. Change line 54 to the following:

    const audioUrl = `http://localhost:3000${instrumental.audio_files[0].file}`;

    6. Run 'rails s' in one terminal instance.
    7. Run 'npm i --prefix client && npm run dev --prefix client' in another terminal instance.

The image below (or found at public/images/image.png) is the map that I created to sketch out my database before creating the rails application. I'll describe the flow below as well:
A genre has many instrumentals; an instrumental has many audio files, an audio file belongs to a lease and also to an instrumental. A lease has one audio file, and also has many orders, and has many users through orders. An order has one lease, and thus has one audio file through the lease, and also belongs to a cart. A cart has many orders, has many leases, through orders, and belongs to a user. A user has one cart, and has many orders, through that cart. A user also has many purchases. Finally, a purchase has many orders, and belongs to a user.

Contents:

    App:

        Holds all models, controllers, and serializers for the database described above.

    db:

        Holds the schema and individual tables for the database described above.


    Client:

        Components:

            Account:

                This is the default page for the log-in/sign-up/account page. If you aren't signed in, you'll see here that you are a guest and you have the options to sign in.

            Cart Details / Cart Item Card:

                This component holds the map over the orders inside the associated cart (signed in user or guest, if not signed in); and displays each lease in a Cart Item Card componenet. The Cart Details component also holds the logic for creating a Stripe charge call with the dollar amount specified by the sum of the cost of the leases in the cart. This component also holds the logic to apply a discount to the total if a user is signed in.

            Contract Download/Download Button:

                These components hold the logic for delivering the active storage link to a lease contract and the audio file that was purchased through the cart.

            Footer / NavBar / Hero:

                Just what it sounds like, the navbar and footer for the app. Hero component displays the image behind manyh of the pages.

            Purchases:

                This component maps over the purchases made by a user, if they exist. This component is inherited by the account component and will display in a user's account if they have made any purchases.

            SignIn / SingUp:

                These components hold the logic to accept a users info in a form and sends it to the db to either create a new user account or sign a user into an existing account. These components are both inherited by the Account component.

            YoutubeEmbed:

                This component is used to embed youtube videos into the about page.

        Pages:

            _app.js / _document.js / index.js:

                These components are the base for any Next.js application. The page index.js acts as the default / route; the page _app.js holds the user and cart context, and the page _document.js holds the html return that becomes the full html page. more information about this flow can be learned in the Next.js documentation: https://nextjs.org/docs/getting-started.

            Instrumentals:

                This folder holds the index and individual routes to the instrumental files. the index route maps over the full database of files in the Active Storage db, and places them in the AudioPlayer component. The audio player component is inherited from the npm package 'react-h5-audio-player', a customizable pre-built audio component, more information can be found here: https://www.npmjs.com/package/react-h5-audio-player.
                Each audio file is associated with a button that adds that audio file to cart. As described above, each audio file is associated with a song, which has associated licenses. The button on each song in the index route will add the mp3 lease to the cart, and the license can then be modified inside the cart. If the unique route for the song is visited, all license options are shown and a button is availble for each one to be added the cart.

            About / about.js:

                This page and route contains hard coded information about the music producer, along with a photo and a number of youtube videos embedded inside. This page inherits from a component in the components folder called YoutubeEmbed.js; this component returns an iframe containing the youtubeURL.

            cart.js:

                This page inherits the cart details and displays all cart information for a user, if they have any items in their cart. This page holds the logic to display an empty message and a return button if the user has no items in their cart.

            contact.js:

                This page uses emailjs to send an email to the producer when the contact form has been filled out. This component holds the logic to display a success message if the form has been submitted.

            login.js:

                This page holds all account, LogIn, and SignIn features, depending on the logged in state of the user. If a user is not signed in, they will only have the ability to sign in or create an account.

            placements.js:

                This page inherits the spotify component and embeds the specified spotify title, playable with the signin capability and unique colors based on the title.

