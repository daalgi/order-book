import { FunctionComponent } from 'react'
import { Container } from './styles'


interface HeaderProps {
    spread: number,
    spreadPercentage: number,
    groupingOptions: number[]
}

const Header: FunctionComponent<HeaderProps> = props =>
    <Container>
        <h3>Order Book</h3>
        <p>{props.spread} ({props.spreadPercentage}%)</p>
        <h3>Grouping</h3>
    </Container>


export default Header