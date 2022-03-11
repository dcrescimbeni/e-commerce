import React from 'react'
import { Link } from 'react-router-dom'

const Thanks = () => {
    return (
        <div className="jumbotron text-center">
            <h1 className="display-3">Gracias por su orden!</h1>
            <p className="lead"><strong>Por favor revise su email</strong> para ver los detalles de su orden.</p>
            <hr />
            <p>
                Problemas? <Link to="/">Contactenos</Link>
            </p>
            <p className="lead">
                <Link to="/" className="btn btn-primary btn-sm" role="button">Siga comprando</Link>
            </p>
        </div>
    )
}

export default Thanks