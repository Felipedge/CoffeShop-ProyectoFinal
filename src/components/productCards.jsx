import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const urlBaseServer = "http://localhost:3000";
const MarketPlace = () => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isError, setIsError] = useState(false);

    const getProducts = async () => {
        try {
            const response = await axios.get(urlBaseServer + "/productos");
            console.log(response)
            setProducts(response.data);
            setIsError(false);
        } catch (error) {
            setIsError(true);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredProducts = products.filter((product) => {
        return product.nombre.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <div>
            {isError ?
                (<div className="noconexion">
                    -sin conexión al servidor-
                </div>)
                :
                (<div>
                    <div className='Search'>
                        <input
                            type="text"
                            className="form"
                            placeholder="Buscar cafe"
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                    </div>
                    
                    <div className="container">
                        {filteredProducts.map((product) => {
                            const src = `/product/${product.id}`;
                            return (
                                <div className='product'>
                                    <div key={product.id}>
                                        <div>
                                            <Link to={src}>
                                                <img src={product.imagen} alt="" />
                                            </Link>
                                        </div>
                                        <div className="productName">
                                            <Link to={src}>
                                                {product.nombre}
                                            </Link>
                                        </div>
                                        <div>
                                            <p>{product.descripcion}</p>
                                        </div>
                                        <div className="productPrice">
                                            ${product.precio}
    
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>)
            }
        </div>
    );
};

export default MarketPlace;