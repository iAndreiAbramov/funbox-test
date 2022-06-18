export const useIsInternetExplorer = (): boolean => {
    const userAgent = navigator.userAgent.toLowerCase();

    return (
        (/mozilla/.test(userAgent) &&
            !/firefox/.test(userAgent) &&
            !/chrome/.test(userAgent) &&
            !/safari/.test(userAgent) &&
            !/opera/.test(userAgent)) ||
        /msie/.test(userAgent)
    );
};
