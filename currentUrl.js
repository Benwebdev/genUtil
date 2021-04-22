// Return the current url without query or anchor

export const currentUrl = () => {
	return window.location.href.split(/\?|#/)[0];
};
