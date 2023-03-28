import { Accordion, AccordionProps, Divider, Grid, TextInput, Stack, Text, NumberInput } from "@mantine/core";
import { useEffect, useState } from "react";

interface ResponsiveFormFieldProps {
  title: string;
  form: any;
  validateName: string;
  multiplyingFactor: number;
  showTitle?: boolean;
  fieldName?: string;
  readOnly?: boolean;
}

const ResponsiveFormField = (props: ResponsiveFormFieldProps) => {
  const [validateName, setValidateName] = useState(props.validateName);
  const form = props.form;

  return (
    <ResponsiveFieldWrapper
      hidden={props.showTitle}
      {...props}
    >
      <Grid
        py="xs"
        grow
        justify="space-between"
      >
        {!props.showTitle && (
          <Grid.Col sm={3}>
            <Text
              // align="right"
              size="sm"
              style={{ wordBreak: "break-word" }}
              weight={500}
            >
              {props.title}
            </Text>
          </Grid.Col>
        )}
        <Grid.Col sm={3}>
          <Stack spacing={0}>
            {props.showTitle && <Text>{props.fieldName || "Hours/"}Day</Text>}
            <NumberInput
              key={`${validateName}_day`}
              styles={{
                input: {
                  ":disabled": {
                    backgroundColor: "white",
                  },
                  // ":read-only": {
                  //   backgroundColor: "white",
                  //   color: "black",
                  //   fontWeight: form.values[`${validateName}_day`] ? "bold" : "normal",
                  //   border: form.values[`${validateName}_day`] ? "1px solid black" : "1px solid #AAAAAA",
                  // },
                },
              }}
              type={"number"}
              size="xs"
              radius="md"
              placeholder={props.readOnly ? "0.00" : `Enter ${props.fieldName || "Hours/"}Day`}
              disabled={props.readOnly}
              min={0}
              precision={2}
              hideControls
              readOnly={props.readOnly}
              value={form?.values[`${validateName}_day`]}
              {...form?.getInputProps(`${validateName}_day`, {})}
            />
          </Stack>
        </Grid.Col>
        <Grid.Col sm={3}>
          {props.fieldName !== "Meals/" && (
            <Stack spacing={0}>
              {props.showTitle && <Text>{props.fieldName || "Hours/"}Week</Text>}

              <NumberInput
                key={`${validateName}_week`}
                styles={{
                  input: {
                    ":disabled": {
                      backgroundColor: "white",
                    }, // ":read-only": {
                    //   backgroundColor: "white",
                    //   color: "black",
                    //   fontWeight: form.values[`${validateName}_day`] ? "bold" : "normal",
                    //   border: form.values[`${validateName}_day`] ? "1px solid black" : "1px solid #AAAAAA",
                    // },
                  },
                }}
                type={"number"}
                size="xs"
                radius="md"
                placeholder={props.readOnly ? "0.00" : `Enter ${props.fieldName || "Hours/"}Week`}
                disabled={props.readOnly}
                min={0}
                precision={2}
                // max={168}
                hideControls
                readOnly={props.readOnly}
                {...form?.getInputProps(`${validateName}_week`, {})}
              />
            </Stack>
          )}
        </Grid.Col>
        <Grid.Col sm={3}>
          {props.fieldName !== "Meals/" && (
            <Stack spacing={0}>
              {props.showTitle && <Text>{props.fieldName || "Hours/"}Month</Text>}
              <NumberInput
                key={`${validateName}_month`}
                styles={{
                  input: {
                    ":disabled": {
                      backgroundColor: "white",
                    }, // ":read-only": {
                    //   backgroundColor: "white",
                    //   color: "black",
                    //   fontWeight: form.values[`${validateName}_day`] ? "bold" : "normal",
                    //   border: form.values[`${validateName}_day`] ? "1px solid black" : "1px solid #AAAAAA",
                    // },
                  },
                }}
                type={"number"}
                radius="md"
                size="xs"
                placeholder={props.readOnly ? "0.00" : `Enter ${props.fieldName || "Hours/"}Month`}
                min={0}
                precision={2}
                onWheel={(event) => event.currentTarget.blur()}
                disabled={props.readOnly}
                // max={720}
                hideControls
                readOnly={props.readOnly}
                {...form?.getInputProps(`${validateName}_month`, {})}
              />
            </Stack>
          )}
        </Grid.Col>
      </Grid>
      {!props.showTitle && <Divider size="xs" />}
    </ResponsiveFieldWrapper>
  );
};

const ResponsiveFieldWrapper = (props: AccordionProps & ResponsiveFormFieldProps) => {
  return props.showTitle ? (
    <Accordion
      variant="separated"
      my="xl"
      styles={{
        item: {
          backgroundColor: "white",
          border: "none",
          boxShadow: "none",
          padding: 0,
        },
      }}
    >
      <Accordion.Item value={props.title}>
        <Accordion.Control p="md">{props.title}</Accordion.Control>
        <Accordion.Panel>{props.children}</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  ) : (
    <>{props.children}</>
  );
};

export default ResponsiveFormField;
