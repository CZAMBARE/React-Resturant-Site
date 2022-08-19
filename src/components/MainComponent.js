import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Home from './HomeComponent';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import Header from './HeaderCompont';
import Contact from './ContactComponent';
import Aboutus from './AboutUsComponent';
import Footer from './FooterComponet'
import DishDetail from './DishDetailsCompoenet';
//import { DISHES } from '../shared/dishes';
//import { COMMENTS } from '../shared/comments';
//import { LEADERS } from '../shared/leaders';
//import {PROMOTIONS} from '../shared/promotions';
import {Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


const mapStateToProps = state => {

  return{
    dishes: state.dishes,
    comments:state.comments,
    promotions:state.promotions,
    leaders:state.leaders
  }
    
}

class Main extends Component {

  constructor(props) {
    super(props);
    
  }

  



  render() {
    console.log("Home render method invoked");
    const HomePage = () =>{
      return(
        <Home dish={this.props.dishes.filter((dish) => dish.featured)[0] } 
              promotion={this.props.promotions.filter((promo) => promo.featured)[0] } 
              leader={this.props.leaders.filter((leader) => leader.featured)[0] } 
        />
      );
    }

    const DishWithId =({match}) => {
         //console.log("Fetching Passed param");
         //console.log(parseInt(match.params.dishId,10));
         //console.log(this.state.comments.filter ((comment) => comment.dishId = parseInt(match.params.dishId,10) ));

         return (
          <DishDetail dish={this.props.dishes.filter((dish) =>dish.id === parseInt(match.params.dishId,10) )[0]} 
              comments = {this.props.comments.filter ((comment) => comment.dishId === parseInt(match.params.dishId,10) ) }
          />
         )
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/contactus" component={Contact} />
          <Route exact path="/menu" component={ () => <Menu dishes={this.props.dishes} />} />
          <Route exact path="/aboutus" component={ () => <Aboutus leaders={this.props.leaders} /> } />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));