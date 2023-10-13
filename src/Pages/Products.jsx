import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductList from '../components/ProductList';
import Loader from '../components/Loader';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { errorToast } from '../services/toast.service';
import AddProducts from '../components/AddProducts';
import EditProduct from '../components/EditProduct';
import ViewProduct from '../components/ViewProduct';


const Products = () => {

      const [products, setProducts] = useState([]);
      const [originalProduct, setOriginalProducts] = useState([]);
      const [categories, setCategories] = useState([]);


      const [isLoading, setIsLoading] = useState(true);
      const [show, setShow] = useState(false);
      const [showEdit, setShowEdit] = useState(false);
      const [showView, setShowView] = useState(false);
      const [editedProduct, setEditedProduct] = useState({});
      const [viewProduct, setViewProduct] = useState({});
      const URL = import.meta.env.VITE_BACKEND_URL;

      const [product, setProduct] = useState({
            thumbnail: "",
            title: "",
            price: "",
            discountPercentage: "",
            description: "",
      });

      const getallProducts = async () => {
            try {
                  setIsLoading(true);
                  const { data } = await axios.get(URL + "products");
                  setProducts(data.products);
                  setOriginalProducts(data.products);

                  const categories = data.products.map((product) => {
                        return product.category;
                  });
                  const uniqueCategories = [...new Set(categories)];
                  setCategories(uniqueCategories);
                  setIsLoading(false);

            } catch (error) {
                  errorToast(error.response.data);
                  setIsLoading(false);
            }
      }

      useEffect(() => {
            getallProducts();
      }, []);



      const deleteHandler = (e, id) => {
            e.preventDefault();

            const filteredProds = products.filter((prod) => {
                  return prod.id !== id;
            });
            setProducts(filteredProds);
      };




      const addProducts = (e) => {
            e.preventDefault();
            setShow(true);
      }

      function handleClose() {
            setShow(false);
      }

      function handleEditClose() {
            setShowEdit(false);
      }

      function handleViewClose() {
            setShowView(false);
      }




      const handleChange = (e) => {
            setProduct((prev) => {
                  return { ...prev, [e.target.name]: e.target.value, id: Date.now() }
            })
      }

      const addProductHandler = (e) => {
            e.preventDefault();

            setProducts([product, ...products]);
            setShow(false);
      }





      const editHandler = (e, id) => {
            e.preventDefault();

            const prod = products.find((product) => product.id === id);
            setEditedProduct(prod);
            setShowEdit(true);
      }

      function handleEditChange(e) {
            setEditedProduct((prev) => {
                  return { ...prev, [e.target.name]: e.target.value };
            });
      }

      function editProduct(e) {
            e.preventDefault();
            //API CALL - response true
            const updatedProd = products.map((product) => {
                  return product.id === editedProduct.id ? editedProduct : product;
            });
            setProducts(updatedProd);
            setShowEdit(false);
      }


      const viewHandler = (e, id) => {
            e.preventDefault();
            const prod = products.find((product) => product.id === id);
            setViewProduct(prod);
            setShowView(true);
      }


      function searchProduct(e) {
            const searchedData = originalProduct.filter((product) => {
                  return product.title.toLowerCase().includes(e.target.value.toLowerCase());
            });
            setProducts(searchedData);
      }


      function filterProducts(data) {
            if (data !== "") {
                  const filteredProd = originalProduct.filter((item) => {
                        return item.category === data;
                  });
                  setProducts(filteredProd);
            } else {
                  setProducts(originalProduct);
            }
      }

      return (
            <>
                  {
                        isLoading ? (
                              <Loader />
                        ) : (
                              <>

                                    <div className="container">
                                          <h3 className='text-center text-decoration-underline'>Products</h3>


                                          <div className="d-flex justify-content-between mb-3">
                                                <Button variant='primary' className='btn1' onClick={addProducts}>Add Products</Button>

                                                <Form.Select
                                                      style={{ width: "170px" }}
                                                      size="sm"
                                                      className="rounded-pill border-black"
                                                      onChange={(e) => filterProducts(e.target.value)}
                                                >
                                                      <option value="">Filter by category</option>
                                                      {categories.map((category) => {
                                                            return (
                                                                  <option key={category} value={category}>
                                                                        <b>{category}</b>
                                                                  </option>
                                                            );
                                                      })}
                                                </Form.Select>


                                                <Form.Control
                                                      type="text"
                                                      name="searchKey"
                                                      className="rounded-pill border-black"
                                                      style={{ width: "10%" }}
                                                      placeholder='Search'
                                                      onChange={searchProduct}
                                                />

                                          </div>

                                          <div className="d-flex flex-wrap gap-3">
                                                {products.map((product) => {
                                                      return (
                                                            <ProductList
                                                                  product={product}
                                                                  deleteHandler={deleteHandler}
                                                                  key={product.id}
                                                                  editHandler={editHandler}
                                                                  viewHandler={viewHandler} />

                                                      )
                                                })}
                                          </div>

                                          <AddProducts
                                                show={show}
                                                handleClose={handleClose}
                                                handleChange={handleChange}
                                                addProductHandler={addProductHandler}
                                          />

                                          <EditProduct
                                                showEdit={showEdit}
                                                handleEditClose={handleEditClose}
                                                editedProduct={editedProduct}
                                                handleEditChange={handleEditChange}
                                                editProduct={editProduct}
                                          />

                                          <ViewProduct
                                                showView={showView}
                                                handleViewClose={handleViewClose}
                                                viewProduct={viewProduct}
                                          />
                                    </div>

                              </>
                        )
                  }


            </>

      )
}

export default Products;