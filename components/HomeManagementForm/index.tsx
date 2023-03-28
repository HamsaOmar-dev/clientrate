import FieldHeaders from "../FieldHeaders";
import NotesAndTotal from "../NotesAndTotal";
import { totalOfAField } from "../NotesAndTotal/totalOfAField";
import ResponsiveFormField from "../ResponsiveFormField";

interface Props {
  form: any;
  readOnly?: boolean;

  isSmallScreen: boolean;
  handleSubmit: Function;
}

const HomeManagementForm = (props: Props) => {
  return (
    <form onSubmit={props.form.onSubmit(props.handleSubmit)}>
      <ResponsiveFormField
        readOnly={props.readOnly}
        form={props.form}
        title={"Homemaking (housekeeping/laundry)"}
        validateName={"homemaking"}
        multiplyingFactor={17.84}
        showTitle={props.isSmallScreen}
      />
      <ResponsiveFormField
        readOnly={props.readOnly}
        form={props.form}
        title={"Shopping"}
        validateName={"shopping"}
        multiplyingFactor={17.84}
        showTitle={props.isSmallScreen}
      />
      <ResponsiveFormField
        readOnly={props.readOnly}
        form={props.form}
        title={"Individual Meal Prep in Own"}
        validateName={"individualmealprepinown"}
        multiplyingFactor={17.84}
        showTitle={props.isSmallScreen}
      />
      <ResponsiveFormField
        readOnly={props.readOnly}
        form={props.form}
        title={"Money Management"}
        validateName={"moneymanagement"}
        multiplyingFactor={17.84}
        showTitle={props.isSmallScreen}
      />
      <ResponsiveFormField
        readOnly={props.readOnly}
        form={props.form}
        title={"Assistance Making Appointments"}
        validateName={"assistancemakingappointments"}
        multiplyingFactor={17.84}
        showTitle={props.isSmallScreen}
      />
      <ResponsiveFormField
        readOnly={props.readOnly}
        form={props.form}
        title={"Arrange Non-medical"}
        validateName={"arrangenonmedical"}
        multiplyingFactor={17.84}
        showTitle={props.isSmallScreen}
      />
      <NotesAndTotal
        form={props.form}
        handleSubmit={() => {}}
        notesFieldName={"home_management_notes"}
        totalHours={
          totalOfAField(props.form, "homemaking") +
          totalOfAField(props.form, "shopping") +
          totalOfAField(props.form, "individualmealprepinown") +
          totalOfAField(props.form, "moneymanagement") +
          totalOfAField(props.form, "assistancemakingappointments") +
          totalOfAField(props.form, "arrangenonmedical")
        }
        totalPrice={
          totalOfAField(props.form, "homemaking", 17.84) +
          totalOfAField(props.form, "shopping", 17.84) +
          totalOfAField(props.form, "individualmealprepinown", 17.84) +
          totalOfAField(props.form, "moneymanagement", 17.84) +
          totalOfAField(props.form, "assistancemakingappointments", 17.84) +
          totalOfAField(props.form, "arrangenonmedical", 17.84)
        }
      />
    </form>
  );
};

export default HomeManagementForm;
