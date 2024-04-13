import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Scroll to the top of the page when the pathname changes
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth' // Enable smooth scrolling
        });
    }, [pathname]);

    return null; // This component does not render anything
};

export default ScrollToTop;
