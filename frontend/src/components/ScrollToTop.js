// ScrollToTop.jsx
import { useEffect } from "react"
import { useLocation, useNavigationType } from "react-router"

const ScrollToTop = props => {
	const location = useLocation()
    const navigationType = useNavigationType();

	useEffect(() => {
		// scroll to top except when you click the back button
		if (navigationType !== "POP") {
			window.scrollTo(0, 0)
		}
	}, [location])

	return <>{props.children}</>
}

export default ScrollToTop
