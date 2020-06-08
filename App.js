
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';


export default class App extends Component {

  constructor() {
    super()
    this.state = {
      typedVal:"",
      result:""
    }
    this.numPressed = this.numPressed.bind(this)
    this.operPressed = this.operPressed.bind(this)
  }

  // -------------------------------

  operPressed(operation){
    switch (operation) {
      case 'DEL':
        let oper = this.state.typedVal.split('')
        oper.pop('')
        this.setState(
          {
            typedVal:oper.join('')
          }
        )
        break;
    
      case '+':
        let checkAdd = this.state.typedVal.split('').pop('')
        if(checkAdd != '+'){
          this.setState({
            typedVal:this.state.typedVal+operation
          })
        }else{
          let last = this.state.typedVal.split('')
          
          this.setState({
            typedVal:last.join('')
          })
          alert("You can't have more than one operators consecutively")
        }

        break;

      case '-':
        let checkMinus = this.state.typedVal.split('').pop('')
        if(checkMinus != '-'){
          this.setState({
            typedVal:this.state.typedVal+operation
          })
        }else{
          let last = this.state.typedVal.split('')
          
          this.setState({
            typedVal:last.join('')
          })
          alert("You can't have more than one operators consecutively")
        }

        break;

      case '*':
        let checkMul = this.state.typedVal.split('').pop('')
        if(checkMul != '*'){
          this.setState({
            typedVal:this.state.typedVal+operation
          })
        }else{
          let last = this.state.typedVal.split('')
          
          this.setState({
            typedVal:last.join('')
          })
          alert("You can't have more than one operators consecutively")
        }

        break;

      case '/':
        let checkDiv = this.state.typedVal.split('').pop('')
        if(checkDiv != '/'){
          this.setState({
            typedVal:this.state.typedVal+operation
          })
        }else{
          let last = this.state.typedVal.split('')
          
          this.setState({
            typedVal:last.join('')
          })
          alert("You can't have more than one operators consecutively")
        }

        break;

      case 'CLR':
        this.setState({
          typedVal:"",
          result:""
        })

      default:
        break;
    }
  }

  // ------------------------------

  numPressed(text){
    if(text == '='){
      let value = eval(this.state.typedVal)
      this.setState({
        result:value
      })
    }
    else if(text == '.'){
      let checkDot = this.state.typedVal.split('').pop('')
        if(checkDot != '.'){
          this.setState({
            typedVal:this.state.typedVal+text
          })
        }else{
          let last = this.state.typedVal.split('')
          
          this.setState({
            typedVal:last.join('')
          })
          alert("You can't have more than one operators consecutively")
        }
    }
    else{
      this.setState({
        typedVal:this.state.typedVal + text
      })
    }
  }


  // --------------------------------------------------------------------------------------

  render(){

    let rows=[]
    let nums=[ [1,2,3], [4,5,6], [7,8,9], [ '.', 0, '='] ]
    for (let i = 0; i < 4; i++) {
      let row = []
      for (let j = 0; j < 3; j++) {
        row.push(
          <TouchableOpacity onPress={()=>this.numPressed(nums[i][j])} >
            <Text style={styles.numText}>{nums[i][j]}</Text>
          </TouchableOpacity>
        )
      }
      
      rows.push(
        <View style={styles.rowWise}>
          {row}
        </View>
      )
    }

    let rows1 = []
    let ops = [ 'DEL' , '+', '-', '*', '/' , 'CLR' ]

    for (let i = 0; i < 6; i++) {
      let row1 = []
      row1.push(
        <TouchableOpacity onPress={()=>this.operPressed(ops[i])}>
          <Text style={styles.operationText}>{ops[i]}</Text>
        </TouchableOpacity>
      )
      rows1.push(
        <View style={styles.rowWise}>
          {row1}
        </View>
      )
    }

    // -------------------------------------------------------------------------------------

    return(
      <View style={styles.container}>

        <View style={styles.result}>
          <Text style={styles.resultText}>{this.state.typedVal}</Text>
        </View>
        
        <View style={styles.calculations}>
          <Text style={styles.calcText}>{this.state.result}</Text>
        </View>

        <View style={styles.buttons}>

          <View style={styles.numbers}>
            {rows}
          </View>

          <View style={styles.operations}>
            {rows1}
          </View>
        </View>

      </View>
    );
  }
}

// -----------------------------------------------------------------------------------------

const styles = StyleSheet.create({

  container: {
    flex:1,
  },

  result: {
    flex:2.25,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'flex-end',
  },

  calculations: {
    flex:1.5,
    backgroundColor:'pink',
    justifyContent:'center',
    alignItems:'flex-end',
  },

  buttons: {
    flex:6.25,
    flexDirection:'row',
  },

  numbers: {
    flex:3,
    backgroundColor:'coral',
  },

  operations: {
    flex:1,
    backgroundColor:'black',
  },

  resultText: {
    fontSize:45,
    marginRight:20,
  },

  calcText: {
    fontSize:25,
    marginRight:20,
  },

  rowWise: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
  },

  numText: {
    fontSize:23,
    fontWeight:'bold',
    padding:10,
  },

  operationText: {
    fontSize:23,
    fontWeight:'bold',
    padding:10,
    color:'white',
  },
  
});
