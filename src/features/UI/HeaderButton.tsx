import { ActionIcon, Stack, StackProps } from "@mantine/core";
import { TablerIcon } from "@tabler/icons";

interface Props extends StackProps {
  Icon: TablerIcon
  label: string
  onClick?: () => void
}

export function HeaderButton({ Icon, label, onClick, ...props }: Props) {

  function handleActionIconClick() {
    onClick?.()
  }

  return (
    <Stack spacing={0} align="center" {...props}>
      <ActionIcon variant="transparent" color="dark" onClick={handleActionIconClick}>
        <Icon size={32} />
      </ActionIcon>
    </Stack>
  )
}
