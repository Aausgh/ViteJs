import React from 'react'
import { Button, Card, CardHeader, CardFooter, CardBody } from 'react-bootstrap';
import { returnDiscountAmount, returnTotal } from "../utils/helper";

const ProductList = ({ product, deleteHandler, editHandler, viewHandler }) => {

      return (
            <>

                  <Card className='card bg-black text-bg-dark' style={{ height: 450 }} >
                        <CardHeader className='h-50 w-100'>
                              <Card.Img className='h-100 w-100' src={product.thumbnail} alt="product" />

                              <h4 className="text-center text-capitalize mt-1">{product.title.length > 15
                                    ? product.title.slice(0, 14) + "..."
                                    : product.title}
                              </h4>
                        </CardHeader>

                        <CardBody className='h-25 mt-3'>


                              <p>
                                    <b>Price :</b> <del>${product.price}</del> ${returnTotal(product)}
                              </p>
                              <p>
                                    <b>Discount :</b> {product.discountPercentage}% (Rs.{returnDiscountAmount(product)})
                              </p>


                              <p>{product.description.slice(0, 45) + "..."}</p>
                        </CardBody>

                        <CardFooter>
                              <Button variant="primary" onClick={(e) => viewHandler(e, product.id)}>View</Button>
                              <Button variant="secondary" onClick={(e) => editHandler(e, product.id)}>Edit</Button>
                              <Button variant="danger" onClick={(e) => deleteHandler(e, product.id)}>Delete</Button>

                        </CardFooter>

                  </Card>


            </>
      )
}

export default ProductList