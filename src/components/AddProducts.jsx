import React from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'

const AddProducts = ({ show, handleClose, handleChange, addProductHandler }) => {

      return (

            <Modal show={show} onHide={handleClose} className='p-2'>
                  <Modal.Header closeButton>
                        <Modal.Title>Add Products</Modal.Title>
                  </Modal.Header>

                  <Form className='p-3'>
                        <FloatingLabel controlId="floatingInput" label="Image" className="mb-3">
                              <Form.Control type="text" placeholder="Image" name='thumbnail' onChange={handleChange} />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingInput" label="Title" className="mb-3">
                              <Form.Control type="text" placeholder="Title" name='title' onChange={handleChange} />
                        </FloatingLabel>

                        <div className='d-flex gap-2'>

                              <FloatingLabel controlId="floatingInput" label="Price" className="mb-3 w-50">
                                    <Form.Control type="text" placeholder="Price" name='price' onChange={handleChange} />
                              </FloatingLabel>

                              <FloatingLabel controlId="floatingInput" label="Discount" className="mb-3 w-50">
                                    <Form.Control type="text" placeholder="Discount" name='discountPercentage' onChange={handleChange} />
                              </FloatingLabel>

                        </div>

                        <FloatingLabel controlId="floatingInput" label="Description" className="mb-3">
                              <Form.Control type="text" placeholder="Description" name='description' onChange={handleChange} />
                        </FloatingLabel>
                  </Form>

                  <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                              Close
                        </Button>
                        <Button variant="primary" onClick={addProductHandler}>
                              Save Changes
                        </Button>
                  </Modal.Footer>
            </Modal>
      )
}

export default AddProducts