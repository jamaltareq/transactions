import React from 'react'
import logo from './../../Assits/logo.png';
export default function NavBar() {

    return (
        <nav className="navbar navbar-expand-lg bg-nav">
            <div className="container p-3 d-flex justify-content-center">
                <a className="navbar-brand d-flex" href="#">
                    <span className="d-flex align-items-center rotet"><img src={logo} width="50" alt="" /></span>
                    <span className="d-flex flex-column text-white">
                        <span className="fw-bold">Customer</span>
                        <span className="fw-medium fs-6">transactions</span>
                    </span>

                </a>


            </div>
        </nav>
    )
}
