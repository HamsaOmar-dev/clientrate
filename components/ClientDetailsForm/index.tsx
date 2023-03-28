import { TextInput } from "@mantine/core";
interface Props {
  form: any;
  readOnly?: boolean;

  isSmallScreen: boolean;
  handleSubmit: Function;
}

const ClientDetailsForm = (props: Props) => {
  return (
    <form onSubmit={props.form.onSubmit(props.handleSubmit)}>
      <TextInput
        label="Client Name"
        size="md"
        radius="md"
        placeholder="Enter Client Name"
        required
        {...props.form.getInputProps("client_name")}
      />

      {/* <TextInput
        label="Client Email"
        size="xs"
        radius="md"
        placeholder="Enter Client Email"
        {...props.form.getInputProps("client_email")}
      />

      <TextInput
        label="Client Cell Phone"
        size="xs"
        radius="md"
        placeholder="Enter Client Cell Phone"
        {...props.form.getInputProps("client_phone")}
      /> */}
    </form>
  );
};

export default ClientDetailsForm;
