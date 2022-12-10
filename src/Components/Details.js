import algoexpert from '../images/algoexpert.webp';
import my_react_portfolio from '../images/my_react_portfolio.webp';
import js_form_validation from '../images/js_form_validation.webp';
import pokemon from '../images/pokemon.webp';


export const scrollToTop = () => {
    window.scrollTo(0, 0);
}

export const languages = ['html', 'css', 'tailwind', 'javascript', 'react.js', 'c++'];
export const follow_me = ['Fb', 'Insta', 'LinkedIn', 'GitHub'];

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
        image: my_react_portfolio,
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

export const homeHeroHeading = {
    a: {
        text: 'FRONT',
        style: {
            color: '#1D8BCF'
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
            textDecoration: 'line-through',
            fontStyle: 'italic',
            color: 'white'
        }
    },
    f: {
        text: 'INDIA',
        style: {
            color: '#1D8BCF'
        }
    },
};

export const workHeroHeading = {
    a: {
        text: 'SOME',
        style: {
            color: '#fb9c59'
        }
    },
    b: {
        text: 'GLIMPSES',
        style: {
            textDecoration: 'line-through',
            fontStyle: 'italic',
            color: 'white'
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
            color: '#fb9c59'
        }
    },
    e: {
        text: 'MY',
        style: {
            color: '#fb9c59'
        }
    },
    f: {
        text: 'WORK',
        style: {
            color: 'white'
        }
    },
};