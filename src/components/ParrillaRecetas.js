import React, { useContext } from 'react'
import Toast from 'react-bootstrap/Toast'
//import ToastContainer from 'react-bootstrap/ToastContainer'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState } from 'react'
import RecipeContext from '../context/RecipeContext';
import { ProductCard } from './ProductCard'
import "./Components.css"

export const ParrillaRecetas = () => {

    const { products } = useContext(RecipeContext)
    /*
    const [showA, setShowA] = useState(true);
    const [showB, setShowB] = useState(true);

    const toggleShowA = () => setShowA(!showA);
    const toggleShowB = () => setShowB(!showB);
    */
    console.log("products:", products);

    return (
        <>
            <h3>Somos el Recetario que Sasona el Mundo!</h3>

            <h5>Disfruta de tu mejor opcion</h5>
            <div className="contCard">
                {products.map((e) => <ProductCard
                    key={e._id}
                    nameReceta={e.nameReceta}
                    photoReceta={e.photoReceta}
                    descReceta={e.descReceta}
                    _id={e._id}

                />
                )}

            </div>
            {/* listaIngredientes={e.listaIngredientes}
            listaIngredientes={e.listaIngredientes.map(x=>)}
            listaIngredientes={(e.listaIngredientes).map((x) => <>{x.nameReceta}</>)}
            listaIngredientes={(e.listaIngredientes).map((x) => <>{x.ingre}</>)}
            */}

            {/* PROPIEDADES ENVIADAS ANTES DE objProduct
            nameReceta={e.nameReceta}
                    photoReceta={e.photoReceta}

                descReceta={e.descReceta}
                
                objProduct={e.nameReceta, e.photoReceta, e.descReceta}
                
                */}











            {/*** <Row>
                <Col md={6} className="mb-2">
                    <Button onClick={toggleShowA} className="mb-2">
                        Toggle Toast <strong>with</strong> Animation
                    </Button>
                    <Toast show={showA} onClose={toggleShowA}>
                        <Toast.Header>
                            <img
                                src="holder.js/20x20?text=%20"
                                className="rounded me-2"
                                alt=""
                            />
                            <strong className="me-auto">Bootstrap</strong>
                            <small>11 mins ago</small>
                        </Toast.Header>
                        <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
                    </Toast>
                </Col>
                <Col md={6} className="mb-2">
                    <Button onClick={toggleShowB} className="mb-2">
                        Toggle Toast <strong>without</strong> Animation
                    </Button>
                    <Toast onClose={toggleShowB} show={showB} animation={false}>
                        <Toast.Header>
                            <img
                                src="holder.js/20x20?text=%20"
                                className="rounded me-2"
                                alt=""
                            />
                            <strong className="me-auto">Bootstrap</strong>
                            <small>11 mins ago</small>
                        </Toast.Header>
                        <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
                    </Toast>
                </Col>
            </Row>
            */}

        </>
    )
}
