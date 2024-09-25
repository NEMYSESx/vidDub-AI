"use client";
import { AppShell, Group, Text, Button, Center, Title } from "@mantine/core";
import { IconLock } from "@tabler/icons-react";

import { useEffect, useState } from "react";

const KeyBpmFinder = () => {
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

  const titleTop = Math.max(0, 90 - scrollY);
  return (
    <AppShell padding="md" bg="#17171e">
      <AppShell.Main>
        <Center style={{ height: "100vh", padding: "20px" }}>
          <div
            style={{
              position: "fixed",
              top: titleTop + "px",
              left: 0,
              right: 0,
              backgroundColor: titleTop === 0 ? "#17171e" : "transparent",
              zIndex: 100,
              padding: "10px 0",
              transition: "top 0.3s ease",
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Title size="md" c="#fff" m="35px">
                HOW IT WORKS
              </Title>
              <Title size="md" c="#fff" m="35px">
                TAP TEMPO
              </Title>
            </div>
          </div>

          <Group
            mt="xl"
            style={{
              flexDirection: "column",
              marginTop: "60px",
              textAlign: "center",
            }}
          >
            <Title
              order={1}
              style={{
                marginBottom: "10px",
                fontSize: "50px",
              }}
              c="white"
            >
              Song Key and BPM Finder
            </Title>
            <Text
              style={{
                marginBottom: "20px",
                color: "white",
                fontSize: "25px",
              }}
            >
              Analyzes music and finds Key, Scale and BPM for any song
            </Text>

            <Button
              size="md"
              variant="outline"
              color="white"
              radius="xl"
              style={{
                padding: "10px 20px",
                borderColor: "#665dc3",
                marginBottom: "20px",
              }}
            >
              Browse my files
            </Button>
          </Group>
        </Center>

        <Group
          style={{
            flexDirection: "column",
            marginTop: "60px",
            textAlign: "center",
          }}
        >
          <Text
            style={{
              marginBottom: "10px",
              textAlign: "left",
              fontSize: "50px",
            }}
            c="white"
            w={1200}
          >
            How to find Key & BPM
          </Text>
          <div
            style={{
              borderLeft: "4px solid #665dc3",
              backgroundColor: "#1f1f28",
              padding: "15px",
              borderRadius: "5px",
              width: "100%",
              maxWidth: "1200px",
              color: "#e6e6f6",
              fontSize: "25px",
              lineHeight: "1.6",
              paddingLeft: "30px",
            }}
          >
            <p style={{ marginBottom: "20px", textAlign: "left" }}>
              This app analyzes music and estimates pitch and tempo [e.g. A♭
              major, 120 bpm]. You can upload multiple files at once. Processing
              time takes a few seconds.
            </p>
          </div>
          <Text
            style={{
              marginBottom: "10px",
              textAlign: "left",
              fontSize: "30px",
            }}
            c="white"
            w={1200}
          >
            Change Key & BPM
          </Text>
          <div
            style={{
              borderLeft: "4px solid #665dc3",
              backgroundColor: "#1f1f28",
              padding: "15px",
              borderRadius: "5px",
              width: "100%",
              maxWidth: "1200px",
              color: "#e6e6f6",
              fontSize: "25px",
              lineHeight: "1.6",
              paddingLeft: "30px",
            }}
          >
            <p style={{ marginBottom: "20px", textAlign: "left" }}>
              Using Pitch Shifter tool you can transpose song to a different key
              and tempo.
            </p>
          </div>
          <Text
            style={{
              marginBottom: "10px",
              textAlign: "left",
              fontSize: "30px",
            }}
            c="white"
            w={1200}
          >
            Tap tempo
          </Text>
          <div
            style={{
              borderLeft: "4px solid #665dc3",
              backgroundColor: "#1f1f28",
              padding: "15px",
              borderRadius: "5px",
              width: "100%",
              maxWidth: "1200px",
              color: "#e6e6f6",
              fontSize: "25px",
              lineHeight: "1.6",
              paddingLeft: "30px",
            }}
          >
            <p style={{ marginBottom: "20px", textAlign: "left" }}>
              Tap tempo tool allows you to calculate tempo beats per minute by
              tapping space key to the rhythm or beat
            </p>
          </div>
          <Text
            style={{
              marginBottom: "10px",
              textAlign: "left",
              fontSize: "30px",
            }}
            c="white"
            w={1200}
          >
            <IconLock /> Privacy and Security Guaranteed
          </Text>
          <div
            style={{
              borderLeft: "4px solid #665dc3",
              backgroundColor: "#1f1f28",
              padding: "15px",
              borderRadius: "5px",
              width: "100%",
              maxWidth: "1200px",
              color: "#e6e6f6",
              fontSize: "25px",
              lineHeight: "1.6",
              paddingLeft: "30px",
            }}
          >
            <p style={{ marginBottom: "20px", textAlign: "left" }}>
              This is serverless app. Your files does not leave your device
            </p>
          </div>
        </Group>
      </AppShell.Main>
    </AppShell>
  );
};

export default KeyBpmFinder;
