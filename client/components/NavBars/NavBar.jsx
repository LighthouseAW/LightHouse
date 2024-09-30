import React, { useState, useEffect, useRef } from "react";
import UserContext from "../../context/UserContext"
import Link from "next/link";
import { useActiveLink } from '../../context/ActiveLinkContext';

export default function Navbar() {
    const { selectedLink, setSelectedLink } = useActiveLink();
    const { selectedSubLink, setSelectedSubLink } = useActiveLink();
    const [isMobile, setIsMobile] = useState(false);
    const [screenSize, setScreenSize] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const navbarRef = useRef(null);

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
      };

    useEffect(() => {
        const checkIsMobile = () => {
          // Check if the window width is less than a certain threshold (e.g., 768px)
            const screenSize = window.innerWidth < 1200;
            setScreenSize(screenSize);
        };

        // Check on initial load
        checkIsMobile();

        // Add a resize event listener to check for changes in window width
        window.addEventListener("resize", checkIsMobile);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("resize", checkIsMobile);
        };
    }, []);

    useEffect(() => {
        const checkIsMobile = () => {
            const userAgent = window.navigator.userAgent;
            setIsMobile(/iPhone|iPad|iPod|Android/i.test(userAgent));
        };

        checkIsMobile();

        window.addEventListener("resize", checkIsMobile);

        return () => {
            window.removeEventListener("resize", checkIsMobile);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const scrollTop = window.pageYOffset;
        setIsScrolled(scrollTop > 0);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div  className={`fixed ${ isMobile ? 'w-full justify-between' : 'w-full'} z-40 h-20 flex bg-slate-100 transition-all ease-out duration-300 ${isScrolled ? "" : `${selectedLink=='Give' ? "bg-slate-100" : ''}`} ${selectedLink=='give' ? "bg-slate-100" : ''}  text-black items-center`} >
            <div className={`${isMobile ? 'px-12' : "flex-grow mx-16" } flex  z-11 text-3xl`}>
                    <Link href="/" onClick={() => {
                        setSelectedLink("Home");
                        setSelectedSubLink("");
                        closeMenu();
                    }}>
                        <svg width={isMobile ? "134.5" : "211.5"} height={isMobile ? "42" : "66"} viewBox="0 0 141 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="lighthouse-logo" data-v-5914b45a=""><path d="M50.1631 13.7871H53.2133V28.4368H50.1631V13.7871Z" fill="black"></path><path d="M54.54 13.7871H57.7525V16.4944H54.54V13.7871ZM54.6184 17.7026H57.6742V28.4592H54.6184V17.7026Z" fill="black"></path><path d="M58.995 30.5622L60.0416 28.2744C61.1401 28.927 62.396 29.2674 63.6738 29.2589C65.7614 29.2589 66.7464 28.252 66.7464 26.3278V25.8076C66.3458 26.3613 65.8166 26.8094 65.2044 27.1134C64.5921 27.4175 63.9152 27.5682 63.2317 27.5528C60.7244 27.5528 58.4521 25.7237 58.4521 22.5186V22.4794C58.4521 19.2687 60.7636 17.4452 63.2317 17.4452C63.8949 17.4321 64.5523 17.5698 65.1544 17.8479C65.7565 18.126 66.2875 18.5372 66.7072 19.0506V17.6466H69.7574V26.0034C69.7574 27.9276 69.2929 29.3316 68.3918 30.2378C67.3844 31.239 65.8397 31.6809 63.7522 31.6809C62.0993 31.698 60.4669 31.3141 58.995 30.5622ZM66.7464 22.5354V22.4962C66.7029 21.8315 66.408 21.2082 65.9216 20.7528C65.4352 20.2974 64.7937 20.044 64.1272 20.044C63.4607 20.044 62.8191 20.2974 62.3327 20.7528C61.8463 21.2082 61.5514 21.8315 61.5079 22.4962V22.5354C61.5018 22.874 61.566 23.2102 61.6965 23.5228C61.8269 23.8354 62.0208 24.1175 62.2659 24.3514C62.511 24.5854 62.8019 24.7659 63.1204 24.8818C63.4388 24.9976 63.7778 25.0462 64.116 25.0245C64.4546 25.0436 64.7936 24.9933 65.1121 24.8768C65.4306 24.7602 65.7219 24.5799 65.9682 24.3468C66.2145 24.1138 66.4106 23.8329 66.5444 23.5214C66.6782 23.2099 66.7469 22.8744 66.7464 22.5354Z" fill="black"></path><path d="M70.8767 13.7871H73.9325V19.2073C74.2738 18.6814 74.7403 18.2482 75.2902 17.9466C75.8401 17.6449 76.4562 17.4843 77.0834 17.4789C79.3892 17.4789 80.7324 19.0059 80.7324 21.4727V28.4368H77.6766V22.4348C77.6766 20.9917 76.9938 20.2477 75.8297 20.2477C74.6656 20.2477 73.9269 20.9917 73.9269 22.4348V28.4368H70.8711L70.8767 13.7871Z" fill="black"></path><path d="M82.2824 25.3827V20.2925H80.9951V17.6803H82.2824V14.9338H85.3325V17.6803H87.8623V20.2925H85.3325V24.8849C85.3325 25.5841 85.6348 25.9253 86.312 25.9253C86.838 25.9289 87.3563 25.798 87.8175 25.5449V27.9949C87.09 28.4247 86.2557 28.64 85.4109 28.6158C83.5472 28.6158 82.2824 27.8719 82.2824 25.3827Z" fill="black"></path><path d="M88.5 13.7871H91.5558V19.2073C91.8968 18.681 92.3632 18.2476 92.9131 17.9459C93.4631 17.6442 94.0794 17.4838 94.7067 17.4789C97.0125 17.4789 98.3557 19.0059 98.3557 21.4727V28.4368H95.3056V22.4348C95.3056 20.9917 94.6228 20.2477 93.4587 20.2477C92.2946 20.2477 91.5558 20.9917 91.5558 22.4348V28.4368H88.5V13.7871Z" fill="black"></path><path d="M98.8818 23.1173V23.0781C98.9424 21.579 99.5795 20.1612 100.66 19.1201C101.741 18.079 103.183 17.4951 104.684 17.49C106.185 17.485 107.63 18.0592 108.718 19.093C109.806 20.1268 110.452 21.5403 110.523 23.039V23.0781C110.516 23.8316 110.358 24.576 110.059 25.2676C109.76 25.9592 109.325 26.5841 108.781 27.1053C108.236 27.6265 107.593 28.0336 106.889 28.3026C106.184 28.5716 105.433 28.6971 104.68 28.6717C103.932 28.6987 103.185 28.5752 102.485 28.3087C101.786 28.0421 101.146 27.6379 100.606 27.1199C100.065 26.602 99.6338 25.9808 99.3377 25.2933C99.0416 24.6057 98.8866 23.8658 98.8818 23.1173ZM107.512 23.1173V23.0781C107.526 22.696 107.464 22.3149 107.328 21.9572C107.193 21.5996 106.987 21.2728 106.723 20.9959C106.459 20.7191 106.142 20.4979 105.791 20.3454C105.44 20.1929 105.063 20.1121 104.68 20.1079C104.299 20.1017 103.921 20.1744 103.57 20.3213C103.219 20.4682 102.902 20.6862 102.639 20.9615C102.376 21.2368 102.173 21.5635 102.043 21.921C101.913 22.2785 101.858 22.6592 101.882 23.039V23.0781C101.867 23.46 101.928 23.841 102.063 24.1985C102.198 24.5561 102.403 24.883 102.667 25.16C102.93 25.4369 103.247 25.6582 103.597 25.8108C103.948 25.9633 104.326 26.0441 104.708 26.0483C105.089 26.0553 105.468 25.9832 105.819 25.8366C106.171 25.6901 106.489 25.4722 106.753 25.1968C107.016 24.9214 107.219 24.5945 107.35 24.2365C107.481 23.8786 107.536 23.4975 107.512 23.1173Z" fill="black"></path><path d="M111.044 24.6445V17.6804H114.094V23.6824C114.094 25.1255 114.777 25.8695 115.941 25.8695C117.105 25.8695 117.85 25.1255 117.85 23.6824V17.6804H120.9V28.4369H117.85V26.9099C117.507 27.4351 117.041 27.8678 116.491 28.1693C115.941 28.4708 115.326 28.6319 114.699 28.6383C112.376 28.6383 111.044 27.1224 111.044 24.6445Z" fill="black"></path><path d="M121.18 27.0105L122.484 25.0023C123.457 25.7663 124.64 26.2151 125.875 26.2889C126.76 26.2889 127.163 25.9701 127.163 25.4834V25.4443C127.163 24.7842 126.116 24.5605 124.924 24.2025C123.418 23.7606 121.711 23.0837 121.711 20.9694V20.9302C121.711 18.7431 123.48 17.5237 125.629 17.5237C127.058 17.5433 128.452 17.9745 129.642 18.7655L128.478 20.8743C127.605 20.3041 126.606 19.9582 125.567 19.8674C124.829 19.8674 124.448 20.1918 124.448 20.6114V20.6505C124.448 21.2546 125.472 21.5343 126.636 21.9371C128.142 22.4349 129.888 23.1565 129.888 25.1254V25.1646C129.888 27.553 128.103 28.6382 125.775 28.6382C124.105 28.6192 122.489 28.0467 121.18 27.0105Z" fill="black"></path><path d="M129.972 23.1172V23.078C129.972 20.0071 132.16 17.4844 135.294 17.4844C138.887 17.4844 140.533 20.2812 140.533 23.3241C140.533 23.5646 140.533 23.8443 140.493 24.124H133.005C133.099 24.7411 133.422 25.3004 133.909 25.691C134.396 26.0816 135.012 26.275 135.636 26.2328C136.124 26.2368 136.608 26.1394 137.057 25.9468C137.506 25.7542 137.91 25.4707 138.244 25.1141L139.99 26.6579C139.245 27.5391 138.248 28.1725 137.134 28.4737C136.02 28.7748 134.84 28.7295 133.752 28.3438C132.664 27.958 131.719 27.2502 131.044 26.3144C130.369 25.3787 129.995 24.2595 129.972 23.106V23.1172ZM137.561 22.2166C137.382 20.8517 136.576 19.9288 135.294 19.9288C134.012 19.9288 133.207 20.8294 132.966 22.2166H137.561Z" fill="black"></path><path d="M77.9735 32.2715H78.8361L79.8295 38.4583H78.8013L78.5573 36.7765H76.3353L75.3855 38.4583H74.3573L77.9735 32.2715ZM78.5224 36.0533L78.1739 33.3956L76.6577 36.0533H78.5224ZM81.2796 38.4583L82.5954 32.2715H85.1659C85.468 32.2715 85.7265 32.3528 85.9414 32.5155C86.1622 32.6723 86.3277 32.8786 86.4381 33.1342C86.5543 33.3898 86.6124 33.6599 86.6124 33.9445C86.6124 34.1769 86.5717 34.4064 86.4904 34.6329C86.4149 34.8595 86.3045 35.0715 86.1593 35.269C86.0199 35.4665 85.8543 35.6379 85.6626 35.7831C85.4767 35.9284 85.2734 36.0358 85.0526 36.1055L85.924 38.4583H84.8174L84.0157 36.306H82.7174L82.2642 38.4583H81.2796ZM84.4775 35.4433C84.6228 35.4433 84.7622 35.4055 84.8958 35.33C85.0294 35.2487 85.1485 35.1412 85.253 35.0076C85.3634 34.874 85.4477 34.7259 85.5057 34.5632C85.5696 34.3948 85.6016 34.2234 85.6016 34.0491C85.6016 33.8748 85.5725 33.7209 85.5145 33.5873C85.4564 33.4479 85.375 33.3375 85.2705 33.2562C85.1717 33.1748 85.0555 33.1342 84.9219 33.1342H83.397L82.9003 35.4433H84.4775ZM90.5747 32.2715H91.4373L92.4307 38.4583H91.4025L91.1585 36.7765H88.9365L87.9867 38.4583H86.9585L90.5747 32.2715ZM91.1236 36.0533L90.7751 33.3956L89.2589 36.0533H91.1236ZM95.1966 32.2715H98.2551C98.4874 32.2715 98.6791 32.3325 98.8302 32.4545C98.987 32.5765 99.1032 32.7333 99.1787 32.925C99.2601 33.1167 99.3007 33.3201 99.3007 33.535C99.3007 33.779 99.2513 34.0172 99.1526 34.2495C99.0538 34.4761 98.9144 34.6794 98.7343 34.8595C98.5543 35.0396 98.3451 35.1819 98.1069 35.2865C98.3625 35.3736 98.5601 35.5275 98.6995 35.7483C98.8389 35.9632 98.9086 36.2217 98.9086 36.5238C98.9086 36.8259 98.8476 37.096 98.7256 37.3342C98.6036 37.5724 98.4381 37.7757 98.2289 37.9441C98.0198 38.1068 97.7845 38.2346 97.5231 38.3275C97.2617 38.4147 96.9887 38.4583 96.704 38.4583H93.8808L95.1966 32.2715ZM96.8783 37.613C97.0119 37.613 97.1426 37.584 97.2704 37.5259C97.3982 37.462 97.5115 37.3778 97.6103 37.2732C97.709 37.1686 97.7874 37.0495 97.8455 36.9159C97.9094 36.7765 97.9414 36.6313 97.9414 36.4802C97.9414 36.3408 97.9152 36.2159 97.863 36.1055C97.8165 35.9894 97.7468 35.8964 97.6538 35.8267C97.5667 35.757 97.4621 35.7221 97.3401 35.7221H95.4405L95.0484 37.613H96.8783ZM97.2704 34.9379C97.3982 34.9379 97.5202 34.9118 97.6364 34.8595C97.7584 34.8014 97.8659 34.723 97.9588 34.6242C98.0576 34.5196 98.1331 34.4006 98.1854 34.267C98.2435 34.1275 98.2725 33.9794 98.2725 33.8226C98.2725 33.6134 98.2231 33.445 98.1244 33.3172C98.0256 33.1835 97.8891 33.1167 97.7148 33.1167H95.9982L95.6061 34.9379H97.2704ZM103.365 32.2715H104.42L105.143 37.3255L106.476 35.0512L106.058 32.2976H106.973L107.234 34.3977L108.393 32.2976H109.308L107.722 35.0512L108.08 37.3255L110.946 32.2715H112.018L108.28 38.4583H107.452L106.964 35.6873L105.291 38.4583H104.463L103.365 32.2715ZM114.385 38.5018C114.024 38.5018 113.705 38.4321 113.426 38.2927C113.147 38.1533 112.912 37.9645 112.72 37.7263C112.534 37.4881 112.392 37.2151 112.293 36.9072C112.2 36.5935 112.154 36.2711 112.154 35.94C112.154 35.5624 112.218 35.1935 112.346 34.8333C112.473 34.4732 112.651 34.1362 112.877 33.8226C113.104 33.5089 113.368 33.2329 113.67 32.9947C113.972 32.7566 114.298 32.5707 114.646 32.4371C115 32.2976 115.364 32.2279 115.735 32.2279C116.09 32.2279 116.403 32.3006 116.676 32.4458C116.955 32.5852 117.19 32.7769 117.382 33.0209C117.574 33.2649 117.716 33.5408 117.809 33.8487C117.902 34.1566 117.949 34.4761 117.949 34.8072C117.949 35.179 117.885 35.545 117.757 35.9051C117.635 36.2653 117.461 36.6022 117.234 36.9159C117.007 37.2238 116.743 37.4968 116.441 37.735C116.139 37.9732 115.814 38.162 115.465 38.3014C115.117 38.435 114.756 38.5018 114.385 38.5018ZM114.576 37.6217C114.919 37.6217 115.233 37.5404 115.517 37.3778C115.808 37.2151 116.061 37.0002 116.276 36.7329C116.49 36.4599 116.656 36.1636 116.772 35.8441C116.888 35.5188 116.946 35.1964 116.946 34.8769C116.946 34.5632 116.891 34.2728 116.781 34.0055C116.676 33.7383 116.52 33.5234 116.31 33.3607C116.101 33.1981 115.843 33.1167 115.535 33.1167C115.198 33.1167 114.881 33.1981 114.585 33.3607C114.295 33.5176 114.042 33.7325 113.827 34.0055C113.618 34.2728 113.452 34.569 113.33 34.8943C113.214 35.2138 113.156 35.5362 113.156 35.8616C113.156 36.1753 113.208 36.4657 113.313 36.7329C113.423 37.0002 113.583 37.2151 113.792 37.3778C114.007 37.5404 114.268 37.6217 114.576 37.6217ZM118.939 38.4583L120.254 32.2715H122.825C123.127 32.2715 123.385 32.3528 123.6 32.5155C123.821 32.6723 123.987 32.8786 124.097 33.1342C124.213 33.3898 124.271 33.6599 124.271 33.9445C124.271 34.1769 124.231 34.4064 124.149 34.6329C124.074 34.8595 123.963 35.0715 123.818 35.269C123.679 35.4665 123.513 35.6379 123.322 35.7831C123.136 35.9284 122.932 36.0358 122.712 36.1055L123.583 38.4583H122.476L121.675 36.306H120.376L119.923 38.4583H118.939ZM122.136 35.4433C122.282 35.4433 122.421 35.4055 122.555 35.33C122.688 35.2487 122.807 35.1412 122.912 35.0076C123.022 34.874 123.107 34.7259 123.165 34.5632C123.229 34.3948 123.261 34.2234 123.261 34.0491C123.261 33.8748 123.231 33.7209 123.173 33.5873C123.115 33.4479 123.034 33.3375 122.929 33.2562C122.831 33.1748 122.714 33.1342 122.581 33.1342H121.056L120.559 35.4433H122.136ZM126.5 32.2715H127.484L126.351 37.5956H129.462L129.279 38.4583H125.184L126.5 32.2715ZM132.073 32.2715H134.173C134.701 32.2715 135.134 32.379 135.471 32.5939C135.814 32.803 136.066 33.0877 136.229 33.4479C136.398 33.808 136.482 34.2118 136.482 34.6591C136.482 35.2051 136.389 35.7105 136.203 36.1753C136.023 36.6342 135.77 37.035 135.445 37.3778C135.12 37.7205 134.736 37.9877 134.295 38.1794C133.853 38.3653 133.374 38.4583 132.857 38.4583H130.757L132.073 32.2715ZM133.04 37.5956C133.412 37.5956 133.746 37.5201 134.042 37.369C134.344 37.2122 134.6 37.006 134.809 36.7504C135.024 36.489 135.186 36.1927 135.297 35.8616C135.413 35.5246 135.471 35.1732 135.471 34.8072C135.471 34.4761 135.416 34.1856 135.305 33.9358C135.195 33.686 135.029 33.4914 134.809 33.352C134.588 33.2068 134.315 33.1342 133.99 33.1342H132.874L131.925 37.5956H133.04Z" fill="black"></path><path d="M25.2576 19.0555L24.9722 14.396C23.0379 13.6203 20.8788 13.6203 18.9446 14.396L18.6535 19.0555H25.2576Z" fill="#f18802"></path><path d="M21.9556 1.87188C25.2881 1.87432 28.5676 2.7054 31.4986 4.29023C34.4296 5.87505 36.9201 8.16384 38.7456 10.9503L40.3742 10.0218C38.3701 6.92569 35.6175 4.38443 32.3708 2.63286C29.1241 0.881301 25.488 -0.0240453 21.7985 0.000485549C18.1091 0.0250164 14.4853 0.978636 11.2622 2.77322C8.03906 4.5678 5.32054 7.14544 3.35785 10.2679L4.98648 11.202C6.79847 8.34305 9.30439 5.98846 12.2712 4.3572C15.2381 2.72594 18.5694 1.871 21.9556 1.87188Z" fill="#f18802"></path><path d="M41.4152 11.795L39.7922 12.7291C41.2742 15.5801 42.0478 18.7457 42.0478 21.9586C42.0478 25.1714 41.2742 28.337 39.7922 31.188L41.4208 32.1222C43.0606 28.987 43.917 25.5018 43.917 21.9642C43.917 18.4265 43.0606 14.9413 41.4208 11.8062L41.4152 11.795Z" fill="#f18802"></path><path d="M28.7444 40.8538L26.5616 24.8504H17.0473L14.7303 40.6916C10.7156 39.1312 7.304 36.3309 4.99208 32.6983L3.36905 33.6268C5.33072 36.752 8.04929 39.3323 11.2733 41.129C14.4973 42.9257 18.1225 43.8808 21.8137 43.9059C25.5049 43.931 29.1429 43.0253 32.391 41.2726C35.6392 39.5199 38.3926 36.9768 40.3966 33.8786L38.768 32.9444C36.3709 36.5953 32.8537 39.3706 28.7444 40.8538ZM19.0509 27.1718H24.5357L26.5169 41.5138C23.3704 42.2491 20.0927 42.2126 16.9634 41.4076L19.0509 27.1718Z" fill="#f18802"></path><path d="M1.86914 21.9586C1.86744 18.8514 2.59186 15.7867 3.98468 13.0088L2.36164 12.0746C0.808995 15.1423 0 18.5319 0 21.9697C0 25.4076 0.808995 28.7972 2.36164 31.8649L3.99027 30.9307C2.5929 28.1462 1.86652 25.0737 1.86914 21.9586Z" fill="#f18802"></path><path d="M38.2643 30.2987C39.5902 27.7163 40.2817 24.8555 40.2817 21.953C40.2817 19.0505 39.5902 16.1897 38.2643 13.6073L36.4845 14.6309C37.6343 16.9016 38.2335 19.4108 38.2335 21.9558C38.2335 24.5007 37.6343 27.0099 36.4845 29.2806L38.2643 30.2987Z" fill="#f18802"></path><path d="M5.52376 13.8702C4.28284 16.3841 3.63739 19.1497 3.63739 21.953C3.63739 24.7562 4.28284 27.5218 5.52376 30.0358L7.3035 29.0121C6.23901 26.811 5.6861 24.3978 5.6861 21.953C5.6861 19.5082 6.23901 17.095 7.3035 14.8938L5.52376 13.8702Z" fill="#f18802"></path><path d="M9.05526 15.9007C8.16151 17.7933 7.698 19.8601 7.698 21.953C7.698 24.0458 8.16151 26.1127 9.05526 28.0053L10.835 26.9816C10.1142 25.4011 9.7412 23.6844 9.7412 21.9474C9.7412 20.2104 10.1142 18.4937 10.835 16.9131L9.05526 15.9007Z" fill="#f18802"></path><path d="M34.7328 28.2738C35.7103 26.3099 36.219 24.1464 36.219 21.953C36.219 19.7596 35.7103 17.596 34.7328 15.6322L32.953 16.6558C33.7543 18.3069 34.1706 20.118 34.1706 21.953C34.1706 23.788 33.7543 25.5991 32.953 27.2501L34.7328 28.2738Z" fill="#f18802"></path><path d="M31.2237 26.2433C31.8523 24.9003 32.1782 23.4357 32.1782 21.953C32.1782 20.4703 31.8523 19.0057 31.2237 17.6627L29.4383 18.6863C29.8941 19.7161 30.1295 20.8297 30.1295 21.9558C30.1295 23.0818 29.8941 24.1954 29.4383 25.2252L31.2237 26.2433Z" fill="#f18802"></path><path d="M12.598 17.9312C12.0448 19.1999 11.7594 20.569 11.7594 21.953C11.7594 23.3369 12.0448 24.706 12.598 25.9748L14.3833 24.9512C13.6186 23.0254 13.6186 20.8805 14.3833 18.9548L12.598 17.9312Z" fill="#f18802"></path><path d="M16.1127 21.9586C16.1112 22.2751 16.1355 22.5913 16.1854 22.9039H27.7537C27.8055 22.5914 27.8317 22.2753 27.8321 21.9586C27.8324 21.636 27.8043 21.3141 27.7481 20.9965H16.163C16.1208 21.3153 16.104 21.637 16.1127 21.9586Z" fill="#f18802"></path></svg>
                    </Link>
                </div>
            { screenSize ? <><button onClick={handleClick}
    className="flex flex-col justify-center items-center pr-8">
        <div className={`transition-transform transform ${isOpen ? 'rotate-45' : 'rotate-0'} duration-300`}>
            <svg
                className={`h-8 w-8 ${isOpen ? 'rotate-45' : 'rotate-0'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
            </svg>
        </div>
    </button>
    <div className={`flex-col space-y-4 bg-slate-100 absolute right-0 top-full transform transition-transform ease-in-out duration-300 ${isOpen ? 'translate-x-0 ' : 'translate-x-full' }`}>
        <Link
            href="/about"
            className={` hover:bg-slate-200 flex justify-center items-center text-2xl relative ${selectedLink === "about" ? "bg-slate-200" : ""}`}
            onClick={() => {
            setSelectedLink("about");
            setSelectedSubLink("AboutLighthouse");
            handleClick();
        }}>About Us
        </Link>
                    <Link href="/about"
                                onClick={() => {
                                    setSelectedLink("about");
                                    setSelectedSubLink("AboutLighthouse");
                                    handleClick();
                                }}
                                className={`hover:bg-slate-200 block w-full h-full flex justify-center text-center items-center ${selectedSubLink === "AboutLighthouse" ? "underline" : ""}`}
                                >About Lighthouse</Link>
                                <Link href="/about/statementOfFaith"
                                onClick={() => {
                                    setSelectedLink("about");
                                    setSelectedSubLink("StatementOfFaith");
                                    handleClick();
                                }}
                                className={`hover:bg-slate-200 block w-full h-full flex justify-center text-center items-center ${selectedSubLink === "StatementOfFaith" ? "underline" : ""}`}
                                >Statement of Faith</Link>
                            <Link href="/about/staff"
                                onClick={() => {
                                    setSelectedLink("about");
                                    setSelectedSubLink("Staff");
                                    handleClick();
                                }}
                                className={`hover:bg-slate-200 block w-full h-full flex justify-center text-center items-center ${selectedSubLink === "Staff" ? "underline" : ""}`}
                                >Team & Leadership</Link>
                                <Link
                                    href="/mission"
                                    className={` hover:bg-slate-200 flex justify-center items-center text-2xl relative ${selectedLink === "mission" ? "bg-slate-200" : ""}`}
                                    onClick={() => {
                                        setSelectedLink("mission");
                                        setSelectedSubLink("missionStatement");
                                        handleClick();
                                    }}
                                >
                                    Mission & Vision
                                </Link>
                                <Link href="/mission"
                                        className={`hover:bg-slate-200 block w-full h-full flex justify-center text-center items-center ${selectedSubLink === "missionStatement" ? "underline" : ""}`}
                                        onClick={() => {
                                            setSelectedLink("mission");
                                            setSelectedSubLink("missionStatement");
                                            handleClick();
                                        }}
                                        >Mission Statement</Link>
                                        <Link href="/mission/coreValues" 
                                        className={`hover:bg-slate-200 block w-full h-full flex justify-center text-center items-center ${selectedSubLink === "coreValues" ? "underline" : ""}`}
                                        onClick={() => {
                                            setSelectedLink("mission");
                                            setSelectedSubLink("coreValues");
                                            handleClick();
                                        }}
                                        >Core Values</Link>
                    <Link
                                    href="/projects"
                                    className={`hover:bg-slate-200 flex justify-center items-center text-2xl relative ${selectedLink === "ourWork" ? "bg-slate-200" : ""}`}
                                    onClick={() => {
                                        setSelectedLink("ourWork");
                                        setSelectedSubLink("ourWork");
                                        handleClick();
                                    }}
                                >
                                    Our Work
                                </Link>
                                <Link href="/projects" 
                                            onClick={() => {
                                                setSelectedLink("ourWork");
                                                setSelectedSubLink("ourWork");
                                                handleClick();
                                            }}
                                            className={`hover:bg-slate-200 block w-full h-full flex justify-center text-center items-center ${selectedSubLink === "ourWork" ? "underline" : ""}`}
                                        >How we reach people</Link>
                                        <Link href="/projects/impact"
                                        onClick={() => {
                                            setSelectedLink("ourWork");
                                            setSelectedSubLink("impact");
                                            handleClick();
                                        }}
                                        className={`hover:bg-slate-200 block w-full h-full flex justify-center text-center items-center ${selectedSubLink === "impact" ? "underline" : ""}`}
                                        >Our Impact</Link>
                                        <Link href="/projects/whereWeServe"
                                        onClick={() => {
                                            setSelectedLink("ourWork");
                                            setSelectedSubLink("whereWeServe");
                                            handleClick();
                                        }}
                                        className={`hover:bg-slate-200 block w-full h-full flex justify-center text-center items-center ${selectedSubLink === "whereWeServe" ? "underline" : ""}`}
                                        >Where we serve</Link>
            <Link
                        href="/give"
                        onClick={() => {
                            setSelectedLink("give");
                            setSelectedSubLink("give");
                            handleClick();
                        }}
                        className={`h-20 w-60 flex justify-center items-center text-2xl ${selectedSubLink === "give" ? "underline" : ""}`}
                        >
                        Give
                        </Link>
    </div>
    </>
            : <div className="right-0">
                <div className="top-8 w-full flex items-center justify-center text-xl pr-8">
                    <div className="relative">
                <div className="dropdown-container ">
                    <Link
                        href="/about"
                        className={`h-20 w-60 hover:text-orange-300 flex justify-center items-center text-2xl relative ${selectedLink === "about" ? "text-orange-400" : ""}`}
                        onClick={() => {
                            setSelectedLink("about");
                            setSelectedSubLink("AboutLighthouse");
                        }}>
                        About Us
                    </Link>
                        <div className={`absolute top-full left-0 w-full bg-slate-100 shadow-md rounded-b-md mt-0 opacity-0 transition-opacity duration-700 ease-in-out pointer-events-none -mt-0`}>
                            <p className="h-12 m-0">
                                <Link href="/about"
                                onClick={() => {
                                    setSelectedLink("about");
                                    setSelectedSubLink("AboutLighthouse");
                                }}
                                className={`hover:text-orange-300 block w-full h-full flex justify-center text-center items-center ${selectedSubLink === "AboutLighthouse" ? "underline" : ""}`}
                                >About Lighthouse</Link>
                            </p>
                            <p className="h-12 m-0">
                                <Link href="/about/statementOfFaith"
                                onClick={() => {
                                    setSelectedLink("about");
                                    setSelectedSubLink("StatementOfFaith");
                                }}
                                className={`hover:text-orange-300 block w-full h-full flex justify-center text-center items-center ${selectedSubLink === "StatementOfFaith" ? "underline" : ""}`}
                                >Statement of Faith</Link>
                            </p>
                            <p className="h-12 m-0">
                                <Link href="/about/staff"
                                onClick={() => {
                                    setSelectedLink("about");
                                    setSelectedSubLink("Staff");
                                }}
                                className={`hover:text-orange-300 block w-full h-full flex justify-center text-center items-center ${selectedSubLink === "Staff" ? "underline" : ""}`}
                                >Team & Leadership</Link>
                            </p>
                            </div>
                        </div>
                    </div>
                        <div className="relative">
                            <div className="dropdown-container ">
                                <Link
                                    href="/mission"
                                    className={`h-20 w-60 hover:text-orange-300 flex justify-center items-center text-2xl relative ${selectedLink === "mission" ? "text-orange-400" : ""}`}
                                    onClick={() => {
                                        setSelectedLink("mission");
                                        setSelectedSubLink("missionStatement");
                                    }}
                                >
                                    Mission & Vision
                                </Link>
                                <div className={`absolute top-full left-0 w-full bg-slate-100 shadow-md rounded-b-md mt-0 opacity-0 transition-opacity duration-700 ease-in-out pointer-events-none -mt-0`}>
                                    <p className="h-12 m-0">
                                        <Link href="/mission" 
                                        className={`hover:text-orange-300 block w-full h-full flex justify-center text-center items-center ${selectedSubLink === "missionStatement" ? "underline" : ""}`}
                                        onClick={() => {
                                            setSelectedLink("mission");
                                            setSelectedSubLink("missionStatement");
                                        }}
                                        >Mission Statement</Link>
                                    </p>
                                    <p className="h-12 m-0">
                                        <Link href="/mission/coreValues" 
                                        className={`hover:text-orange-300 block w-full h-full flex justify-center text-center items-center ${selectedSubLink === "coreValues" ? "underline" : ""}`}
                                        onClick={() => {
                                            setSelectedLink("mission");
                                            setSelectedSubLink("coreValues");
                                        }}
                                        >Core Values</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="dropdown-container ">
                                <Link
                                    href="/projects"
                                    className={`h-20 w-60 hover:text-orange-300 flex justify-center items-center text-2xl relative ${selectedLink === "ourWork" ? "text-orange-400" : ""}`}
                                    onClick={() => {
                                        setSelectedLink("ourWork");
                                        setSelectedSubLink("ourWork");
                                    }}
                                >
                                    Our Work
                                </Link>
                                <div className={`absolute top-full left-0 w-full bg-slate-100 shadow-md rounded-b-md mt-0 opacity-0 transition-opacity duration-700 ease-in-out pointer-events-none -mt-0`}>
                                    <p className="h-12 m-0">
                                        <Link href="/projects"
                                            onClick={() => {
                                                setSelectedLink("ourWork");
                                                setSelectedSubLink("ourWork");
                                            }}
                                            className={`hover:text-orange-300 block w-full h-full flex justify-center text-center items-center ${selectedSubLink === "ourWork" ? "underline" : ""}`}
                                        >How we reach people</Link>
                                    </p>
                                    <p className="h-12 m-0">
                                        <Link href="/projects/impact"
                                        onClick={() => {
                                            setSelectedLink("ourWork");
                                            setSelectedSubLink("impact");
                                        }}
                                        className={`hover:text-orange-300 block w-full h-full flex justify-center text-center items-center ${selectedSubLink === "impact" ? "underline" : ""}`}
                                        >Our Impact</Link>
                                    </p>
                                    <p className="h-12 m-0">
                                        <Link href="/projects/whereWeServe"
                                        onClick={() => {
                                            setSelectedLink("ourWork");
                                            setSelectedSubLink("whereWeServe");
                                        }}
                                        className={`hover:text-orange-300 block w-full h-full flex justify-center text-center items-center ${selectedSubLink === "whereWeServe" ? "underline" : ""}`}
                                        >Where we serve</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="hover:outline-orange-300 outline-[#f18802] outline outline-2 rounded-full">
                        <Link
                        href="/give"
                        onClick={() => {
                            setSelectedLink("give");
                            setSelectedSubLink("give");
                        }}
                        className={`hover:text-orange-300 text-[#f18802] h-16 w-48 flex justify-center items-center text-2xl ${selectedSubLink === "give" ? "underline" : ""}`}
                        >
                        Give
                        </Link>
                        </div>
                        </div>
                </div>
            </div>}
        </div>
    );
}
