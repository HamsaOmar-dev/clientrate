import { Container, ContainerProps } from "@mantine/core";

function ContainerWrapper(props: ContainerProps) {
  return (
    <Container {...props} size={props.size ? props.size : 1300}>
      {props.children}
    </Container>
  );
}

export default ContainerWrapper;
