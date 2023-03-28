import NotesAndTotal from "../NotesAndTotal";
import { totalOfAField } from "../NotesAndTotal/totalOfAField";
import ResponsiveFormField from "../ResponsiveFormField";

interface Props {
  form: any;
  readOnly?: boolean;

  isSmallScreen: boolean;
  handleSubmit: Function;
}

const CongregateMealPreparation = (props: Props) => {
  return (
    <form onSubmit={props.form.onSubmit(props.handleSubmit)}>
      <ResponsiveFormField
        readOnly={props.readOnly}
        form={props.form}
        title={"Breakfast"}
        validateName={"breakfast"}
        fieldName={"Meals/"}
        multiplyingFactor={3.67}
        showTitle={props.isSmallScreen ? true : false}
      />
      <ResponsiveFormField
        readOnly={props.readOnly}
        form={props.form}
        title={"Lunch"}
        validateName={"lunch"}
        fieldName={"Meals/"}
        multiplyingFactor={4.57}
        showTitle={props.isSmallScreen ? true : false}
      />
      <ResponsiveFormField
        readOnly={props.readOnly}
        form={props.form}
        title={"Supper"}
        validateName={"supper"}
        fieldName={"Meals/"}
        multiplyingFactor={4.57}
        showTitle={props.isSmallScreen ? true : false}
      />
      <ResponsiveFormField
        readOnly={props.readOnly}
        form={props.form}
        title={"Snack"}
        validateName={"snack"}
        fieldName={"Meals/"}
        multiplyingFactor={0.45}
        showTitle={props.isSmallScreen ? true : false}
      />
      <NotesAndTotal
        form={props.form}
        handleSubmit={() => {}}
        notesFieldName={"congregate_meal_preparation_notes"}
        totalHours={totalOfAField(props.form, "breakfast") + totalOfAField(props.form, "lunch") + totalOfAField(props.form, "supper") + totalOfAField(props.form, "snack")}
        totalPrice={totalOfAField(props.form, "breakfast", 3.67) + totalOfAField(props.form, "lunch", 4.57) + totalOfAField(props.form, "supper", 4.57) + totalOfAField(props.form, "snack", 0.45)}
      />
    </form>
  );
};

export default CongregateMealPreparation;
