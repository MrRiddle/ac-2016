import React from 'react'

import Hero from './Hero'

import './header.less';

const Header = React.createClass({
  render() {
    return (
        <header className="header">
            <Hero></Hero>
        </header>
        )
  }
})

export default Header
