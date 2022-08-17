import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


  function RenderMenuItem({dish, onClick}){
    return(
      <Card  onClick={() => onClick(dish.id)}>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardImgOverlay body className="ml-5  text-md-left">
            <CardTitle heading><h3>{dish.name}</h3></CardTitle>
          </CardImgOverlay>
      </Card>
    );
  }
const Menu = (props) =>{

    const menu = props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <RenderMenuItem dish={dish} onClick={props.onClick} />
        </div>
      );
    });

     console.log('Menu component render method invoked');

    return (
      <div className="container">
        <div className="row">
            {menu}
        </div>
      </div>
    );
  }

    

       

export default Menu;
