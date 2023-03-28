import NotesAndTotal from "../NotesAndTotal";
import { totalOfAField } from "../NotesAndTotal/totalOfAField";
import ResponsiveFormField from "../ResponsiveFormField";

interface Props {
  form: any;
  readOnly?: boolean;
  isSmallScreen: boolean;
  handleSubmit: Function;
}

const NonMedicalTransportationForm = (props: Props) => {
  return (
    <form onSubmit={props.form.onSubmit(props.handleSubmit)}>
      <ResponsiveFormField
        readOnly={props.readOnly}
        form={props.form}
        title={"Driver 1:1"}
        validateName={"nonmedicaltransportation1"}
        multiplyingFactor={17.84}
        showTitle={props.isSmallScreen}
      />
      <ResponsiveFormField
        readOnly={props.readOnly}
        form={props.form}
        title={"Mileage 1:1"}
        validateName={"nonmedicaltransportation2"}
        fieldName={"Miles/"}
        multiplyingFactor={0.63}
        showTitle={props.isSmallScreen}
      />
      <ResponsiveFormField
        readOnly={props.readOnly}
        form={props.form}
        title={"Driver Number of Riders 2"}
        validateName={"nonmedicaltransportation3"}
        multiplyingFactor={8.92}
        showTitle={props.isSmallScreen}
      />
      <ResponsiveFormField
        readOnly={props.readOnly}
        form={props.form}
        title={"Mileage Number of Riders 2"}
        validateName={"nonmedicaltransportation4"}
        fieldName={"Miles/"}
        multiplyingFactor={0.33}
        showTitle={props.isSmallScreen}
      />
      <ResponsiveFormField
        readOnly={props.readOnly}
        form={props.form}
        title={"Driver Number of Riders 3-5"}
        validateName={"nonmedicaltransportation5"}
        multiplyingFactor={4.46}
        showTitle={props.isSmallScreen}
      />
      <ResponsiveFormField
        readOnly={props.readOnly}
        form={props.form}
        fieldName={"Miles/"}
        title={"Mileage Number of Riders 3-5"}
        validateName={"nonmedicaltransportation6"}
        multiplyingFactor={0.16}
        showTitle={props.isSmallScreen}
      />
      <ResponsiveFormField
        readOnly={props.readOnly}
        form={props.form}
        title={"Driver Number of Riders 6-10"}
        validateName={"nonmedicaltransportation7"}
        multiplyingFactor={2.24}
        showTitle={props.isSmallScreen}
      />
      <ResponsiveFormField
        readOnly={props.readOnly}
        form={props.form}
        title={"Mileage Number of Riders 6-10"}
        validateName={"nonmedicaltransportation8"}
        fieldName={"Miles/"}
        multiplyingFactor={0.1}
        showTitle={props.isSmallScreen}
      />
      <ResponsiveFormField
        readOnly={props.readOnly}
        form={props.form}
        title={"Driver Number of Riders More than 10"}
        validateName={"nonmedicaltransportation9"}
        multiplyingFactor={1.19}
        showTitle={props.isSmallScreen}
      />
      <ResponsiveFormField
        readOnly={props.readOnly}
        form={props.form}
        title={"Mileage Number of Riders More than 10"}
        validateName={"nonmedicaltransportation10"}
        fieldName={"Miles/"}
        multiplyingFactor={0.05}
        showTitle={props.isSmallScreen}
      />
      <NotesAndTotal
        form={props.form}
        handleSubmit={() => {}}
        notesFieldName={"non_medical_transportation_notes"}
        totalHours={
          totalOfAField(props.form, "nonmedicaltransportation1") +
          totalOfAField(props.form, "nonmedicaltransportation2") +
          totalOfAField(props.form, "nonmedicaltransportation3") +
          totalOfAField(props.form, "nonmedicaltransportation4") +
          totalOfAField(props.form, "nonmedicaltransportation5") +
          totalOfAField(props.form, "nonmedicaltransportation6") +
          totalOfAField(props.form, "nonmedicaltransportation7") +
          totalOfAField(props.form, "nonmedicaltransportation8") +
          totalOfAField(props.form, "nonmedicaltransportation9") +
          totalOfAField(props.form, "nonmedicaltransportation10")
        }
        totalPrice={
          totalOfAField(props.form, "nonmedicaltransportation1", 17.84) +
          totalOfAField(props.form, "nonmedicaltransportation2", 0.63) +
          totalOfAField(props.form, "nonmedicaltransportation3", 8.92) +
          totalOfAField(props.form, "nonmedicaltransportation4", 0.33) +
          totalOfAField(props.form, "nonmedicaltransportation5", 4.46) +
          totalOfAField(props.form, "nonmedicaltransportation6", 0.16) +
          totalOfAField(props.form, "nonmedicaltransportation7", 2.24) +
          totalOfAField(props.form, "nonmedicaltransportation8", 0.1) +
          totalOfAField(props.form, "nonmedicaltransportation9", 1.19) +
          totalOfAField(props.form, "nonmedicaltransportation10", 0.05)
        }
      />
    </form>
  );
};

export default NonMedicalTransportationForm;
