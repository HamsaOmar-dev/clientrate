import NotesAndTotal from "../NotesAndTotal";
import { totalOfAField } from "../NotesAndTotal/totalOfAField";
import ResponsiveFormField from "../ResponsiveFormField";

interface Props {
  form: any;
  readOnly?: boolean;
  isSmallScreen: boolean;
  handleSubmit: Function;
}

const ADLAssistanceForm = (props: Props) => {
  return (
    <form onSubmit={props.form.onSubmit(props.handleSubmit)}>
      <ResponsiveFormField
        readOnly={props.readOnly}
        form={props.form}
        title={"Assistance with Dressing"}
        validateName={"assistancewithdressing"}
        multiplyingFactor={23.72}
        showTitle={props.isSmallScreen}
      />
      <ResponsiveFormField
        readOnly={props.readOnly}
        form={props.form}
        title={"Assistance with Grooming"}
        validateName={"assistancewithgrooming"}
        multiplyingFactor={23.72}
        showTitle={props.isSmallScreen}
      />
      <ResponsiveFormField
        readOnly={props.readOnly}
        form={props.form}
        title={"Assistance with Bathing"}
        validateName={"assistancewithbathing"}
        multiplyingFactor={23.72}
        showTitle={props.isSmallScreen}
      />
      <ResponsiveFormField
        readOnly={props.readOnly}
        form={props.form}
        title={"Continence Care"}
        validateName={"continencecare"}
        multiplyingFactor={27.04}
        showTitle={props.isSmallScreen}
      />
      <ResponsiveFormField
        readOnly={props.readOnly}
        form={props.form}
        title={"Assistance Positioning"}
        validateName={"assistancepositioning"}
        multiplyingFactor={27.04}
        showTitle={props.isSmallScreen}
      />
      <ResponsiveFormField
        readOnly={props.readOnly}
        form={props.form}
        title={"Assistance Eating"}
        validateName={"assistanceeating"}
        multiplyingFactor={27.04}
        showTitle={props.isSmallScreen}
      />
      <ResponsiveFormField
        readOnly={props.readOnly}
        form={props.form}
        title={"Assistance Walking"}
        validateName={"assistancewalking"}
        multiplyingFactor={23.72}
        showTitle={props.isSmallScreen}
      />
      <ResponsiveFormField
        readOnly={props.readOnly}
        form={props.form}
        title={"Assistance Wheeling"}
        validateName={"assistancewheeling"}
        multiplyingFactor={23.72}
        showTitle={props.isSmallScreen}
      />
      <ResponsiveFormField
        readOnly={props.readOnly}
        form={props.form}
        title={"Assistance Transferring"}
        validateName={"assistancetransferring"}
        multiplyingFactor={27.04}
        showTitle={props.isSmallScreen}
      />
      <NotesAndTotal
        form={props.form}
        handleSubmit={() => {}}
        notesFieldName={"home_management_notes"}
        totalHours={
          totalOfAField(props.form, "assistancewithdressing") +
          totalOfAField(props.form, "assistancewithgrooming") +
          totalOfAField(props.form, "assistancewithbathing") +
          totalOfAField(props.form, "continencecare") +
          totalOfAField(props.form, "assistancepositioning") +
          totalOfAField(props.form, "assistanceeating") +
          totalOfAField(props.form, "assistancewalking") +
          totalOfAField(props.form, "assistancewheeling") +
          totalOfAField(props.form, "assistancetransferring")
        }
        totalPrice={
          totalOfAField(props.form, "assistancewithdressing", 23.72) +
          totalOfAField(props.form, "assistancewithgrooming", 23.72) +
          totalOfAField(props.form, "assistancewithbathing", 23.72) +
          totalOfAField(props.form, "continencecare", 27.04) +
          totalOfAField(props.form, "assistancepositioning", 27.04) +
          totalOfAField(props.form, "assistanceeating", 27.04) +
          totalOfAField(props.form, "assistancewalking", 23.72) +
          totalOfAField(props.form, "assistancewheeling", 23.72) +
          totalOfAField(props.form, "assistancetransferring", 27.04)
        }
      />
    </form>
  );
};

export default ADLAssistanceForm;
