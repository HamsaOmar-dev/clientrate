import Button from "@/components/Button";
import { Burger, Container, createStyles, Group, Header, Paper, rem, Transition } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import logo from "../public/client-rate-logo.png";
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

interface AppHeaderProps {
  scrollIntoView1: () => void;
  scrollIntoView2: () => void;
}

export function AppHeader({ scrollIntoView1, scrollIntoView2 }: AppHeaderProps) {
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width: 769px)");
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState("");
  const { classes, cx } = useStyles();

  const items = links.map((link) =>
    link.label === "Sign Up" || link.label === "Log In" ? (
      <Button
        fullWidth={isMobile}
        w={isMobile ? "80%" : "auto"}
        p="xl"
        key={link.link}
        m={isMobile ? "md" : "sm"}
        size="lg"
        style={{
          padding: "0.5rem 1rem",
          // margin: "0 0.5rem",
        }}
        variant={link.label === "Sign Up" ? "outline" : "filled"}
        onClick={(e: any) => {
          e.preventDefault();
          router.push(link.link);
          setActive("");
          router.push(link.link);
          close();
        }}
      >
        {link.label}
      </Button>
    ) : (
      <a
        key={link.label}
        // href={link.link}
        className={cx(classes.link, {
          [classes.linkActive]: active === link.link,
        })}
        onClick={(event) => {
          event.preventDefault();
          setActive(link.link);
          link.link === "/features" ? scrollIntoView1() : link.link === "/pricing" ? scrollIntoView2() : link.link === "/demo" ? router.push(link.link) : null;
          close();
        }}
      >
        {link.label}
      </a>
    )
  );

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
          {items}
        </Group>
        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />
        <Transition
          transition="pop-top-right"
          duration={200}
          mounted={opened}
        >
          {(styles) => (
            <Paper
              className={classes.dropdown}
              withBorder
              style={styles}
            >
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}
