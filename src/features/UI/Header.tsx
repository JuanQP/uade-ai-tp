import { Container, Grid, Paper, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconMenu2 } from "@tabler/icons";
import { Link } from "react-router-dom";
import { HeaderAccountButton } from "./HeaderAccountButton";
import { HeaderButton } from "./HeaderButton";
import { HeaderCartButton } from "./HeaderCartButton";
import { SearchInput } from "./SearchInput";

interface Props {
  onMenuClick: () => void
}

export function Header({ onMenuClick }: Props) {

  const isSmallScreen = useMediaQuery('(max-width: 768px)');

  return (
    <Paper shadow="xs" p="sm" sx={{ display: 'flex', justifyContent: 'center' }}>
      <Container size="xl" mx="xs" sx={{ width: '100%' }}>
        <Grid>
          <Grid.Col
            xs={12}
            display="flex"
            sx={{ flex: 1, alignItems: 'center', justifyContent: 'space-between' }}
          >
            <HeaderButton
              Icon={IconMenu2}
              onClick={() => onMenuClick()}
            />
            <Text size="xl" component={Link} to="/">FQ Computer</Text>
            {!isSmallScreen ? <SearchInput size="md" sx={{ flex: 0.75 }} /> : null}
            <HeaderAccountButton />
            <HeaderCartButton />
          </Grid.Col>
          {!isSmallScreen ? null : (
            <Grid.Col xs={12}>
              <SearchInput size="md" sx={{ flex: 1 }} />
            </Grid.Col>
          )}
        </Grid>
      </Container>
    </Paper>
  )
}
