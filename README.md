LIGHTHOUSE AW WEB APP

This Rails application featuring a Next.js client is built as an information and donation website for Lighthouse AW.

This website is currently deployed to https://lighthouseaw.org/.

Due to the intuitive routing structure of Next.js, the components are largely named the same as the route that exists in the deployed website. Also due to the render of this website, the project can not be cloned and deployed as it currently exists in this repo. In order to deploy this application locally, follow these steps:

    1. Remove all controllers from the '/app/controllers/api' folder and move them one level up, into the 'controllers' folder.
    2. In the '/config/routes.rb' file, remove everything on line 2 and on line 18    .
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

    6. Run 'rails s' in one terminal instance.
    7. Run 'npm i --prefix client && npm run dev --prefix client' in another terminal instance.

