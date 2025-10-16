/* export const isAuthenticated = (): boolean => 
    !!localStorage.getItem('authToken');
    export const getAuthToken = () => localStorage.getItem('authToken');
    export const getRefreshToken = () => localStorage.getItem('refreshToken');

    export const clearAuth = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('refreshToken');
        
        localStorage.setItem("logout", Date.now().toString());
    }   

    export const redirectToLogin = (forceLogin: boolean = false) => {
        const redirectUri = encodeURIComponent(window.location.origin)
        const loginBaseUrl = process.env.REACT_APP_LOGIN_URL;
        let loginUrl = `${loginBaseUrl}?redirect_uri=${redirectUri}`;
        if (forceLogin) {
            loginUrl += '&force_login=true';
        }
        window.location.href = loginUrl;
    }   

 */
export {};
