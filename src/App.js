import React from 'react';
import {Button,List} from "antd-mobile";

class App extends React.Component{
  render() {
    const boss = '李云龙';
    return (
        <div>
          <h2>独立团团长{boss}</h2>
          <One boss='张大彪'></One>
          <Knight boss="孙德胜"></Knight>
        </div>
    )
  }
}

function Knight(props) {
  return <h2>骑兵连连长{props.boss},冲啊</h2>
}

class One extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      soldiers :['虎子','柱子','王根生']
    };
    // this.addSoldier = this.addSoldier.bind(this);
  }
  UNSAFE_componentWillMount() {
    console.log('将要加载')
  }
  componentDidMount() {
    console.log('加载完毕')
  }
  addSoldier(){
    console.log('hello');
    this.setState({
      soldiers:[...this.state.soldiers,'新兵'+Math.random()]
    })
  }
  render() {
    console.log('正在加载')
    return (
        <div>
          <h2>一营营长{this.props.boss}</h2>
          <Button type='primary' onClick={() =>this.addSoldier()}>新兵入伍</Button>
            <List renderHeader={()=>'士兵列表'}>
                {this.state.soldiers.map(v=>{
                    return (
                        <List.Item key={v}>{v}</List.Item>
                    )
                })}
            </List>
        </div>
    )
  }
}

export default App;
