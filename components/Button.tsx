import { Button as MantineButton, ButtonProps, Text } from "@mantine/core";

function Button(props: ButtonProps & React.ComponentPropsWithoutRef<"button">) {
  return (
    <MantineButton
      // color=
      size={props.size || "lg"}
      variant={props.variant || "outline"}
      style={{
        // hide if props.hidden is true
        display: props.hidden ? "none" : "block",
      }}
      {...props}
      radius="md"
    >
      {typeof props.children === "string" ? <Text color={"dark"}>{props.children}</Text> : props.children}
    </MantineButton>
  );
}
export default Button;
