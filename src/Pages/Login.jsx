import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { errorToast, successToast } from '../services/toast.service';


const Login = () => {
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");

      const nav = useNavigate();


      const handleLogin = async (event) => {
            event.preventDefault();
            const data = {
                  email,
                  password
            };
            try {
                  const resp = await axios.post(
                        'https://backend-mu-pied.vercel.app/users/login',
                        data,
                  );

                  const loginResp = resp.data;

                  if (loginResp.status) {
                        nav("/products");
                        successToast(loginResp.message)
                  }


            } catch (err) {

                  errorToast(err.response.data.message)
            }

      };

      return (
            <>
                  <Form
                        className="w-25 m-auto mt-5 shadow p-3 mb-5 bg-body rounded"

                  >
                        <h2 className="text-center">Login</h2>

                        <Form.Group className="mb-3" controlId="email">
                              <Form.Label>Email address</Form.Label>
                              <Form.Control
                                    type="email"
                                    placeholder="Enter Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                              />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="password">
                              <Form.Label>Password</Form.Label>
                              <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                              />
                        </Form.Group>


                        <Button variant="primary" className="w-100" type="submit" id="login-btn" onClick={handleLogin}>
                              Login
                        </Button>


                        <p className='text-center mt-2'>Don't Have a Account?
                              <a href="./signup" className='ms-2'>Signup</a>
                        </p>
                  </Form>
            </>
      );
};

export default Login;
