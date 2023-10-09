import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { errorToast, successToast } from '../services/toast.service';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

      const [fullName, setFullName] = useState("");
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");

      const nav = useNavigate();

      const signupHandler = async (event) => {
            event.preventDefault();
            const data = {
                  fullName,
                  email,
                  password,
            };

            try {
                  const resp = await axios.post(
                        "https://backend-mu-pied.vercel.app/users/register",
                        data
                  );
                  const signupResp = resp.data;

                  if (signupResp.status) {
                        nav("/");
                        successToast(signupResp.message);
                  }

            } catch (err) {

                  errorToast(err.response.data.message)
            }
      };

      return (
            <Form className="w-25 m-auto mt-5 shadow p-3 mb-5 bg-body rounded" >
                  <h2 className="text-center">Signup</h2>

                  <Form.Group className="mb-3" controlId="fullName">
                        <Form.Label>FullName</Form.Label>
                        <Form.Control
                              type="text"
                              placeholder="Enter Fullname"
                              onChange={(e) => setFullName(e.target.value)}
                        />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                              type="email"
                              placeholder="Enter Email"
                              onChange={(e) => setEmail(e.target.value)}
                        />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                              type="password"
                              placeholder="Password"
                              onChange={(e) => setPassword(e.target.value)}
                        />
                  </Form.Group>


                  <Button variant="primary" className="w-100" type="submit" onClick={signupHandler}>
                        Register
                  </Button>

                  <p className='text-center mt-2'>Already Have a Account?
                        <a href="./" className='ms-2'>Login</a>
                  </p>
            </Form>
      );
};

export default Signup;
