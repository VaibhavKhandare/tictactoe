import Head from 'next/head'
import {changeChar} from "./actions";
import {changeArr} from "./actions";
import {Rset} from "./actions";
import { useSelector, useDispatch } from "react-redux";
var tot = 0;
import { StyledHeader } from './Components/styles/Header.styled';
import { Menu         } from './Components/styles/Menu.styled';
import { Center       } from './Components/styles/Center.styled';
import { Text } from './Components/styles/Text.styled';
import { Cell } from './Components/styles/Cell.styled';
export default function Home() {
  const char = useSelector(state => state.changeChar);
  const arr = useSelector(state => state.changeArr);
  const dispatch = useDispatch();
  const reset=()=>{
    dispatch(Rset());
    tot = 0;
  }
  const check=(vc,ch)=>{
    if (ch===undefined) return;
    if(ch===vc[0] && vc[0]==vc[1] && vc[1]==vc[2]){
      alert(ch + ' won')
      reset()
    }else if(ch===vc[3] && vc[3]==vc[4] && vc[4]==vc[5]){
      alert(ch + ' won')
      reset()
    }else if(ch===vc[6] && vc[6]==vc[7] && vc[7]==vc[8]){
      alert(ch + ' won')
      reset()
    }else if(ch===vc[0] && vc[0]==vc[3] && vc[3]==vc[6]){
      alert(ch + ' won')
      reset()
    }else if(ch===vc[1] && vc[1]==vc[4] && vc[4]==vc[7]){
      alert(ch + ' won')
      reset()
    }else if(ch===vc[2] && vc[2]==vc[5] && vc[5]==vc[8]){
      alert(ch + ' won')
      reset()
    }else if(ch===vc[0] && vc[0]==vc[4] && vc[4]==vc[8]){
      alert(ch + ' won')
      reset()
    }else if(ch===vc[2] && vc[2]==vc[4] && vc[4]==vc[6]){
      alert(ch + ' won')
      reset()
    }
  }
  const clicked=(i)=>{
    if(arr[i]===""){
      dispatch(changeArr(i,char))
      let vc = arr;
      arr[i] = char;
      check(vc,'X')
      check(vc,'O')
      
      dispatch(changeChar(char))
    }

  }

  return (
    <>
    <Head><title>TicTacToe</title></Head>
      <Menu>
      <div style={{display:"flex",flexDirection:"column"}}>
      <StyledHeader>Tic Tac Toe Game</StyledHeader>
      <h4>{char} Turn</h4>
      <Center>
        {arr.map((val,idx)=>{
          return (<Cell  onClick={()=>clicked(idx)} key={idx}>        
        <Text>{val}</Text>
        </Cell>)
        })}
      </Center>
      </div>
      </Menu>
    </>
  )
}
