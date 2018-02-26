import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'

const HeadComponent = (props) => {
    return <Navbar color="faded" light expand="md">
          <NavbarBrand href="/">Shopping Cart</NavbarBrand>
        </Navbar>;
}

export default HeadComponent