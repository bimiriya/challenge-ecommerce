import React, { Component } from 'react';
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';
import { catalog } from './../../../../data/mock.json';

class Products extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row>
            {catalog.map(product => {
              return (
                <Col xs={6} sm={3} md={2} lg={2} key={product.id} >
                  <Thumbnail src={product.imageURL} >
                    <h3>{product.name}</h3>
                    <p>
                      Price: {product.currency}
                      {product.price}
                    </p>
                    <p>
                      <Button bsStyle="primary">Add to cart</Button>
                    </p>
                  </Thumbnail>
                </Col>
              );
            })}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Products;
