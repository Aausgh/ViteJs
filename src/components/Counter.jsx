import React, { useState } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Button } from "react-bootstrap";

const Counter = () => {


      let [count, setCount] = useState(0);

      const increment = (e) => {
            e.preventDefault();
            setCount(count + 1);

      }

      const decrement = (e) => {
            e.preventDefault();
            setCount(count - 1);
      }

      const reset = (e) => {
            e.preventDefault();
            setCount(0);
      }



      return (
            <Card className='w-25 m-auto mt-5 shadow p-3 mb-5 bg-body rounded text-center'>
                  <CardHeader>
                        <h3>Counter</h3>
                  </CardHeader>
                  <CardBody>
                        <h4>{count}</h4>
                  </CardBody>
                  <CardFooter>
                        <Button variant="success" className="me-2" onClick={increment}>Increment</Button>
                        <Button variant="warning" className="me-2" onClick={decrement}>Decrement</Button>
                        <Button variant="danger" onClick={reset}>Reset</Button>
                  </CardFooter>
            </Card>
      );
};

export default Counter;