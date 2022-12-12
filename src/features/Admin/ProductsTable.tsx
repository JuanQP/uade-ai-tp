import { ActionIcon, Group, ScrollArea, Table } from "@mantine/core";
import { IconEdit, IconTrash } from "@tabler/icons";
import { Link } from "react-router-dom";

interface Props {
  products: Product[];
  onDelete: (product: Product) => void;
}

export function ProductsTable({ products, onDelete }: Props) {

  return (
    <ScrollArea style={{ width: '100%', height: '100%' }}>
      <Table striped highlightOnHover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td>
                <Group>
                  <ActionIcon color="blue" component={Link} to={`/admin/product/${product._id}`}>
                    <IconEdit />
                  </ActionIcon>
                  <ActionIcon color="red" onClick={() => onDelete(product)}>
                    <IconTrash />
                  </ActionIcon>
                </Group>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </ScrollArea>
  )
}
