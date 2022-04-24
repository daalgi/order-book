import { useEffect, useState } from 'react'
import { usePageVisibility } from 'react-page-visibility'
import GlobalStyle from './styles/global'
import Header from './components/Header'
import Button from './components/Button'


function App() {
    const [windowWidth, setWindowWidth] = useState(0)
    const [isFeedKilled, setIsFeedKilled] = useState(false)
    const isPageVisible = usePageVisibility()

    // Window width detection
    useEffect(() => {
        window.onresize = () => {
            setWindowWidth(window.innerWidth)
        }
        setWindowWidth(() => window.innerWidth)
    }, [])

    useEffect(() => {
        if (isPageVisible) {
            document.title = 'Order Book'
            // Open the websocket
            
        } else {
            document.title = 'Paused Order Book'
            // Kill the websocket
        }

    }, [isPageVisible])

    // Hidden page, don't render anything
    if (!isPageVisible)
        return <>Hidden</>

    return (
        <>
            <GlobalStyle />
            <Header
                spread={10}
                spreadPercentage={0.2}
                groupingOptions={[1, 10, 100]}
            />
            {/* <Button title="Kill" /> */}
            {/* <OrderBook />
            <Footer /> */}
        </>
    )
}

export default App
