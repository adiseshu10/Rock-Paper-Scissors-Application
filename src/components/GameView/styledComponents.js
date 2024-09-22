import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const GameContainer = styled.div`
  width: 95%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    width: 75%;
    margin-top: 35px;
  }
`

export const ScoreBoardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid white;
  border-radius: 5px;
  padding: 15px;
`

export const TextContainer = styled.div`
  display: flex;
`

export const Text = styled.h1`
  color: white;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.4;
  margin: 0px;
`

export const GameSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
`

export const GameItemsContainer = styled.ul`
  padding: 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`
export const PopupContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
`
export const PopupButton = styled.button`
  outline: none;
  background: none;
  border: none;
  cursor: pointer;
  background-color: white;
  font-size: 16px;
  font-weight: 600;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 8px;
  align-self: flex-end;
`
export const ScoreContainer = styled.div`
  width: 90px;
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ScoreCount = styled.p`
font-size:26px;
 font-family:"Roboto"
margin-top:0px;
margin-bottom:5px;
`
export const ScoreText = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-top: 5px;
  margin-bottom: 0px;
`
export const RulesImg = styled.img`
  width: 300px;
  height: 230px;

  margin-top: 20px;
  @media screen and (min-width: 768px) {
    width: 550px;
    height: 470px;
  }
`

export const CloseButton = styled.button`
  outline: none;
  background-color: light-gray;
  font-size: 20px;
  border: none;
  cursor: pointer;
  align-self: flex-end;
  margin: 6px;
`
export const PopupMessageContainer = styled.div`
  width: 400px;
  height: 330px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  @media screen and (min-width: 768px) {
    width: 700px;
    height: 580px;
  }
`
