import Head from 'next/head'
import HeadTag from '../Components/HeadTag';

const about = ({ currentTheme }) => {
    return (
        <>
            <HeadTag page='About'/>
            <div>
                Hello, World
            </div>
        </>
    )
}

export default about
