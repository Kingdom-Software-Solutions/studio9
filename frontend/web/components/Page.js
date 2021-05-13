import PropTypes from 'prop-types'
import Header from './Header'

export default function Page({ children }){
    return (
        <div>
            <Header />
            <h2>I am the global page component</h2>
            {/* children renders the given page in ../pages */}
            {children}
        </div>
    )
}

Page.propTypes = {
    children: PropTypes.any
}