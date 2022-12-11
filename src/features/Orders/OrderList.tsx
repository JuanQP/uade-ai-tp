import { ActionIcon, ScrollArea, Table } from "@mantine/core";
import { IconEye } from "@tabler/icons";
import { Link } from "react-router-dom";
import { OrderStatusBadge } from "./OrderStatusBadge";

interface Props {
  orders: Order[];
  showUpdate?: boolean;
  onUpdateOrder?: (order: Order, newStatus: Order["status"]) => void;
}

export function OrderList({ orders, showUpdate = false, onUpdateOrder }: Props) {

  function handleOrderStatusClick(order: Order) {
    onUpdateOrder?.(order, order.status === "Pendiente" ? "Finalizado" : "Pendiente")
  }

  return (
    <ScrollArea style={{ width: '100%', height: '100%' }}>
      <Table striped highlightOnHover>
        <thead>
          <tr>
            <th>Fecha de Compra</th>
            <th>Fecha de Entrega</th>
            <th>Monto</th>
            <th>Estado</th>
            <th>Detalles</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order._id}>
              <td>{order.orderDate}</td>
              <td>{order.deliveryDate}</td>
              <td>{order.total}</td>
              <td>
                <OrderStatusBadge order={order} onClick={showUpdate ? handleOrderStatusClick : undefined} />
              </td>
              <td>
                <ActionIcon color="blue" component={Link} to={`/order/${order._id}`}>
                  <IconEye />
                </ActionIcon>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </ScrollArea>
  )
}
