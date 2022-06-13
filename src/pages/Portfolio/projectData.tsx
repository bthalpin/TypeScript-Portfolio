export const projectData = [
    {
        name:'Raffles of Love',
        deployed:'https://charity-raffle.herokuapp.com/',
        github:'https://github.com/bthalpin/Raffles-of-Love',
        class:'projectOne',
        summary:"Raffles of Love is a charity raffle page.  Each participating charity has a page where they can raffle off products and share information about their organization.  Buying a ticket will take you to the Stripe checkout page (This is a demo app.  Enter card 4242 repeating for the test card. This app is not affiliated with these charities, and no real products are being raffled off).  Once all of the raffle tickets are sold for an item, a winning ticket will be selected.  If a user's account is upgraded to a charity admin, they will be given a blank charity to edit and have the ability to create their own raffles (user: charityAdmin@gmail.com pass: 12345678 is currently a demo charity admin).",
        technology:'HTML/CSS, React-Bootstrap, JavaScript, React, Apollo, GraphQL, Mongoose, Node, Express, bcrypt, JSON Web Tokens, Stripe',
        disclaimer: '*This app is deployed on Heroku free server.  The server may take a moment to start.'
    },
    {
        name:'SnapShot',
        deployed:'https://bh-snapshot.herokuapp.com/',
        github:'https://github.com/bthalpin/SnapShot',
        class:'projectTwo',
        summary:"A brand new social app where you can unlock a new world of networking through posting pictures that represent who you are and what you stand for. Users can browse other members posts and leave a comment if you see something you like! Bet you can't wait to sign up!",
        technology:'HTML/CSS, Bootstrap, JavaScript, Handlebars, Node, Express, MySQL, Sequelize',
        disclaimer:'*This app is deployed on Heroku free server.  The server may take a moment to start.'
    },
    {
        name:'What Movie Was That?',
        deployed:'https://bthalpin.github.io/What-Movie-Was-That/',
        github:'https://github.com/bthalpin/What-Movie-Was-That',
        class:'projectThree',
        summary:'What Movie Was That? uses OMDB API to search the movie database.  It returns up to ten movies related to your search.  Once you select the correct movie the app will load movie details and it will display a trailer for the movie using YouTube API.  If you find a movie you like, add it to your favorites list so you can remember it.',
        technology:'HTML/CSS, Bulma, JavaScript, YouTube API, OMDB API',
        disclaimer:''

    },
    {
        name:'Weather Forecast',
        deployed:'https://bthalpin.github.io/Weather-Forecast/',
        github:'https://github.com/bthalpin/Weather-Forecast',
        class:'projectFour',
        summary:'Weather Forecast is a real time weather app that uses OpenWeather API (as well as OpenWeather Geocoding API to convert city names into coordinates) for up to date weather information for any city.  It displays the current weather data as well as the weather for the next five days.  ',
        technology:'HTML/CSS, JavaScript, jQuery, OpenWeather API, OpenWeather Geocoding API',
        disclaimer:''

    },
    {
        name:'PWA Text Editor',
        deployed:'https://text-editor-bh.herokuapp.com/',
        github:'https://github.com/bthalpin/text-editor-app',
        class:'projectFive',
        summary:'PWA Text Editor is a text editor that saves your changes using IndexDB when you click off the editor.  The text editor is also a Progressive Web App(PWA) that allows you to install the app and use it not only outside of the browser, but also allows you to continue using it offline.',
        technology:'HTML/CSS, JavaScript, Progressive Web App, Workbox-WebPack, IndexedDB, Node, Express',
        disclaimer:''

    },
    {
        name:'Messaging App',
        deployed:'https://bthalpin.github.io/messagingApp/',
        github:'https://github.com/bthalpin/messagingApp',
        class:'projectSix',
        summary:'Messaging App is a real time text messaging app.  Post in the public chat, or chat in the friends only chat.  You can press the like button if you see a post that you like and if you want to message someone directly, send them a friend request.',
        technology:'HTML/CSS, JavaScript, React, Node, Express, Postgres, Knex, Socket.io, bcrypt',
        disclaimer:'*This app uses Heroku free tier for the node server.  The server may take a moment to start.'

    },
]