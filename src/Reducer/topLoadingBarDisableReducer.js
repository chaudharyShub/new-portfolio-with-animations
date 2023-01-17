export const topLoadingBarInitialState = {
    homeTopLoadingBar: false,
    aboutTopLoadingBar: false,
    workTopLoadingBar: false,
    contactTopLoadingBar: false,
}

export const disableTopLoadingBar = (state, action) => {
    switch (action) {

        case 'DISABLE_HOME_TOP_LOADING_BAR':
            return {
                ...state,
                homeTopLoadingBar: true
            }

        case 'DISABLE_ABOUT_TOP_LOADING_BAR':
            return {
                ...state,
                aboutTopLoadingBar: true
            }

        case 'DISABLE_WORK_TOP_LOADING_BAR':
            return {
                ...state,
                workTopLoadingBar: true
            }

        case 'DISABLE_CONTACT_TOP_LOADING_BAR':
            return {
                ...state,
                contactTopLoadingBar: true
            }

        default:
            return state;
    }
}