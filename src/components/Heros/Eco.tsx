import React from 'react'
import { Link } from 'react-router-dom';

const Eco: React.FC = () => {
    // get state from store
    // const { language } = getLanguageState.useState();

    return (
        <div className="hero-body">
            <div className="container has-text-centered">
                <div className="columns is-vcentered">
                    <div className="column is-5">
                        <figure className="image is-4by3">
                            <img src="https://picsum.photos/800/600/?random" alt="Description" />
                        </figure>
                    </div>
                    <div className="column is-6 is-offset-1">
                        <h1 className="title is-2">
                            Superhero Scaffolding
                        </h1>
                        <h2 className="subtitle is-4">
                            Let this cover page describe a product or service.
                        </h2>
                        <br />
                        <p className="has-text-centered">
                            <button className="button is-medium is-info is-outlined">
                                <Link to={'/about'} >
                                    earn more
                                </Link>
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eco