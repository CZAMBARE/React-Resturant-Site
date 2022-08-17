import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';



class DishDetails extends Component{

    constructor(props){
        super(props);

    }

    commentiterate(comments){
        
        const commentList = comments.map((comments)=>{
        return(
            <div key={comments.id} className="col-12 ">
            <div className='col-12 mt-4'>{comments.comment}</div>
            <div className='row'>
                <div className='col-auto  text-md-left ml-3 mt-1'>--{comments.author},</div>
                <div className='col-auto mt-1'>{comments.date}</div>
            </div>
            </div>
           );  
        })
        return(
            <div className='row'>
                <div className='col-12 mt-4'><h4>Comments</h4></div>
                <div className="row">
                  {commentList}
            </div>

            </div>
        )
         
    }

    renderDish(dish){
        //console.log('Render dish selected from Dish Component');
        if(dish != null){
            //console.log('Inside If block');
            return(
                <div className='container'>
                    <div className='row'>
                        <div class="col-12 col-md-5 m-1">
                          <Card>
                            <div class="row text-md-left">
                                <CardImg className='col-12' width="100%" src={dish.image} alt={dish.name} />
                                <div className='col-12 m-3'><CardText><h4>{dish.name}</h4></CardText></div>
                                <div className='col-12 ml-3'><CardText>{dish.description}</CardText></div>
                            </div>
                          </Card>
                        </div>
                        
                        <div class="col-12 col-md-5 m-1 text-md-left mt-2">
                                {this.commentiterate(dish.comments)}
                        </div>
                    </div>
                </div>
            )


          /*return(
            <Card>
                <CardBody>
                    <div className='container'>
                        <div className='row'>
                            <div class="col-12 col-md-5 m-1">
                                <CardImg className='col-12' width="100%" src={dish.image} alt={dish.name} />
                                <div className='col-12'><CardText><h4>{dish.name}</h4></CardText></div>
                                <div className='col-12'><CardText>{dish.description}</CardText></div>
                            </div>
                            <div class="col-12 col-md-5 m-1 text-md-left mt-2">
                                {this.commentiterate(dish.comments)}
                            </div>
                        </div>
                    </div>
                </CardBody>   
            </Card>
          )*/
        }
        else{
          return(
            <div></div>
          );
        }
      }

    render(){

        const selecteddish = this.props.selectedDish;
        //console.log(selecteddish);
        
        return (
        <div className="container">
            <div className='row'>
              {this.renderDish(selecteddish)};
            </div>
        </div>
        )
    }
}

export default DishDetails ;