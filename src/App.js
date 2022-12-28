import React, { useState} from 'react';

function App(props) {
  const[number , setNumber] = useState('0');

  const[error , setError] = useState('');

    const handlenumber = (val) => {

      if (number == '0'){

        setNumber(val);

      }

    else if (val =='c'){

      setNumber('0');

      setError('');

    }
    else if (val == '='){
  try {

    setNumber(`${eval(number)}`)

  } catch (error) {

    setError('Error in typing..')

  } 
    }
    else {
      setNumber(number+val);
    }

    }
  return (
    <div className='App' style={{width:300 , height:400 , backgroundColor:'blue'  ,display:'flex' , justifyContent:'center', alignItems:'center' , borderRadius:10 , margin:30 ,}} >
      <div className='calc-body'>
        <div style={{width:200 , height:70 , backgroundColor:'white' , marginLeft:20  , fontSize:20 , fontWeight:500 , borderRadius:10 ,backgroundColor:'lightcyan' , marginBottom:30}}>
          <div style={{margin:5}}>{number}{error}</div>
        </div>
          <div className='row' style={{display:'flex', flexDirection:'row' }}>
          <button onClick={() => handlenumber('1')} style={{width:40 , height:40 ,backgroundColor:'black' , margin:10 ,color:'white' , display:'flex' , justifyContent:'center', alignItems:'center' , borderRadius:10 , fontWeight:300}}>1</button>
          <button  onClick={() =>handlenumber('2')} style={{width:40 , height:40 ,backgroundColor:'black ' , margin:10 , display:'flex' , justifyContent:'center', alignItems:'center',color:'white' , borderRadius:10 , fontWeight:300}}>2</button>
          <button   onClick={() =>handlenumber('3')} style={{width:40 , height:40 ,backgroundColor:'black' , margin:10 , display:'flex' , justifyContent:'center', alignItems:'center',color:'white' , borderRadius:10 , fontWeight:300}}>3</button>
          <button   onClick={() =>handlenumber('+')} style={{width:40 , height:40 ,backgroundColor:'red' , margin:10 , display:'flex' , justifyContent:'center', alignItems:'center',color:'white' , borderRadius:10 , fontWeight:300}}>+</button>
          </div>
          <div className='row' style={{display:'flex', flexDirection:'row'}}>
          <button   onClick={() =>handlenumber('4')} style={{width:40 , height:40 ,backgroundColor:'black' , margin:10 , display:'flex' , justifyContent:'center', alignItems:'center',color:'white' , borderRadius:10 , fontWeight:300}}>4</button>
          <button   onClick={() =>handlenumber('5')} style={{width:40 , height:40 ,backgroundColor:'black ' , margin:10 , display:'flex' , justifyContent:'center', alignItems:'center',color:'white' , borderRadius:10 , fontWeight:300 }}>5</button>
          <button   onClick={() =>handlenumber('6')} style={{width:40 , height:40 ,backgroundColor:'black' , margin:10 , display:'flex' , justifyContent:'center', alignItems:'center',color:'white' , borderRadius:10 , fontWeight:300}}>6</button>
          <button  onClick={() =>handlenumber('-')} style={{width:40 , height:40 ,backgroundColor:'red' , margin:10 , display:'flex' , justifyContent:'center', alignItems:'center',color:'white' , borderRadius:10 , fontWeight:300}}>-</button>
          </div>
          <div className='row' style={{display:'flex', flexDirection:'row'}}>
          <button  onClick={() =>handlenumber('7')} style={{width:40 , height:40 ,backgroundColor:'black' , margin:10 , display:'flex' , justifyContent:'center', alignItems:'center',color:'white' , borderRadius:10 , fontWeight:300}}>7</button>
          <button  onClick={() =>handlenumber('8')} style={{width:40 , height:40 ,backgroundColor:'black ' , margin:10 , display:'flex' , justifyContent:'center', alignItems:'center',color:'white' , borderRadius:10 , fontWeight:300}}>8</button>
          <button   onClick={() =>handlenumber('9')} style={{width:40 , height:40 ,backgroundColor:'black' , margin:10 , display:'flex' , justifyContent:'center', alignItems:'center',color:'white' , borderRadius:10 , fontWeight:300}}>9</button>
          <button  onClick={() =>handlenumber('*')} style={{width:40 , height:40 ,backgroundColor:'red' , margin:10 , display:'flex' , justifyContent:'center', alignItems:'center',color:'white' , borderRadius:10 , fontWeight:300}}>*</button>
          </div>
          <div className='row' style={{display:'flex', flexDirection:'row'}}>
          <button    onClick={() =>handlenumber('0')} style={{width:40 , height:40 ,backgroundColor:'black' , margin:10 , display:'flex' , justifyContent:'center', alignItems:'center',color:'white' , borderRadius:10 , fontWeight:300}}>0</button>
          <button  onClick={() =>handlenumber('/')} style={{width:40 , height:40 ,backgroundColor:'red ' , margin:10 , display:'flex' , justifyContent:'center', alignItems:'center',color:'white' , borderRadius:10 , fontWeight:300}}>/</button>
          <button  onClick={() =>handlenumber('c')} style={{width:40 , height:40 ,backgroundColor:'red' , margin:10 , display:'flex' , justifyContent:'center', alignItems:'center',color:'white' , borderRadius:10 , fontWeight:300}}>C</button>
          <button  onClick={() =>handlenumber('=')} style={{width:40 , height:40 ,backgroundColor:'red' , margin:10 , display:'flex' , justifyContent:'center', alignItems:'center',color:'white', borderRadius:10 , fontWeight:300}}>=</button>
          </div>
    
      </div>
      
    </div>
  );
}

export default App;

