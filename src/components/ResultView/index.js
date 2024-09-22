import {
  ResultContainer,
  ResultStatus,
  CardsContainer,
  StatusContainer,
  PlayButton,
  CardItemContainer,
  ItemText,
  CardImage,
} from './styleResult'

const ResultView = props => {
  const {opponentCard, yourCard, resultStatus, onClickPlayAgain} = props

  const renderCardItem = (card, text, altText) => {
    const {id, imageUrl} = card
    return (
      <CardItemContainer>
        <ItemText>{text}</ItemText>
        <CardImage src={imageUrl} alt={altText} />
      </CardItemContainer>
    )
  }

  const onClickPlay = () => {
    onClickPlayAgain()
  }

  return (
    <ResultContainer>
      <CardsContainer>
        {renderCardItem(yourCard, 'YOU', 'your choice')}
        {renderCardItem(opponentCard, 'OPPONENT', 'opponent choice')}
      </CardsContainer>
      <StatusContainer>
        <ResultStatus>{resultStatus}</ResultStatus>
        <PlayButton type="button" onClick={onClickPlay}>
          Play Again
        </PlayButton>
      </StatusContainer>
    </ResultContainer>
  )
}
export default ResultView
