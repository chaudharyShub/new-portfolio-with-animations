import arrow from '../../images/arrow.svg';
import ellipse_1 from '../../images/ellipse_1.webp';
import hero_light from '../../images/hero_light.webp';
import selected_work from '../../images/selected_work.webp';
import my_react_portfolio from '../../images/my_react_portfolio.webp';
import my_react_portfolio_b from '../../images/my_react_portfolio_b.webp';
import mechanical_software_arrow from '../../images/mechanical_software_arrow.svg';
import glimpse_light from '../../images/glimpse_light.webp';
import footer_parallax from '../../images/footer_parallax.webp';
import dark_mode from '../../images/dark_mode.png';
import pokemon from '../../images/pokemon.webp'; 
import { darkModeStyle } from '../Details';


export const initialState = {
    mode: false,
    style: {
        background: '#E3ECD4',
        color: '#1D8BCF',
        arrow: arrow,

        homeHero: hero_light,
        ellipse: ellipse_1,
        homeMyPortfolio: my_react_portfolio,
        homePokemon: pokemon,
        workMyPortfolio: {
            a: my_react_portfolio,
            b: my_react_portfolio_b
        },
        selected_work: selected_work,
        mechanicalSoftwareArrow: mechanical_software_arrow,

        glimpse: glimpse_light,
        contactMe: selected_work,

        footerImage: footer_parallax,

        defaultToggleButton: dark_mode,

        border_left_top: {
            borderTop: '2px solid #1D8BCF',
            borderLeft: '2px solid #1D8BCF'
        },
        border_right_bottom: {
            borderBottom: '2px solid #1D8BCF',
            borderRight: '2px solid #1D8BCF'
        }
    }
}

export const reducer = (state, action) => {
    switch (action) {

        case 'ENABLE_DARK_MODE':
            localStorage.setItem('mode', true);
            return {
                ...state,
                mode: true,
                style: darkModeStyle
            }

        case 'DISABLE_DARK_MODE':
            localStorage.setItem('mode', false);
            return initialState;

        default:
            return state;
    }
}
