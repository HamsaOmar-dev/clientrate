import { Flex, Grid, Group, Text, Textarea, TextInput } from "@mantine/core";
import ResponsiveFormField from "../ResponsiveFormField";

interface Props {
  totalPrice: number;
  notesFieldName: string;
  totalHours: number;
  placeholder?: string;
  form: any;
  handleSubmit: Function;
}

const NotesAndTotal = (props: Props) => {
  return (
    <Grid
      my="xs"
      grow
      justify="flex-end"
    >
      <Grid.Col
        md={9}
        xs={6}
      >
        <Group
          noWrap
          mt="xs"
          position="right"
        >
          <Text weight="bold">Units: </Text>
          <TextInput
            readOnly
            styles={{
              //change text color
              input: {
                color: "#00AC6E",

                border: "none",
                fontWeight: "bold",

                // fontSize: "1.2rem",
              },
            }}
            radius="md"
            style={{
              border: "2px solid #000",
              borderRadius: "9px",
              // padding: "0.2rem",
            }}
            value={`${props.totalHours ? props.totalHours.toFixed(2) : "0.00"}`}
          />
        </Group>
      </Grid.Col>
      <Grid.Col
        md={3}
        xs={6}
      >
        <Group
          noWrap
          mt="xs"
          position="right"
        >
          <Text weight="bold">Total: </Text>
          <TextInput
            readOnly
            styles={{
              //change text color
              input: {
                color: "#00AC6E",

                border: "none",
                fontWeight: "bold",

                // fontSize: "1.2rem",
              },
            }}
            radius="md"
            style={{
              border: "2px solid #000",
              borderRadius: "9px",
              // padding: "0.2rem",
            }}
            value={`$ ${props.totalPrice ? props.totalPrice.toFixed(2) : "0.00"}`}
          />
        </Group>
      </Grid.Col>
    </Grid>
  );
};

export default NotesAndTotal;
