import { Space, Stack, Title, Center, Group, Paper, ScrollArea, Table, Text, Modal } from "@mantine/core";

import { IconChevronLeft, IconChevronRight, IconPlus, IconTrash } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import PaperWrapper from "./Paperwrapper";
import { Grid } from "@mantine/core";
import axios from "axios";
import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";

interface TableReviewsProps {
  data: {
    id: number;
    name: string;
    total: number;
    action: string;
  }[];
  loading: boolean;
  setData: Function;
}

const TableComponent = ({ data, loading = true, setData }: TableReviewsProps) => {
  const router = useRouter();
  const [opened, { open, close }] = useDisclosure(false);
  const [currentRow, setCurrentRow] = useState<any>(null);
  const handleDelete = (id: number) => {
    axios.delete(`/api/clientrate/delete-client-rate?id=${id}`).catch((err) => {
      console.log("T-DEBUG", err);
      alert("Something went wrong. Please Try Again");
    });
    setData((prev: any) => {
      const filtered = prev.filter((client: any) => client.id !== id);
      return [...filtered];
    });
  };

  const handleConfirmDeleteModal = (row: any) => {
    setCurrentRow(row);
    open();
  };

  const rows = data.map((row, index) => {
    return (
      <tr
        key={index}
        style={{
          width: "100%",
        }}
      >
        {/* <td width={"25"}>{row.no}</td> */}
        <td
          width={"25"}
          align="left"
        >
          {row.name}
        </td>
        <td
          width={"25"}
          align="right"
        >
          <Text
            weight={500}
            color="teal"
          >
            ${row.total.toFixed(2)}
          </Text>
        </td>
        <td
          width={"25"}
          align="right"
        >
          <Grid
            p={0}
            // m={0}
            justify="center"
          >
            <Grid.Col span={10}>
              <Button
                size="sm"
                variant="filled"
                onClick={() => {
                  router.push(`/details?id=${row?.id}`);
                }}
              >
                Details
              </Button>
            </Grid.Col>
            <Grid.Col span={2}>
              <IconTrash
                onClick={() => {
                  handleConfirmDeleteModal(row);
                  // handleDelete(row.id);
                }}
                color="red"
                size={28}
                style={{
                  margin: 4,
                  paddingTop: 0,
                  alignSelf: "center",
                  cursor: "pointer",
                }}
              />
            </Grid.Col>
          </Grid>
        </td>
      </tr>
    );
  });

  return (
    <ScrollArea>
      <Modal
        opened={opened}
        // remove modal background

        transitionProps={{ transition: "fade", duration: 400 }}
        onClose={close}
        // title={<Title order={3}>Confirm Client Deletion</Title>}
        withCloseButton={false}
        styles={{
          content: {
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        }}
      >
        <PaperWrapper
          withBorder
          p="xl"
        >
          <Stack p="xl">
            <Title
              order={3}
              align="center"
            >
              Are You Sure You Want To Delete Your Client: <strong>{currentRow?.name}</strong>?
            </Title>
            <Space h="xl" />
            <Group
              position="apart"
              px="xl"
            >
              <Button
                variant="outline"
                onClick={() => {
                  close();
                  setCurrentRow(null);
                }}
              >
                No
              </Button>
              <Button
                variant="filled"
                disabled={!currentRow}
                onClick={() => {
                  handleDelete(currentRow?.id);
                  close();
                  setCurrentRow(null);
                }}
              >
                Yes
              </Button>
            </Group>
          </Stack>
        </PaperWrapper>
      </Modal>
      {rows.length !== 0 && (
        <Paper
          // p="xl"
          radius="xl"
          style={{
            backgroundColor: "#F8F9FA",
          }}
        >
          <Group
            position="apart"
            noWrap
            my="xl"
          >
            <Text
              weight="bold"
              size="xl"
            >
              Rates
            </Text>
          </Group>
          <Paper py="xl" px={0.4} bg="transparent">
            <Table
              horizontalSpacing="xl"
              width={"100%"}
              style={{
                overflow: "hidden",
                backgroundColor: "white",
                borderRadius: "10px",
                boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.1)",
              }}
              pb="xl"
              // withBorder

              verticalSpacing="lg"
              fontSize="lg"
              striped
              // border={1}
            >
              <thead>
                <tr>
                  {/* <th>No</th> */}
                  <th
                    style={{
                      textAlign: "left",
                    }}
                  >
                    Name
                  </th>
                  <th
                    style={{
                      textAlign: "right",
                    }}
                  >
                    Total
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>{rows}</tbody>
            </Table>  
          </Paper>
        </Paper>
      )}
      {/* IF EMPTY ARRAY FROM BACKEND.. SHOW INITIAL SCREEN */}
      {!loading && rows.length === 0 && (
        <div
          style={{
            height: "60vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack align="center">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "60%",
                backgroundColor: "rgb(248, 193, 0, 0.4)",
                position: "relative",
                height: "50px",
                width: "50px",
              }}
            >
              <IconPlus
                color="rgb(248, 193, 0)"
                size={40}
              />
            </div>
            <Space h="xl" />
            <Title
              order={1}
              align="center"
            >
              {`Calculate Your First Rate Now`}
            </Title>
            <Space h="xl" />
            <Button
              variant={"filled"}
              onClick={() => {
                router.push("/add-client");
              }}
            >
              Add
            </Button>
          </Stack>
        </div>
      )}
    </ScrollArea>
  );
};
export default TableComponent;
