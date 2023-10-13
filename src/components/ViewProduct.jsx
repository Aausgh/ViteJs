import React from 'react'
import { Button, FloatingLabel, Form, Modal, Image } from 'react-bootstrap'

const ViewProduct = ({ showView, handleViewClose, viewProduct }) => {
      return (
            <Modal show={showView} onHide={handleViewClose} className='p-2'>

                  <div className="bg-dark">
                        <Modal.Header closeButton>
                              <Modal.Title className='text-center h5 text-white'>Product Detail</Modal.Title>
                        </Modal.Header>

                        <Form className='p-3'>
                              <FloatingLabel controlId="floatingInput" className="mb-3 text-center">
                                    <Image name='thumbnail'
                                          src={viewProduct.thumbnail}
                                          height={200}
                                          width={300}
                                          className='rounded-2'
                                    />
                              </FloatingLabel>

                              <FloatingLabel controlId="floatingInput" label="Title" className="mb-3">
                                    <Form.Control type="text" placeholder="Title" name='title' readOnly
                                          value={viewProduct.title}
                                    />
                              </FloatingLabel>


                              <div className='d-flex gap-4'>
                                    <FloatingLabel controlId="floatingInput" label="Price" className="mb-3 w-50">
                                          <Form.Control type="text" placeholder="Price" name='price' readOnly
                                                value={viewProduct.price}
                                          />
                                    </FloatingLabel>


                                    <FloatingLabel controlId="floatingInput" label="Discount" className="mb-3 w-50">
                                          <Form.Control type="text" placeholder="Discount" name='discount' readOnly
                                                value={viewProduct.discountPercentage}
                                          />
                                    </FloatingLabel>
                              </div>


                              <FloatingLabel controlId="floatingDesc" label="Description" className="mb-3">
                                    <Form.Control type="text" placeholder="Description" name='descripton' readOnly
                                          value={viewProduct.description}
                                    />
                              </FloatingLabel>
                        </Form>

                        <Modal.Footer>
                              <Button variant="secondary" onClick={handleViewClose}>
                                    Close
                              </Button>
                        </Modal.Footer>
                  </div>
            </Modal>
      )
}

export default ViewProduct;