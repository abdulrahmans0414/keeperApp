import React from 'react'

export default function Footer() {

    // create a dynamic year
    const currentYear = new Date().getFullYear();

    return (
        <div>
            <p>Copyright &copy; {currentYear} </p>
        </div>
    )
}
