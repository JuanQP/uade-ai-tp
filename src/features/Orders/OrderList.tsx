import { ActionIcon, ScrollArea, Table } from "@mantine/core";
import { IconEye } from "@tabler/icons";
import { Link } from "react-router-dom";

interface Props {
  orders: Order[];
}

export function OrderList({ orders }: Props) {
  return (
    <ScrollArea style={{ width: '100%', height: '100%' }}>
      <Table striped highlightOnHover>
        <thead>
          <tr>
            <th>Fecha de Compra</th>
            <th>Fecha de Entrega</th>
            <th>Monto</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order._id}>
              <td>{order.orderDate}</td>
              <td>{order.deliveryDate}</td>
              <td>{order.total}</td>
              <td>{order.status}</td>
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
