import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {Component} from 'react'
import ResultView from '../ResultView'
import Buttons from '../Buttons'
import {
  MainContainer,
  GameContainer,
  ScoreBoardContainer,
  Text,
  GameSection,
  GameItemsContainer,
  PopupButton,
  PopupContainer,
  ScoreContainer,
  ScoreCount,
  ScoreText,
  RulesImg,
  CloseButton,
  PopupMessageContainer,
} from './styledComponents'

class GameView extends Component {
  state = {
    yourCard: {},
    opponentCard: {},
    showResult: false,
    score: 0,
    resultStatus: '',
  }

  componentDidMount() {
    this.getOpponentCard()
  }

  getOpponentCard = () => {
    const {choicesList} = this.props
    const randomIndex = Math.floor(Math.random() * 3)
    const opponentItem = choicesList[randomIndex]
    this.setState({opponentCard: opponentItem})
  }

  onClickCardItem = yourId => {
    const {opponentCard} = this.state
    const {choicesList} = this.props
    const yourCardItem = choicesList.find(each => each.id === yourId)
    if (opponentCard.id === 'PAPER' && yourId === 'SCISSORS') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        yourCard: yourCardItem,
        showResult: true,
        resultStatus: 'YOU WON',
      }))
    } else if (opponentCard.id === 'SCISSORS' && yourId === 'PAPER') {
      this.setState(prevState => ({
        score: prevState.score - 1,
        yourCard: yourCardItem,
        showResult: true,
        resultStatus: 'YOU LOSE',
      }))
    } else if (opponentCard.id === 'ROCK' && yourId === 'PAPER') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        yourCard: yourCardItem,
        showResult: true,
        resultStatus: 'YOU WON',
      }))
    } else if (opponentCard.id === 'PAPER' && yourId === 'ROCK') {
      this.setState(prevState => ({
        score: prevState.score - 1,
        yourCard: yourCardItem,
        showResult: true,
        resultStatus: 'YOU LOSE',
      }))
    } else if (opponentCard.id === 'ROCK' && yourId === 'SCISSORS') {
      this.setState(prevState => ({
        score: prevState.score - 1,
        yourCard: yourCardItem,
        showResult: true,
        resultStatus: 'YOU LOSE',
      }))
    } else if (opponentCard.id === 'SCISSORS' && yourId === 'ROCK') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        yourCard: yourCardItem,
        showResult: true,
        resultStatus: 'YOU WON',
      }))
    } else {
      this.setState({
        showResult: true,
        yourCard: yourCardItem,
        resultStatus: 'IT IS DRAW',
      })
    }
  }

  onClickPlayAgain = () => {
    this.setState({showResult: false}, this.getOpponentCard)
  }

  renderGameSectionView = () => {
    const {choicesList} = this.props

    return (
      <GameSection>
        <GameItemsContainer>
          {choicesList.map(each => (
            <Buttons
              key={each.id}
              itemDetails={each}
              onClickCardItem={this.onClickCardItem}
            />
          ))}
        </GameItemsContainer>
      </GameSection>
    )
  }

  renderPopupRules = () => (
    <PopupContainer>
      <Popup modal trigger={<PopupButton type="button">RULES</PopupButton>}>
        {close => (
          <PopupMessageContainer>
            <CloseButton
              type="button"
              className="trigger-button"
              onClick={() => close()}
            >
              <RiCloseLine />
            </CloseButton>
            <div>
              <RulesImg
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </div>
          </PopupMessageContainer>
        )}
      </Popup>
    </PopupContainer>
  )

  render() {
    const {showResult, opponentCard, yourCard, resultStatus, score} = this.state
    return (
      <MainContainer>
        <GameContainer>
          <ScoreBoardContainer>
            <div>
              <Text>
                ROCK
                <br />
                PAPER
                <br />
                SCISSORS
              </Text>
            </div>
            <ScoreContainer>
              <ScoreText>Score</ScoreText>
              <ScoreCount>{score}</ScoreCount>
            </ScoreContainer>
          </ScoreBoardContainer>
          {showResult ? (
            <ResultView
              opponentCard={opponentCard}
              yourCard={yourCard}
              resultStatus={resultStatus}
              onClickPlayAgain={this.onClickPlayAgain}
            />
          ) : (
            this.renderGameSectionView()
          )}
        </GameContainer>
        {this.renderPopupRules()}
      </MainContainer>
    )
  }
}

export default GameView
