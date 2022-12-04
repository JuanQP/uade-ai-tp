import { Box, Group, Text } from "@mantine/core";
import { TablerIcon } from "@tabler/icons";

interface Props {
  Icon: TablerIcon
  hasStock: boolean
  message: string
  hasStockMessage: string
}

export function StockStatus({ Icon, hasStock, message, hasStockMessage } : Props) {

  if(!hasStock) {
    return (
      <Group mb="md">
        <Icon />
        <Text span color="red.8" fw="bold">Sin stock</Text>
      </Group>
    )
  }

  return (
    <Group mb="md">
      <Icon />
      <Box>
        <Text span>
          <Text span color="green.8" fw="bold">Con stock </Text>
          {message}
        </Text>
        <Text color="dimmed">
          {hasStockMessage}
        </Text>
      </Box>
    </Group>
  )
}
