import { AppHeader } from "@/components/Header";
import { AppShell } from "@mantine/core";

interface AppshellLayoutProps {
  children: React.ReactNode;
  scrollIntoView1: () => void;
  scrollIntoView2: () => void;
}

const AppshellLayout = ({
  children,
  scrollIntoView1,
  scrollIntoView2,
}: AppshellLayoutProps) => {
  return (
    <AppShell
      header={
        <AppHeader
          scrollIntoView1={scrollIntoView1}
          scrollIntoView2={scrollIntoView2}
        />
      }
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

export default AppshellLayout;
