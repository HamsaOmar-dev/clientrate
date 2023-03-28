import NotesAndTotal from "../NotesAndTotal";
import { totalOfAField } from "../NotesAndTotal/totalOfAField";
import ResponsiveFormField from "../ResponsiveFormField";

interface Props {
  form: any;

  readOnly?: boolean;
  isSmallScreen: boolean;
  handleSubmit: Function;
}

const SocializationForm = (props: Props) => {
  return (
    <form onSubmit={props.form.onSubmit(props.handleSubmit)}>
      <ResponsiveFormField
        readOnly={props.readOnly}
        form={props.form}
        title={"Individual Staff Ratio 1:1"}
        validateName={"individualstaffratio1"}
        multiplyingFactor={17.84}
        showTitle={props.isSmallScreen}
      />
      <ResponsiveFormField
        readOnly={props.readOnly}
        form={props.form}
        title={"Individual Staff Ratio 1:2-5"}
        validateName={"individualstaffratio2"}
        multiplyingFactor={5.1}
        showTitle={props.isSmallScreen}
      />
      <ResponsiveFormField
        readOnly={props.readOnly}
        form={props.form}
        title={"Individual Staff Ratio 1:6-12"}
        validateName={"individualstaffratio3"}
        multiplyingFactor={1.99}
        showTitle={props.isSmallScreen}
      />
      <ResponsiveFormField
        readOnly={props.readOnly}
        form={props.form}
        title={"Individual Staff Ratio 1:13-20"}
        validateName={"individualstaffratio4"}
        multiplyingFactor={1.09}
        showTitle={props.isSmallScreen}
      />
      <ResponsiveFormField
        readOnly={props.readOnly}
        form={props.form}
        title={"Individual Staff Ratio 1:Over 20"}
        validateName={"individualstaffratio5"}
        multiplyingFactor={0.59}
        showTitle={props.isSmallScreen}
      />
      <NotesAndTotal
        form={props.form}
        handleSubmit={() => {}}
        notesFieldName={"socialization_notes"}
        totalHours={
          totalOfAField(props.form, "individualstaffratio1") +
          totalOfAField(props.form, "individualstaffratio2") +
          totalOfAField(props.form, "individualstaffratio3") +
          totalOfAField(props.form, "individualstaffratio4") +
          totalOfAField(props.form, "individualstaffratio5")
        }
        totalPrice={
          totalOfAField(props.form, "individualstaffratio1", 17.84) +
          totalOfAField(props.form, "individualstaffratio2", 5.1) +
          totalOfAField(props.form, "individualstaffratio3", 1.99) +
          totalOfAField(props.form, "individualstaffratio4", 1.09) +
          totalOfAField(props.form, "individualstaffratio5", 0.59)
        }
      />
    </form>
  );
};

export default SocializationForm;
