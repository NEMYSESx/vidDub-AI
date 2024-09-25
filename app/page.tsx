"use client";
import {
  AppShell,
  Group,
  Text,
  Button,
  Center,
  Title,
  Image,
} from "@mantine/core";

import { useEffect, useState } from "react";

function Home() {
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

  const titleTop = Math.max(0, 100 - scrollY);
  const handleMessage = () => {
    alert("only cutter route button work");
  };

  return (
    <>
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
                Vocal Remover and Isolation
              </Title>
              <Text
                style={{
                  marginBottom: "20px",
                  color: "white",
                  fontSize: "25px",
                }}
              >
                Separate voice from music out of a song free with powerful AI
                algorithms
              </Text>
              <Image
                src="https://vocalremover.org/img/remover/player_en.png"
                alt="Vocal Remover Player"
                radius="md"
                style={{
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  marginBottom: "20px",
                  maxWidth: "90%",
                }}
              />
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
                onClick={handleMessage}
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
              Remove vocals from a song
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
                This free online application will help remove vocals from a song
                by creating karaoke.
              </p>
              <p style={{ marginBottom: "20px", textAlign: "left" }}>
                Once you choose a song, artificial intelligence will separate
                the vocals from the instrumental ones.You will get two tracks -
                a karaoke version of your song (no vocals) and acapella version
                (isolated vocals).
              </p>

              <p style={{ marginBottom: "20px", textAlign: "left" }}>
                Despite the complexity and high cost of service, you can use it
                absolutely free.Processing usually takes about 10 seconds
              </p>
            </div>
          </Group>
        </AppShell.Main>
      </AppShell>
    </>
  );
}
export default Home;
