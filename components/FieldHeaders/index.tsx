import { Grid, Text } from "@mantine/core";
interface FieldHeadersProps {
  title?: string;
}
const FieldHeaders = ({ title = "Hours/" }: FieldHeadersProps) => {
  return (
    <Grid pt="lg">
      <Grid.Col span={3}>
        <Text>Service</Text>
      </Grid.Col>
      <Grid.Col span={3}>
        <Text color="dimmed">{`${title}Day`}</Text>
      </Grid.Col>
      <Grid.Col span={3}>{title !== "Meals/" && <Text color="dimmed">{`${title}Week`}</Text>}</Grid.Col>
      <Grid.Col span={3}>{title !== "Meals/" && <Text color="dimmed">{`${title}Month`}</Text>}</Grid.Col>
    </Grid>
  );
};

export default FieldHeaders;
