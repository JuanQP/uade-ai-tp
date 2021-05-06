import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import IconButton from '@material-ui/core/IconButton';

const CartDetailItem = (props) => {
  function handleAddUnit() {
    props.onAddUnit(props.item);
  }

  function handleMinusUnit() {
    props.onMinusUnit(props.item);
  }

  function handleRemoveProduct() {
    props.onRemoveProduct(props.item);
  }

  return (
    <ListItem key={props.item.product.id}>
      <ListItemAvatar>
        <Avatar src={props.item.product.img} />
      </ListItemAvatar>
      <ListItemText
        primary={`${props.item.product.producto} ${props.item.product.marca} ${props.item.product.modelo}`}
        secondary={`${props.item.quantity} ${props.item.quantity === 1 ? "unidad" : "unidades"} ($${props.item.quantity * props.item.product.precio})`}
      />
      <ListItemSecondaryAction>
        <IconButton aria-label="add" onClick={handleAddUnit}>
          <AddIcon />
        </IconButton>
        <IconButton aria-label="minus" onClick={handleMinusUnit}>
          <RemoveIcon />
        </IconButton>
        <IconButton aria-label="delete" onClick={handleRemoveProduct}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default CartDetailItem;
