import NotesAndTotal from "../NotesAndTotal";
import { totalOfAField } from "../NotesAndTotal/totalOfAField";
import ResponsiveFormField from "../ResponsiveFormField";

interface Props {
  form: any;
  readOnly?: boolean;
  isSmallScreen: boolean;
  handleSubmit: Function;
}

const HealthRelatedAssistanceForm = (props: Props) => {
  return (
    <form onSubmit={props.form.onSubmit(props.handleSubmit)}>
      <ResponsiveFormField
        readOnly={props.readOnly}
        form={props.form}
        title={"Assistance with Self Administration"}
        validateName={"assistancewithselfadministration"}
        multiplyingFactor={27.04}
        showTitle={props.isSmallScreen}
      />
      <ResponsiveFormField
        readOnly={props.readOnly}
        form={props.form}
        title={"Verbal or Visual Medical Reminders"}
        validateName={"verbalorvisualmedicalreminders"}
        multiplyingFactor={23.72}
        showTitle={props.isSmallScreen}
      />
      <ResponsiveFormField
        readOnly={props.readOnly}
        form={props.form}
        title={"Insulin Injection"}
        validateName={"insulininjection"}
        multiplyingFactor={27.04}
        showTitle={props.isSmallScreen}
      />
      <ResponsiveFormField
        readOnly={props.readOnly}
        form={props.form}
        title={"Therapeutic Exercises"}
        validateName={"therapeuticexercises"}
        multiplyingFactor={27.04}
        showTitle={props.isSmallScreen}
      />
      <ResponsiveFormField
        readOnly={props.readOnly}
        form={props.form}
        title={"Delegated Clinical Monitoring"}
        validateName={"delegatedclinicalmonitoring"}
        multiplyingFactor={27.04}
        showTitle={props.isSmallScreen}
      />
      <ResponsiveFormField
        readOnly={props.readOnly}
        form={props.form}
        title={"Other Delegated Tasks"}
        validateName={"otherdelegatedtasks"}
        multiplyingFactor={27.04}
        showTitle={props.isSmallScreen}
      />
      <ResponsiveFormField
        readOnly={props.readOnly}
        form={props.form}
        title={"Med Set Ups and Monitoring"}
        validateName={"medsetupsandmonitoring"}
        multiplyingFactor={33.97}
        showTitle={props.isSmallScreen}
      />
      <ResponsiveFormField
        readOnly={props.readOnly}
        form={props.form}
        title={"Insulin Draws"}
        validateName={"insulindraws"}
        multiplyingFactor={33.97}
        showTitle={props.isSmallScreen}
      />
      <NotesAndTotal
        form={props.form}
        handleSubmit={() => {}}
        notesFieldName={"health_related_assistance_notes"}
        totalHours={
          totalOfAField(props.form, "assistancewithselfadministration") +
          totalOfAField(props.form, "verbalorvisualmedicalreminders") +
          totalOfAField(props.form, "insulininjection") +
          totalOfAField(props.form, "therapeuticexercises") +
          totalOfAField(props.form, "delegatedclinicalmonitoring") +
          totalOfAField(props.form, "otherdelegatedtasks") +
          totalOfAField(props.form, "medsetupsandmonitoring") +
          totalOfAField(props.form, "insulindraws")
        }
        totalPrice={
          totalOfAField(props.form, "assistancewithselfadministration", 27.04) +
          totalOfAField(props.form, "verbalorvisualmedicalreminders", 23.72) +
          totalOfAField(props.form, "insulininjection", 27.04) +
          totalOfAField(props.form, "therapeuticexercises", 27.04) +
          totalOfAField(props.form, "delegatedclinicalmonitoring", 27.04) +
          totalOfAField(props.form, "otherdelegatedtasks", 27.04) +
          totalOfAField(props.form, "medsetupsandmonitoring", 33.97) +
          totalOfAField(props.form, "insulindraws", 33.97)
        }
      />
    </form>
  );
};

export default HealthRelatedAssistanceForm;
