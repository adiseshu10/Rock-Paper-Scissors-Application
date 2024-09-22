import {ListItem, GameButton, Image} from './styledButtons'

const Buttons = props => {
  const {itemDetails, onClickCardItem} = props
  const {id, imageUrl} = itemDetails
  const testID = id.toLowerCase()
  const onClickCard = () => {
    onClickCardItem(id)
  }
  return (
    <ListItem>
      <GameButton
        data-testid={`${testID}Button`}
        type="button"
        onClick={onClickCard}
      >
        <Image src={imageUrl} alt={id} />
      </GameButton>
    </ListItem>
  )
}
export default Buttons
