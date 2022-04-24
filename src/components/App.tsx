import GlobalStyle from '../styles/global'
import Header from './Header'


function App() {
    return (
        <>
            <GlobalStyle />
            <Header
                spread={10}
                spreadPercentage={0.2}
                groupingOptions={[1, 10, 100]}
            />
            {/* <OrderBook />
            <Footer /> */}
        </>
    )
}

export default App
