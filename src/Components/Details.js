import algoexpert from '../images/algoexpert.webp';
import js_form_validation from '../images/js_form_validation.webp';
import pokemon from '../images/pokemon.webp';
import algoexpert_2 from '../images/algoexpert_2.webp';
import my_react_portfolio_light from '../images/my_react_portfolio_light.webp';
import my_react_portfolio_light_b from '../images/my_react_portfolio_light_b.webp';
import js_form_validation_work from '../images/js_form_validation_work.webp';
import js_form_validation_work_b from '../images/js_form_validation_work_b.webp';
import pokemon_work from '../images/pokemon_work.webp';
import pokemon_work_b from '../images/pokemon_work_b.webp';
import indian_shatabdi_news from '../images/indian_shatabdi_news.webp';
import indian_shatabdi_news_b from '../images/indian_shatabdi_news_b.webp';
import postmaster from '../images/postmaster.webp';
import postmaster_b from '../images/postmaster_b.webp';

import mechanical_software_arrow_dark from '../images/mechanical_software_arrow_dark.svg';
import arrow_dark from '../images/arrow_dark.svg';
import ellipse_dark from '../images/ellipse_dark.svg';
import light_mode from '../images/light_mode.png';
import hero_dark from '../images/hero_dark.webp';
import glimpses_dark from '../images/glimpses_dark.webp';
import contact_me_dark from '../images/contact_me_dark.webp';
import selected_work_dark from '../images/selected_work_dark.webp';
import footer_parallax_dark from '../images/footer_parallax_dark.webp';


export const scrollToTop = () => {
    window.scrollTo(0, 0);
};

export const loadTopBar = (setProgress, a, time) => {
    setProgress(0);
    setProgress(a);
    setTimeout(() => {
        setProgress(100);
    }, time);
}

export const languages = ['html', 'css', 'tailwind', 'javascript', 'react.js', 'c++'];

export const animationBoxId = ["box-front", "box-right", "box-back", "box-left", "box-top", "box-bottom"];

export const follow_me = [
    {
        platform: 'Fb',
        link: 'https://www.facebook.com/shubham.chaudhary.77398/'
    },
    {
        platform: 'Insta',
        link: 'https://www.instagram.com/_shubham_chaudhary_/'
    },
    {
        platform: 'LinkedIn',
        link: 'https://www.linkedin.com/in/shubham-chaudhary-4398bba8/'
    },
    {
        platform: 'GitHub',
        link: 'https://github.com/chaudharyShub/'
    },
];

export const socialMedia = [
    {
        platform: 'Facebook',
        link: 'https://www.facebook.com/shubham.chaudhary.77398/'
    },
    {
        platform: 'Instagram',
        link: 'https://www.instagram.com/_shubham_chaudhary_/'
    },
    {
        platform: 'LinkedIn',
        link: 'https://www.linkedin.com/in/shubham-chaudhary-4398bba8/'
    },
    {
        platform: 'Github',
        link: 'https://github.com/chaudharyShub/'
    },
    {
        platform: 'Whatsapp',
        link: 'https://wa.me/919315583873'
    },
];


export const mechanical_software = [
    {
        id: 1,
        className: 'mechanical',
        h5: 'Mechanical Engineer',
        company: 'Riviera Homefurnishings Pvt. Ltd  •  Full-time',
        totalTime: '2 years  •  Panipat',
        years: 'Jun 2020 - Jun 2022'
    },
    {
        id: 2,
        className: 'arrow'
    },
    {
        id: 3,
        className: 'software',
        h5: 'Software Engineer (intern)',
        company: 'Quokka Labs  •  Internship',
        totalTime: '2 months  •  Noida',
        years: 'Sep 2022 - Present'
    },
];

export const selectedWork = [
    {
        id: '01/',
        name: 'algoexpert clone',
        image: algoexpert,
        link: 'https://chaudharyshub.github.io/AlgoExpert-CLone-React.Js/'
    },
    {
        id: '02/',
        name: 'my react portfolio',
        image: null,
        link: 'http://chaudharyshubham.com/'
    },
    {
        id: '03/',
        name: 'js form validation',
        image: js_form_validation,
        link: 'https://form-validation-using-java-script.vercel.app/create-form'
    },
    {
        id: '04/',
        name: 'pokemon app',
        image: pokemon,
        link: 'https://pokemon-app-dusky-psi.vercel.app/home'
    },
];

export const personalWork = [
    {
        sno: '01/',
        image1: algoexpert,
        image2: algoexpert_2,
        link: 'https://chaudharyshub.github.io/AlgoExpert-CLone-React.Js/',
        heading: 'algoexpert clone',
        content: "Created a clone website of online Interview preparing platform 'AlgoExpert.io' on React.JS and styled using custom CSS",
    },
    {
        sno: '02/',
        image1: null,
        image2: null,
        link: 'http://chaudharyshubham.com/',
        heading: 'my react portfolio',
        content: "This is my personal portfolio website. Designed on FIGMA, developed on React.Js and custom CSS. To view FIGMA design, | click here.",
    },
    {
        sno: '03/',
        image1: js_form_validation_work,
        image2: js_form_validation_work_b,
        link: 'https://form-validation-using-java-script.vercel.app/create-form',
        heading: 'js form validation',
        content: "A CRUD app which JavaScript for form validation. On form submission data is stored inside the localStorage which can be edited and deleted later.",
    },
    {
        sno: '04/',
        image1: pokemon_work,
        image2: pokemon_work_b,
        link: 'https://pokemon-app-dusky-psi.vercel.app/home',
        heading: 'pokemon app',
        content: "This app fetches the data from an API provided by ‘pokeapi.co’ and displays the details of the pokemon. It uses React Routing and React Context API.",
    },
    {
        sno: '05/',
        image1: indian_shatabdi_news,
        image2: indian_shatabdi_news_b,
        link: 'http://www.chaudharyshubham.com/Indian%20Shatabdi%20news/index%20(news).html',
        heading: 'indian shatabdi news',
        content: "Indian Shatabdi News news website fetches latest news updates from api provided by 'News API' using JavaScript's AJAX method.",
    },
    {
        sno: '06/',
        image1: postmaster,
        image2: postmaster_b,
        link: 'http://www.chaudharyshubham.com/Postmaster/index%20(postmaster).html',
        heading: 'postmaster',
        content: "PostMaster is an utility platform which can make 'GET' and 'POST' requests on an api using JavaScript's Fetch Api method. ",
    },
];

export const homeHeroHeadingLight = {
    a: {
        text: 'FRONT',
        style: {
            color: '#1D8BCF',
        }
    },
    b: {
        text: 'END',
        style: {
            color: 'white'
        }
    },
    c: {
        text: 'DEVEL',
        style: {
            color: '#1D8BCF'
        }
    },
    d: {
        text: 'OPER',
        style: {
            color: 'white'
        }
    },
    e: {
        text: 'FROM',
        style: {
            color: 'white'
        }
    },
    f: {
        text: 'INDIA',
        style: {
            fontStyle: 'italic',
            color: '#1D8BCF'
        }
    },
};

export const homeHeroHeadingDark = {
    a: {
        text: 'FRONT',
        style: {
            color: 'white',
        }
    },
    b: {
        text: 'END',
        style: {
            color: 'white'
        }
    },
    c: {
        text: 'DEVEL',
        style: {
            color: 'white'
        }
    },
    d: {
        text: 'OPER',
        style: {
            color: 'white'
        }
    },
    e: {
        text: 'FROM',
        style: {
            color: 'white'
        }
    },
    f: {
        text: 'INDIA',
        style: {
               fontStyle: 'italic',
                color: 'white',
//             background: linear-gradient(to right, #FF9933, white, #138808);
//             -webkit-background-clip: text;
//             -webkit-text-fill-color: transparent;
//             text-shadow: none;
        }
    },
};

export const workHeroHeadingLight = {
    h1Style: {
        marginTop: '-0.5em'
    },
    a: {
        text: 'SOME',
        style: {
            color: '#1D8BCF'
        }
    },
    b: {
        text: 'GLIMPSES',
        style: {
            fontStyle: 'italic',
            color: 'white',
            display: 'block'
        }
    },
    c: {
        text: '',
        style: {
            color: ''
        }
    },
    d: {
        text: 'OF',
        style: {
            color: '#1D8BCF',
        }
    },
    e: {
        text: 'MY',
        style: {
            color: '#1D8BCF',
        }
    },
    f: {
        text: 'WORK',
        style: {
            color: 'white'
        }
    },
};

export const workHeroHeadingDark = {
    h1Style: {
        marginTop: '-0.5em'
    },
    a: {
        text: 'SOME',
        style: {
            color: 'white'
        }
    },
    b: {
        text: 'GLIMPSES',
        style: {
            fontStyle: 'italic',
            color: '#CF00A5',
            display: 'block'
        }
    },
    c: {
        text: '',
        style: {
            color: ''
        }
    },
    d: {
        text: 'OF',
        style: {
            color: 'white',
        }
    },
    e: {
        text: 'MY',
        style: {
            color: 'white',
        }
    },
    f: {
        text: 'WORK',
        style: {
            color: 'white'
        }
    },
};

export const contactHeroHeadingLight = {
    h1Style: {
        marginTop: '-0.5em'
    },
    a: {
        text: "LET'S",
        style: {
            color: '#1D8BCF',
            display: 'block'
        }
    },
    b: {
        text: '',
        style: {
            color: ''
        }
    },
    c: {
        text: 'GET',
        style: {
            color: '#1D8BCF',
            display: 'block'
        }
    },
    d: {
        text: '',
        style: {
            color: ''
        }
    },
    e: {
        text: '',
        style: {
            color: ''
        }
    },
    f: {
        text: 'CONNECTED',
        style: {
            fontStyle: 'italic',
            color: 'white',
            display: 'block'
        }
    },
};

export const contactHeroHeadingDark = {
    h1Style: {
        marginTop: '-0.5em'
    },
    a: {
        text: "LET'S",
        style: {
            color: 'white',
            display: 'block'
        }
    },
    b: {
        text: '',
        style: {
            color: ''
        }
    },
    c: {
        text: 'GET',
        style: {
            color: 'white',
            display: 'block'
        }
    },
    d: {
        text: '',
        style: {
            color: ''
        }
    },
    e: {
        text: '',
        style: {
            color: ''
        }
    },
    f: {
        text: 'CONNECTED',
        style: {
            fontStyle: 'italic',
            color: '#2385C0',
            display: 'block'
        }
    },
};


export const darkModeStyle = {
    background: 'black',
    color: 'white',
    arrow: arrow_dark,

    homeHero: hero_dark,
    ellipse: ellipse_dark,
    homeMyPortfolio: my_react_portfolio_light,
    workMyPortfolio: {
        a: my_react_portfolio_light,
        b: my_react_portfolio_light_b
    },
    selected_work: selected_work_dark,
    mechanicalSoftwareArrow: mechanical_software_arrow_dark,

    glimpse: glimpses_dark,
    contactMe: contact_me_dark,

    footerImage: footer_parallax_dark,

    defaultToggleButton: light_mode,

    border_left_top: {
        borderTop: '2px solid white',
        borderLeft: '2px solid white'
    },
    border_right_bottom: {
        borderBottom: '2px solid white',
        borderRight: '2px solid white'
    }
}
