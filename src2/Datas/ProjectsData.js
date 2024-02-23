import QuickDealImg from '../assets/quickdeal-pic.png'
import QuickTweetImg from '../assets/quicktweet-pic.png'
import MailAppImg from '../assets/emailapp-pic.png'
import QuickNote from '../assets/quickNote.png'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import ReactJs from '../assets/react.png'
import JavaScript from '../assets/javascript.png'
import tailwindIcon from '../assets/tailwind.png'

export const ProjectsData = [
  {
    name: "QuickDeal - An Ecommerce App",
    img: QuickDealImg,
    description: "An e-commerce app where users can buy online cloths.",
    technologies: [ReactJs, CSS],
    link: "https://quickdeal-ecom.netlify.app/",
    sourceLink: "https://github.com/yash-purkar/QuickDeal"
  },
  {
    name: "QuickTweet - Social Media App",
    img: QuickTweetImg,
    description: "The social media app where users can connect with people.",
    technologies: [ReactJs, CSS],
    link: "https://quicktweet.netlify.app/",
    sourceLink: "https://github.com/yash-purkar/QuickTweet/tree/master"
  },
  {
    name: "QuickNote",
    img: QuickNote,
    description: "Notes app to save the notes.",
    technologies: [ReactJs, tailwindIcon],
    link: "https://quicknote-react.netlify.app/",
    sourceLink: "https://github.com/yash-purkar/notes-app-redux"
  },
  {
    name: "Mail App - An Email App",
    img: MailAppImg,
    description: "An email app where users can see there mails.",
    technologies: [ReactJs, CSS],
    link: "https://email-webapp.netlify.app/",
    sourceLink: "https://github.com/yash-purkar/email-app"
  },
]