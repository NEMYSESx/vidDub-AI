"use client";
import { AppShell, Group, Text, Button, Center, Title } from "@mantine/core";
import { IconLock } from "@tabler/icons-react";

import { useEffect, useState } from "react";

const Pitcher = () => {
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
            <Title size="md" c="#fff" m="35px">
              HOW IT WORKS
            </Title>
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
              Audio Speed and Pitch Changer
            </Title>
            <Text
              style={{
                marginBottom: "20px",
                color: "white",
                fontSize: "25px",
              }}
            >
              Changes pitch and tempo of the song by adjusting musical key and
              bpm sliders
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
            Free Online Pitch Shifter
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
              This app changes the song pitch and/or playback speed using one of
              the best pitch shifting algorithms. The musical key, scale, and
              bpm will be automatically detected.
            </p>
            <p style={{ marginBottom: "20px", textAlign: "left" }}>
              You can easily transpose music to a different key and change the
              tempo by adjusting the pitch shifter key and bpm sliders.
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
            Features
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
            <ul>
              <li>
                <p style={{ marginBottom: "20px", textAlign: "left" }}>
                  Analyzes music and finds musical key, scale and bpm
                </p>
              </li>
              <li>
                <p style={{ marginBottom: "20px", textAlign: "left" }}>
                  Changes audio pitch
                </p>
              </li>
              <li>
                {" "}
                <p style={{ marginBottom: "20px", textAlign: "left" }}>
                  Speed up or slow down music playback speed
                </p>
              </li>
            </ul>
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

export default Pitcher;
