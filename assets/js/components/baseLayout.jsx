import React from 'react'
// import { IndexLink } from 'react-router'


const LayoutBase = ({ children, location }) => (
    <div className="container">
        <div className="app__all">
            <header className="app__header">
                <div className="app__header_logo">
                    // <IndexLink to="/">МегаАпп</IndexLink>
                </div>
            </header>

                <div>
                // {React.cloneElement(children, {
                //     key: location.pathname
                // })}
                </div>
        </div>
        <footer className="app__footer">
            © N.E.M. 2016
        </footer>
    </div>
);


export default LayoutBase