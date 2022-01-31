import styled from 'styled-components';
import Popup from 'reactjs-popup';

export const Hud = styled.div`
  width: 100%;
  height: 13vh;

  padding-top: 3vh;
  padding-left: 1.5vw;

  background-color: #27465C;
  color: #ffffff;
  text-align: start;
`;

export const Container = styled.div`
  width: 100%;
  height: 87vh;

  display: flex;

  flex-direction: row;

  background-color: #fafafa;
`;

export const SideCadastro = styled.div`
  width: 16%;
  height: 87vh;

  display: flex;
  color: #ffffff;
  background-color: #41769C;

  padding: 3vh 0  0 1.5vw;
  
  border-right: 2px solid black;

  h1 {
    margin: 0 0 2vh 0;
  }

  input {
    margin: 0 0 2vh 0;
  }

  button {
    backgorund-color: white;
  }
`;


export const Lista = styled.div`
  width: 84%;
  height: 87vh;

  padding: 4vh 2.5vw 5vh 2.5vw;
  background-color: #dbdbdb;

  div {
    width: 100%;
    height: 100%;

    .hud {
      height: 7vh;

      padding: 0 1vw 0 1vw;
      display: flex;

      align-items: center;
      background-color: #5193C2;
      color: white;
        
        p {
          &:nth-child(1){
            color:white;
            width: 6vw;
            border-right: 2px solid black;
            margin-right: 1vw;
          }

          &:nth-child(2){     
            width: 8vw;

            margin-right: 1vw;

            border-right: 2px solid black;
          }

          &:nth-child(3){     
            width: 8vw;

            margin-right: 39vw;
            border-right: 2px solid black;
          }

          &:nth-child(4){     
            width: 6vw;

            margin-right: 1vw;

            border-right: 2px solid black;
          }

          &:nth-child(5){     
            width: 6vw;

            margin-right: 1vw;
          }
        }
      }
    }

    .elements {
      height: 7vh;

      padding: 0 1vw 0 1vw;
      display: flex;

      background-color: #5CA6DB;
      color: white;

      align-items: center;
  
      &:nth-child(2n+1) {
        background-color: #61B0E8;
      }

      p {
          &:nth-child(1){
            width: 6vw;
            border-right: 2px solid black;
            margin-right: 1vw;
          }

          &:nth-child(2){     
            width: 8vw;
            padding-left: 2vw;
            border-right: 2px solid black;
            margin-right: 1vw;
          }

          &:nth-child(3){  
            width: 8vw;
            height: 18px; 

            padding-left: 2vw;
            margin-right: 40.5vw;

            display: flex;  
            align-items: center;

            border-right: 2px solid black;
          }

          &:nth-child(4){
            color: black;
            width: 4.5vw;

            margin-right: 3vw;

            cursor: pointer;


            border-right: 2px solid black;
          }

          &:nth-child(5){
            color: black;
            width: 4.5vw;

            cursor: pointer;
          }
      }
    }
  }

  .botao{
   width: 3vw;
   height: 5vh; 
  }
`;

export const PopupModal = styled(Popup)`
	&-content {
		background: transparent;
		animation: anvil 0.25s;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export const CntP = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0vw 0vw 10vw 100vw rgba(0, 0, 0, 0.5);
    border-radius: 0.8vh;
    overflow: hidden;
    overflow-x: hidden;
`;

export const PopUp = styled.div`
    width: 40vw;
    height: 20vh;

    background: #61B0E8;
    color: white;

    border-radius: 0.8vh;

    display: flex;
    flex-direction: row;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px; 

    align-items: center;
    padding-left: 3vw;

    input {
      margin-right: 8vw;

    }

    button {
      width: 5vw;
      height: 3vh;
      background-color: white;

      border: none;

      cursor: pointer;

      &:hover {
        background-color: lightgrey;
      }
    }
`;
