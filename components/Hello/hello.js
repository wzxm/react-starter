import React from 'react';
import MyOption from './myOption.js';

require('./hello.css');

class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        	selected: false
        }

        this.select = this.select.bind(this);
    }

    /** 
     * 这个调用时机是在组件创建，并初始化了状态之后，在第一次绘制 render() 之前。可以在这里做一些业务初始化操作，也可以设置组件状态。
     *	这个函数在整个生命周期中只被调用一次。如果在这个函数里面调用setState，本次的render函数可以看到更新后的state，并且只渲染一次。 
    */
    // componentWillMount(){
    // 	console.log(123);
    // }

    /* 调用了render方法后，组件加载成功并被成功渲染出来以后所执行的hook函数，一般会将网络请求等加载数据的操作，放在这个函数里进行，来保证不会出现UI上的错误。 */
    // componentDidUpdate(){

    // }

    /* 返回布尔值（决定是否需要更新组件） */
    // shouldComponentUpdate(nextProps, nextState) {

    // }

    select(event){
    	if(event.target.textContent === this.state.selected){
    		this.setState({selected: false});
    	} else {
    		this.setState({selected: event.target.textContent});
    	}
    }

    render() {
    	let mySelectStyle = {
    		border: '1px solid #999',
            display: 'inline-block',
            padding: '5px'
    	}
        return (
        	<div style={mySelectStyle}>
        		<MyOption state={this.state.selected} select={this.select} value="Volvo"></MyOption>
                <MyOption state={this.state.selected} select={this.select} value="Saab"></MyOption>
                <MyOption state={this.state.selected} select={this.select} value="Mercedes"></MyOption>
                <MyOption state={this.state.selected} select={this.select} value="Audi"></MyOption>
        	</div>
        )
    }
}

export default Hello;
