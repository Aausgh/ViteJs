import React, { useState } from 'react'
import { Card, Button, CardBody, CardHeader, CardFooter } from 'react-bootstrap'
import axios from 'axios'

const Quotes = () => {

      const [id, setId] = useState(1);
      const [author, setAuthor] = useState("");
      const [quote, setQuote] = useState("");

      const toogle = async (e) => {
            e.preventDefault();

            const { data } = await axios.get("https://dummyjson.com/quotes");
            const { quotes } = data;
            console.log(quotes);

            const qts = quotes.find((item) => item.id === id);
            setAuthor(qts.author);
            setQuote(qts.quote);

            setId(id + 1);
      }

      return (
            <>
                  <Card className='w-25 m-auto mt-5 shadow p-3 mb-5 bg-body rounded text-center'>
                        <CardHeader>
                              <h3>Quote Display</h3>
                        </CardHeader>
                        <CardBody>
                              <h4>{author}</h4>
                              <p>{quote}</p>
                        </CardBody>
                        <CardFooter>
                              <Button variant="primary" className="me-2" onClick={toogle}>Toogle</Button>

                        </CardFooter>
                  </Card>
            </>
      )
}

export default Quotes