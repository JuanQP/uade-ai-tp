import { ActionIcon, Badge } from "@mantine/core";
import { IconSquare, IconSquareCheck } from "@tabler/icons";

interface Props {
  order: Order;
  onClick?: (order: Order) => void;
}

const STYLES = {
  Finalizado: {
    color: "green",
    Icon: IconSquareCheck,
  },
  Pendiente: {
    color: "blue",
    Icon: IconSquare,
  }
}

export function OrderStatusBadge({ order, onClick }: Props) {

  const style = STYLES[order.status]
  const hasClickAction = !!onClick

  const squareButton = !hasClickAction ? undefined : (
    <ActionIcon color={style.color} variant="transparent" onClick={() => onClick(order)}>
      <style.Icon />
    </ActionIcon>
  )

  return (
    <Badge
      p="sm"
      variant={hasClickAction ? "outline" : "filled"}
      color={style.color}
      leftSection={squareButton}
    >
      {order.status}
    </Badge>
  )
}
