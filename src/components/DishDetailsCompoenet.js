import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';



function RenderComment({comments}){
    //console.log(comments);
    const commentList = comments.map((comments)=>{
    return(
        <div key={comments.id} className="col-12 ">
        <div className='col-12 mt-4'>{comments.comment}</div>
        <div className='row'>
            <div className='col-auto  text-md-left ml-3 mt-1'>--{comments.author},</div>
            <div className='col-auto mt-1'>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments.date)))}</div>
        </div>
        </div>
       );  
    });
    return(
        <div className='row'>
            <div className='col-12 mt-4'><h4>Comments</h4></div>
            <div className="row">
              {commentList}
        </div>

        </div>
    );
     
}

function RenderDish({dish}){
    //console.log(dish);
    //console.log('Render dish selected from Dish Component');
    if(dish != null){
        //console.log('Inside If block');
        return(
            <div className='container'>
                <div className='row'>
                    <div className="col-12 col-md-5 m-1">
                      <Card>
                        <div className="row text-md-left">
                            <CardImg className='col-12' width="100%" src={dish.image} alt={dish.name} />
                            <div className='col-12 m-3'><CardText><h4>{dish.name}</h4></CardText></div>
                            <div className='col-12 ml-3'><CardText>{dish.description}</CardText></div>
                        </div>
                      </Card>
                    </div>
                    
                    <div className="col-12 col-md-5 m-1 text-md-left mt-2">
                            <RenderComment comments={dish.comments} />
                    </div>
                </div>
            </div>
        )
    }
    else{
      return(
        <div></div>
      );
    }
  }

const DishDetails = (props) => {
    const dish = props.dish;
    console.log('Dish Details compoenet Render is invoked');
    return (
        <div className="container">
            <div className='row'>
              <RenderDish dish={dish} />
            </div>
        </div>
    )
    
}

export default DishDetails ;