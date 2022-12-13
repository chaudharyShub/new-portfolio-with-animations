import arrow from '../../images/arrow.svg';
import ellipse_1 from '../../images/ellipse_1.webp';
import hero_light from '../../images/hero_light.webp';
import selected_work from '../../images/selected_work.webp';
import mechanical_software_arrow from '../../images/mechanical_software_arrow.svg';
import glimpse_light from '../../images/glimpse_light.webp';
import footer_parallax from '../../images/footer_parallax.webp';
import dark_mode from '../../images/dark_mode.png';


export const initialState = {
    mode: false,
    style: {
        color: '#1D8BCF',
        arrow: arrow,

        homeHero: hero_light,
        ellipse: ellipse_1,
        selected_work: selected_work,
        mechanicalSoftwareArrow: mechanical_software_arrow,

        glimpse: glimpse_light,
        contactMe: selected_work,

        footerImage: footer_parallax,

        defaultToggleButton: dark_mode
    }
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ENABLE_DARK_MODE':
            return {
                ...state,
                mode: true,
                style: action.payload
            }
        case 'DISABLE_DARK_MODE':
            return initialState;

        default:
            return state;
    }
}