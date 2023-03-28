import { Paper, PaperProps } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

function PaperWrapper(props: PaperProps) {
  const isSmallScreen = useMediaQuery("(max-width: 767px)");

  return (
    <Paper
      {...props}
      p="sm"
      radius="lg"
      style={{
        backgroundColor: !isSmallScreen ? "white" : "transparent",
      }}
    >
      {props.children}
    </Paper>
  );
}

export default PaperWrapper;
