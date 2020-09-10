import React,{ Component } from 'react';
import Order from '../../../components/order/order';
import axiosOrder from '../../../axios-orders';

export default class Orders extends Component{

    state = {
        orders:[],
        loading:false
    }

    componentDidMount(){
        this.setState({loading:true});
        axiosOrder.get('/orders.json')
            .then((res) => {
                const fetchOrders = [];
                for(let key in res.data){
                    fetchOrders.push({
                        ...res.data[key],
                        id:key
                    })
                }
                this.setState({orders:fetchOrders});
            })
            .catch((err) => {})
            .finally(() => {this.setState({loading:false})})
    }

    render(){
        return(
            <div>
                {this.state.orders.map((order) => (<Order 
                        key={order.key}
                        ingredients={order.ingredients}
                        price={order.price}
                />))}
            </div>
        );
    }
}