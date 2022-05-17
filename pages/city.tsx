import styled, {keyframes} from "styled-components";
import React, { useEffect, useState } from "react";
import { cityAtom, city1Atom, city2Atom, dataAtom } from "../atoms";
import { useRecoilState } from "recoil";
import Link from "next/link";


export default function City(){

    const [data, setData] = useRecoilState(dataAtom);

    const getData = async() => {
        // const jsonData= require('./students.json'); 
        // const json = await(await fetch('https://cors-anywhere.herokuapp.com/https://addr-info.s3.ap-northeast-2.amazonaws.com/address.json')).json();
        const json = await(await fetch('https://cors-anywhere.herokuapp.com/https://addr-info.s3.ap-northeast-2.amazonaws.com/address.json')).json();
        
        setData(json);
      };
    

    useEffect(()=>{getData()},[]);
    const [tmp, setTmp] = useState();

    useEffect(() => {
        // componentDidMount
        setTmp(data[`${city}`]);
    
        if(tmp) {
            console.log(tmp[`${city1}`]);
        }
    })

    const [city, setCity] = useRecoilState(cityAtom);
    const [city1, setCity1] = useRecoilState(city1Atom);
    const [city2, setCity2] = useRecoilState(city2Atom);

    
    const [disable, setDisable] =  useState(false);
    const [isClick, setIsClick] =  useState(false);
    const [isClick1, setIsClick1] =  useState(false);
    const [question, setQuestion] =  useState(true);



    const onClickBox = (e : React.MouseEvent<HTMLButtonElement>) => {
        setCity(e.target.name);
        setIsClick(true);
        setQuestion(false);
    }
    const onClickBox1 = (e : React.MouseEvent<HTMLButtonElement>) => {
        setCity1(e.target.name);
        setIsClick1(true);
    }
    const onClickBox2 = (e : React.MouseEvent<HTMLButtonElement>) => {
        setCity2(e.target.name);
        setDisable(true)
    }

    return( 
        <Container>
            <Contents>
            <Block1>
                <Question disable={question}>어느 지역에 거주 중이세요?</Question>
                <Choice>{city} {city1} {city2}</Choice>
                {/* <Answer disable={disable}>에서 거주 중이에요.</Answer> */}
                <Link href={"/job"}>확인</Link>
            </Block1>
            <Block2>
                <BoxContainer>{Object.keys(data).map((state, index) =><Box onClick={onClickBox} name={state}>{state}</Box>)}</BoxContainer> 
                <BoxContainer1>{isClick ? <div>{Object.keys(data[`${city}`]).map((state, index) => <Box onClick={onClickBox1} name={state}>{state}</Box>)}</div> : <span></span>}</BoxContainer1>
                {tmp && isClick1 ? <BoxContainer2>{tmp[`${city1}`].map((state, index) => <Box onClick={onClickBox2} name={state}>{state}</Box>)}</BoxContainer2>: <span></span>}
            </Block2>
           </Contents>
        </Container>
    ) 
}

const Container = styled.div`
    text-align: center;
    display: grid;
    place-items: center;
`;

const Contents = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    min-height: 100vh; 
    flex-direction: column;
`;
const Block1 = styled.div`
    height: 100px;
`;


const Block2 = styled.div`
     /* justify-content: center; */
    padding: 5vh;
    align-items:center;
    display: flex;   
`;

const Animation = keyframes`
    from { transform: translateY(10px); opacity: 0.5;}
    to { transform: translateY(0); opacity: 1;}
 `;

const Question = styled.div`
    letter-spacing: -3px;
    font-size: 40px;
    font-weight: bold;
    animation-name: ${Animation};
    animation-duration: 1s;
`;

/* const Question = styled.span<{disable: boolean}>`
    font-size: 50px;
    font-weight: bold;
    display: ${p => p.disable ? 'initial' : 'none'};
    animation-name: ${breatheAnimation};
    animation-duration: 8s;
    animation-iteration-count: infinite;
`; */

const Choice = styled.span`
    font-size: 50px;
    font-weight: bold;
    color: #1070FF;
`;

const Answer = styled.span<{disable: boolean}>`
    font-size: 50px;
    font-weight: bold;
    display: ${p => p.disable ? 'initial' : 'none'};
    }
`;

const BoxContainer = styled.div`
    width: 230px;
    height: 60vh;
    text-align: center;
    overFlow : scroll;
    &::-webkit-scrollbar {
        width: 9px;
        height: 1px;
        border-radius: 6px;
        background: rgba(255, 255, 255, 0.4);
    }
    &::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 6px;
    }
`;

const BoxContainer1 = styled.div`
    width: 230px;
    height: 60vh;
    overFlow : scroll;
    &::-webkit-scrollbar {
        width: 8px;
        height: 8px;
        border-radius: 6px;
        background: rgba(255, 255, 255, 0.4);
    }
    &::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 6px;
    }
`;

const BoxContainer2 = styled.div`
    width: 230px;
    height: 60vh;
    overFlow : scroll;
    &::-webkit-scrollbar {
        width: 8px;
        height: 8px;
        border-radius: 6px;
        background: rgba(255, 255, 255, 0.4);
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 6px;
    }
`;

const Box = styled.button`
    width: 100%;
    display: block;
    border-radius: 4px;
    background-color: white;
    border: none;
    color: ${(props)=> props.theme.colors.BLACK};
    text-align: center;
    font-size: 28px;
    padding: 20px;
    transition: all 0.5s;
    font-weight: bold;
    list-style: none;
    cursor: pointer;

    &:hover{
        background-color: ${(props)=> props.theme.colors.BLUE};
        color: ${(props)=> props.theme.colors.GRAY};
    }
    &:focus {
        background-color: ${(props)=> props.theme.colors.BLUE};
        color: ${(props)=> props.theme.colors.GRAY};
    }
`;

const Btn = styled.button`
    font-size: 32px;
    position: relative;
    background-color: #1070FF;
    border: none;
    letter-spacing: 1px;
    font-weight: 800px;
    color: #FFFFFF;
    padding: 25px;
    width: 200px;
    text-align: center;
    border-radius: 10px;
    text-decoration: none;
    cursor: pointer;
    margin-top: 30px;

    &:hover{
        background-color: ${(props)=> props.theme.colors.POINT_BLUE};
    }
`