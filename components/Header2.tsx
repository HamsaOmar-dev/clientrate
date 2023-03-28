import { Avatar, Container, createStyles, Group, Header, rem, Stack, Text } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { IconLogout } from "@tabler/icons-react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import logo from "../public/client-rate-logo.png";
import HamsaOmer from "../public/HamsaOmer.png";
const HEADER_HEIGHT = rem(80);

const useStyles = createStyles((theme) => ({
  root: {
    position: "sticky",
    zIndex: 1,
  },

  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,

    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    overflow: "hidden",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(18)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.lg,
    fontWeight: 500,

    "&:hover": {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.xs,
      margin: theme.spacing.xs,
    },
  },

  linkActive: {
    "&, &:hover": {
      borderBottom: `1px solid black`,
      borderRadius: 0,
    },
  },
}));
const links = [
  {
    link: "/features",
    label: "Features",
  },
  {
    link: "/pricing",
    label: "Pricing",
  },
  {
    link: "/demo",
    label: "Demo",
  },
  {
    link: "/auth/sign-up",
    label: "Sign Up",
  },
  {
    link: "/auth/sign-in",
    label: "Log In",
  },
];

export function AppHeader2() {
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width: 769px)");
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  const UserDetails = () => {
    // get the user email and user name from next auth
    const { data: session } = useSession();
    console.log("SESSION DATA", session?.user?.email);
    const [user, setUser] = useState(session?.user);
    useEffect(() => {
      if (!user) {
        setUser(session?.user);
      }
    }, [session?.user]);

    return (
      <Group align="center">
        <div style={{ borderRadius: "50px", overflow: "hidden" }}>
          <Avatar
            src={user?.image || ""}
            size="lg"
            alt="logo"
          />
        </div>

        <Stack spacing={0}>
          <Text
            size="xl"
            weight="bold"
          >
            {user?.name || ""}
          </Text>
          <Group
            style={{
              cursor: "pointer",
            }}
            onClick={() => signOut()}
            spacing={5}
          >
            <IconLogout
              color="#800000"
              size={22}
              stroke={1.1}
            />
            <Text color="#800000">Log Out</Text>
          </Group>
        </Stack>
      </Group>
    );
  };

  return (
    <Header
      height={HEADER_HEIGHT}
      className={classes.root}
    >
      <Container
        className={classes.header}
        size="xl"
      >
        <Image
          src={logo}
          height={45}
          alt="logo"
        />
        <Group
          spacing={5}
          className={classes.links}
        >
          <UserDetails />
        </Group>
        {/* <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        /> */}
        {/* <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition> */}
      </Container>
    </Header>
  );
}
