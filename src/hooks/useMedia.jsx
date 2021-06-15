import React from "react";
import { useMediaQuery } from "react-responsive";

const useIsDesktop = () => {
	return useMediaQuery({ minWidth: 1300 });
};

const Desktop = ({ children }) => {
	const isDesktop = useIsDesktop();
	return <>{isDesktop && children ? children : null}</>;
};

const useIsTablet = () => {
	return useMediaQuery({ minWidth: 768, maxWidth: 1299 });
};

const Tablet = ({ children }) => {
	const isTablet = useIsTablet();
	return <>{isTablet && children ? children : null}</>;
};

const useIsMobile = () => {
	return useMediaQuery({ maxWidth: 767 });
};

const Mobile = ({ children }) => {
	const isMobile = useIsMobile();
	return <>{isMobile && children ? children : null}</>;
};

const useIsDefault = () => {
	return useMediaQuery({ minWidth: 768 });
};

const Default = ({ children }) => {
	const isNotMobile = useIsDefault();
	return <>{isNotMobile && children ? children : null}</>;
};

export {
	useIsDesktop,
	Desktop,
	useIsTablet,
	Tablet,
	useIsMobile,
	Mobile,
	useIsDefault,
	Default,
};
