import { Paper, Group, Title } from "@mantine/core";

import { IconChevronLeft } from "@tabler/icons-react";
import { useRouter } from "next/router";
import ContainerWrapper from "../ContainerWrapper";

interface BackToDashboardProps {
  open: Function;
}

const BackToDashboard = ({ open }: BackToDashboardProps) => {
  const router = useRouter();
  return (
    <Paper>
      <ContainerWrapper>
        <Group
          py="xl"
          style={{
            cursor: "pointer",
            backgroundColor: "white",
          }}
          onClick={() => {
            open();
          }}
          mb="xl"
        >
          <IconChevronLeft />
          <Title
            order={2}
            weight="bold"
          >
            Dashboard
          </Title>
        </Group>
      </ContainerWrapper>
    </Paper>
  );
};

export default BackToDashboard;
