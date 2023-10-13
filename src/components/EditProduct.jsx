import React from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'
import { returnDiscountAmount, returnTotal } from "../utils/helper";

const EditProduct = ({ showEdit, handleEditClose, handleEditChange, editedProduct, editProduct }) => {

      return (

            <Modal show={showEdit} onHide={handleEditClose} className='p-2'>
                  <Modal.Header closeButton>
                        <Modal.Title>Edit Products</Modal.Title>
                  </Modal.Header>

                  <Form className='p-3'>
                        <FloatingLabel controlId="floatingInput" label="Image" className="mb-3">
                              <Form.Control type="text" placeholder="Image" name='thumbnail'
                                    value={editedProduct.thumbnail}
                                    onChange={handleEditChange}
                              />
                        </FloatingLabel>


                        <FloatingLabel controlId="floatingInput" label="Title" className="mb-3">
                              <Form.Control type="text" placeholder="Title" name='title'
                                    value={editedProduct.title}
                                    onChange={handleEditChange}
                              />
                        </FloatingLabel>


                        <div className='d-flex gap-4'>
                              <FloatingLabel controlId="floatingInput" label="Price" className="mb-3 w-50">
                                    <Form.Control type="text" placeholder="Price" name='price'
                                          value={editedProduct.price}
                                          onChange={handleEditChange}
                                    />
                              </FloatingLabel>


                              <FloatingLabel controlId="floatingInput" label="Discount" className="mb-3 w-50">
                                    <Form.Control type="text" placeholder="Discount" name='discount'
                                          value={editedProduct.discountPercentage}
                                          onChange={handleEditChange}
                                    />
                              </FloatingLabel>
                        </div>


                        <FloatingLabel controlId="floatingDesc" label="Description" className="mb-3">
                              <Form.Control type="text" placeholder="Description" name='descripton'
                                    value={editedProduct.description}
                                    onChange={handleEditChange}
                              />
                        </FloatingLabel>





                        <FloatingLabel
                              controlId="Amount"
                              label="Discount Amount"
                              className="mb-3"
                        >
                              <Form.Control
                                    type="text"
                                    readOnly
                                    placeholder="Discount Amount"
                                    value={"$" + returnDiscountAmount(editedProduct)}
                              />
                        </FloatingLabel>


                        <FloatingLabel controlId="TOtal" label="TOtal" className="mb-3">
                              <Form.Control
                                    type="text"
                                    readOnly
                                    placeholder=" TOtal"
                                    value={"$" + returnTotal(editedProduct)}
                              />
                        </FloatingLabel>
                  </Form>

                  <Modal.Footer>
                        <Button variant="secondary" onClick={handleEditClose}>
                              Close
                        </Button>
                        <Button variant="primary" onClick={(e) => editProduct(e)}>
                              Save Changes
                        </Button>
                  </Modal.Footer>
            </Modal>
      )
}

export default EditProduct;