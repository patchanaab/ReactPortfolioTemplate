import self from "../img/self.png"
import mock1 from "../img/mock1.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(70,96,96)", "rgb(192,192,192)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Patchanapong",
    lastName: "Meetam",
    initials: "js", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '🚢',
            text: 'Career Changer'
        },
        {
            emoji: '🌎',
            text: 'based in the Thailand'
        },
        {
            emoji: "📖",
            text: "Generation Thailand"
        },
        {
            emoji: "📧",
            text: "patchanaab@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.instagram.com/____patchana/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/patchanaab",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com/in/patchanapong-meetam-63011a306",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://x.com/patchameeb",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "I am a career changer who discovered a passion for coding and continuous learning, which led me to embark on a new career path in software development",
    skills:
        {
            stack: ['Javascript', 'ReactJS', 'HTML5', 'CSS3', 'TailwindCSS', 'NodeJS', 'SQL', 'MongoDB', 'Git', 'Github' ],
            exposedTo: ['NextJS', 'Typescripts', 'C'],
        }
    ,
    hobbies: [
        {
            label: 'Assistant Surveyor | United Thai Shipping Corporation | Jun 2021 - Jan 2024',
            emoji: '🚢'
        },
        {
            label: 'Barista | D-oro Coffee Cafe | May 2020 - Jun 2021',
            emoji: '☕'
        },
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "E-Commerce Site | Portion Cafe",
            live: "#", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/orgs/jsd7-group1/repositories", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },

    ]
}