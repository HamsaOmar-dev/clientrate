import { LoadingOverlay, Text } from "@mantine/core";

export const LoaderWrapper = ({ loading, children }) => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        margin: "0",
        padding: "0",
        height: "100%",
      }}
    >
      <LoadingOverlay
        p={0}
        m={0}
        visible={loading}
        overlayBlur={2}
        loaderProps={{
          // color: "yellow",
          size: 50,
        }}
        zIndex={2}
      />
      {/* <Text>Loading...</Text> */}
      {children}
    </div>
  );
};
