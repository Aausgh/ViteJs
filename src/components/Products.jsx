import React, { useEffect, useState } from 'react'
import { Button, Card, CardHeader, CardFooter, CardBody } from 'react-bootstrap';
import axios from 'axios';


const Products = () => {

      const [products, setProducts] = useState([]);

      async function getallProducts() {
            const resp = await axios.get("https://dummyjson.com/products")
            setProducts(resp.data.products);
      }

      useEffect(() => {
            getallProducts();
      }, []);

      const deleteHandler = (e, id) => {
            e.preventDefault();

            const filteredProds = products.filter((prod) => {
                  return prod.id !== id;
            })
            setProducts(filteredProds);
      }




      return (
            <>
                  <h3 className='text-center text-decoration-underline'>Products</h3>
                  <div className="d-flex flex-wrap container">

                        {
                              products.map((product) => {

                                    return (

                                          <Card className='card bg-black text-bg-dark' style={{ height: 400 }} key={product.id}>
                                                <CardHeader className='h-50'>
                                                      <Card.Img className='h-100 w-100' src={product.thumbnail} alt="product" />

                                                      <h4 className="text-center text-capitalize mt-1">{product.title.length > 15
                                                            ? product.title.slice(0, 14) + "..."
                                                            : product.title}
                                                      </h4>
                                                </CardHeader>

                                                <CardBody className='h-25 mt-3'>

                                                      <div className="priceContainer">
                                                            <p>Price: ${product.price}</p>
                                                            <p>Discount: {product.discountPercentage}% </p>
                                                      </div>

                                                      <p>{product.description.slice(0, 45) + "..."}</p>
                                                </CardBody>

                                                <CardFooter>
                                                      <Button variant="primary">View</Button>
                                                      <Button variant="secondary">Edit</Button>
                                                      <Button variant="danger" onClick={(e) => deleteHandler(e, product.id)}>Delete</Button>

                                                </CardFooter>

                                          </Card>
                                    )
                              })
                        }
                  </div>
            </>
      )
}

export default Products;