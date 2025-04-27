export const environment = {

    production: false,
    api:
    {
        baseUrl: window.location.hostname === 'localhost' ? 'http://localhost/api/' : 'https://api.best-karma-dev.com/api/' 
    },

    mobileViewBreakPoint: /* 600 */850,

    karmaService : {
        
        url: window.location.hostname === 'localhost' ? 'http://localhost/api/' : 'https://api.best-karma-dev.com/api/',
        clientId: '', 
        authority: '',
        
        
        redirectUri: window.location.hostname === 'localhost' ? 'http://localhost:4200' : 'https://front.best-karma-dev.com/',

        logoutRedirectUri: window.location.hostname === 'localhost' ? 'http://localhost:4200' : 'https://front.best-karma-dev.com/', 
        scopes:['']
    },
};
