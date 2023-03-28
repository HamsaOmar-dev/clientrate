import NotesAndTotal from "../NotesAndTotal";
import { totalOfAField } from "../NotesAndTotal/totalOfAField";
import ResponsiveFormField from "../ResponsiveFormField";

interface Props {
  form: any;
  readOnly?: boolean;
  isSmallScreen: boolean;
  handleSubmit: Function;
}

const MentalHealthManagementForm = (props: Props) => {
  return (
    <form onSubmit={props.form.onSubmit(props.handleSubmit)}>
      <ResponsiveFormField
        readOnly={props.readOnly}
        form={props.form}
        title={"Manage Wandering"}
        validateName={"managewandering"}
        multiplyingFactor={23.72}
        showTitle={props.isSmallScreen}
      />
      <ResponsiveFormField
        readOnly={props.readOnly}
        form={props.form}
        title={"Manage Orientation Issues"}
        validateName={"manageorientationissues"}
        multiplyingFactor={23.72}
        showTitle={props.isSmallScreen}
      />
      <ResponsiveFormField
        readOnly={props.readOnly}
        form={props.form}
        title={"Manage Anxiety"}
        validateName={"manageanxiety"}
        multiplyingFactor={23.72}
        showTitle={props.isSmallScreen}
      />
      <ResponsiveFormField
        readOnly={props.readOnly}
        form={props.form}
        title={"Manage Repetitive Behavior"}
        validateName={"managerepetitivebehavior"}
        multiplyingFactor={23.72}
        showTitle={props.isSmallScreen}
      />
      <ResponsiveFormField
        readOnly={props.readOnly}
        form={props.form}
        title={"Manage Agitation"}
        validateName={"manageagitation"}
        multiplyingFactor={23.72}
        showTitle={props.isSmallScreen}
      />
      <ResponsiveFormField
        readOnly={props.readOnly}
        form={props.form}
        title={"Manage Self-Injurious Behavior"}
        validateName={"manageselfinjuriousbehavior"}
        multiplyingFactor={23.72}
        showTitle={props.isSmallScreen}
      />
      <ResponsiveFormField
        readOnly={props.readOnly}
        form={props.form}
        title={"Manage Verbal Aggression"}
        validateName={"manageverbalaggression"}
        multiplyingFactor={23.72}
        showTitle={props.isSmallScreen}
      />
      <ResponsiveFormField
        readOnly={props.readOnly}
        form={props.form}
        title={"Manage Physical Aggression"}
        validateName={"managephysicalaggression"}
        multiplyingFactor={23.72}
        showTitle={props.isSmallScreen}
      />
      <ResponsiveFormField
        readOnly={props.readOnly}
        form={props.form}
        title={"Manage Property Destruction"}
        validateName={"managepropertydestruction"}
        multiplyingFactor={23.72}
        showTitle={props.isSmallScreen}
      />
      <ResponsiveFormField
        readOnly={props.readOnly}
        form={props.form}
        title={"Meet Other Cognitive / Mental Health Need 1"}
        validateName={"meetothercognitivementalhealthneed1"}
        multiplyingFactor={23.72}
        showTitle={props.isSmallScreen}
      />
      <ResponsiveFormField
        readOnly={props.readOnly}
        form={props.form}
        title={"Meet Other Cognitive / Mental Health Need 2"}
        validateName={"meetothercognitivementalhealthneed2"}
        multiplyingFactor={23.72}
        showTitle={props.isSmallScreen}
      />
      <ResponsiveFormField
        readOnly={props.readOnly}
        form={props.form}
        title={"Meet Other Cognitive / Mental Health Need 3"}
        validateName={"meetothercognitivementalhealthneed3"}
        multiplyingFactor={23.72}
        showTitle={props.isSmallScreen}
      />
      <NotesAndTotal
        form={props.form}
        handleSubmit={() => {}}
        notesFieldName={"home_management_notes"}
        totalHours={
          totalOfAField(props.form, "managewandering") +
          totalOfAField(props.form, "manageorientationissues") +
          totalOfAField(props.form, "manageanxiety") +
          totalOfAField(props.form, "managerepetitivebehavior") +
          totalOfAField(props.form, "manageagitation") +
          totalOfAField(props.form, "manageselfinjuriousbehavior") +
          totalOfAField(props.form, "manageverbalaggression") +
          totalOfAField(props.form, "managephysicalaggression") +
          totalOfAField(props.form, "managepropertydestruction") +
          totalOfAField(props.form, "meetothercognitivementalhealthneed1") +
          totalOfAField(props.form, "meetothercognitivementalhealthneed2") +
          totalOfAField(props.form, "meetothercognitivementalhealthneed3")
        }
        totalPrice={
          totalOfAField(props.form, "managewandering", 23.72) +
          totalOfAField(props.form, "manageorientationissues", 23.72) +
          totalOfAField(props.form, "manageanxiety", 23.72) +
          totalOfAField(props.form, "managerepetitivebehavior", 23.72) +
          totalOfAField(props.form, "manageagitation", 23.72) +
          totalOfAField(props.form, "manageselfinjuriousbehavior", 23.72) +
          totalOfAField(props.form, "manageverbalaggression", 23.72) +
          totalOfAField(props.form, "managephysicalaggression", 23.72) +
          totalOfAField(props.form, "managepropertydestruction", 23.72) +
          totalOfAField(props.form, "meetothercognitivementalhealthneed1", 23.72) +
          totalOfAField(props.form, "meetothercognitivementalhealthneed2", 23.72) +
          totalOfAField(props.form, "meetothercognitivementalhealthneed3", 23.72)
        }
      />
    </form>
  );
};

export default MentalHealthManagementForm;
