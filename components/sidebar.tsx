/* eslint-disable @typescript-eslint/no-unused-vars */
// Sidebar.tsx
"use client";
import { AppShell, Burger, Text, Stack, ActionIcon, rem } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconFlag,
  IconPrismLight,
  IconHelpOctagon,
  IconCircleArrowRight,
  IconGrillFork,
  IconScissors,
  IconTriangleOff,
  IconArrowsLeftRight,
  IconMicrophone,
  IconDisc,
} from "@tabler/icons-react";
import { useEffect, useState } from "react";
import classes from "@/styles/scroll.module.css";
import Link from "next/link";

const iconOptions = [
  { icon: IconCircleArrowRight, label: "Remover", route: "/" },
  { icon: IconPrismLight, label: "Splitter", route: "splitter-ai" },
  { icon: IconGrillFork, label: "Pitcher", route: "pitch" },
  { icon: IconTriangleOff, label: "Key BPM finder", route: "key-bpm-finder" },
  { icon: IconScissors, label: "Cutter", route: "cutter" },
  { icon: IconArrowsLeftRight, label: "Joiner", route: "joiner" },
  { icon: IconMicrophone, label: "Recorder", route: "voice-recorder" },
  { icon: IconDisc, label: "Karaoke", route: "karaoke" },
];

function Sidebar() {
  const [opened, { toggle }] = useDisclosure();
  const [focusedIndex, setFocusedIndex] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppShell
      padding="md"
      bg="#17171e"
      navbar={{
        width: 100,
        collapsed: { desktop: !opened, mobile: !opened },
        breakpoint: "lg",
      }}
    >
      <Burger
        opened={opened}
        onClick={toggle}
        aria-label="Toggle navigation"
        c="#e6e6f6"
        size="lg"
        style={{
          marginBottom: "20px",
          "--burger-color": "#e6e6f6",
          position: "fixed",
          zIndex: 1000,
          top: 20,
          left: 30,
        }}
      />

      <AppShell.Navbar bg="#1c1c26" w={100}>
        <Stack h={90}></Stack>
        <div
          className={classes.scrollArea}
          style={{
            width: "98px",
            height: "calc(100vh - 60px)",
            overflowY: "auto",
            overflowX: "hidden",
          }}
        >
          <Stack>
            {iconOptions.map(({ icon: IconComponent, label, route }, index) => (
              <Link href={route} key={label} passHref>
                <Stack
                  align="center"
                  gap={0}
                  onClick={() => setFocusedIndex(index)}
                  style={{
                    cursor: "pointer",
                    backgroundColor:
                      focusedIndex === index ? "#17171e" : "transparent",
                    padding: "5px",
                    borderRadius: "5px",
                    borderRight:
                      focusedIndex === index
                        ? "4px solid #665dc3"
                        : "4px solid transparent",
                  }}
                >
                  <ActionIcon
                    size={42}
                    variant="default"
                    aria-label={label}
                    title={label}
                    bg={focusedIndex === index ? "#17171e" : "#1c1c26"}
                    bd={focusedIndex === index ? "#17171e" : "#1c1c26"}
                    c="#e6e6f6"
                  >
                    <IconComponent
                      style={{
                        width: rem(24),
                        height: rem(24),
                      }}
                    />
                  </ActionIcon>
                  <Text size="md" c="#e6e6f6">
                    {label}
                  </Text>
                </Stack>
              </Link>
            ))}
          </Stack>
        </div>
        <Stack pl={30} pt={15}>
          <ActionIcon
            size={42}
            variant="default"
            aria-label="Help"
            bg="#1c1c26"
            bd="#1c1c26"
            c="#e6e6f6"
          >
            <IconHelpOctagon style={{ width: rem(24), height: rem(24) }} />
          </ActionIcon>
          <ActionIcon
            size={42}
            variant="default"
            aria-label="Flag"
            bg="#1c1c26"
            bd="#1c1c26"
            c="#e6e6f6"
          >
            <IconFlag style={{ width: rem(24), height: rem(24) }} />
          </ActionIcon>
        </Stack>
      </AppShell.Navbar>
    </AppShell>
  );
}

export default Sidebar;
