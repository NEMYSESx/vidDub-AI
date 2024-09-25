"use client";
import { AppShell, Group, Text, Button, Center, Title } from "@mantine/core";

const Karaoke = () => {
  return (
    <AppShell padding="md" bg="#17171e">
      <AppShell.Main>
        <Center style={{ height: "100vh", padding: "20px" }}>
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
              Recording Voice Over a Song
            </Title>
            <Text
              style={{
                marginBottom: "20px",
                color: "white",
                fontSize: "25px",
              }}
            >
              Sing & record, tune voice and save complete song. Choose karaoke
              track you want to sing with
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
      </AppShell.Main>
    </AppShell>
  );
};

export default Karaoke;
