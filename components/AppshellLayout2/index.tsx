import { AppShell } from "@mantine/core";
import { AppHeader2 } from "../Header2";

interface AppshellLayoutProps {
  children: React.ReactNode;
}

const AppshellLayout2 = ({ children }: AppshellLayoutProps) => {
  return (
    <AppShell
      header={<AppHeader2 />}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
          padding: 0,
        },
      })}
    >
      {children}
    </AppShell>
  );
};

export default AppshellLayout2;
