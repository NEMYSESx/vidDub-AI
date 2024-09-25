// MainContent.tsx
import { Center, Title, Text, Button, Group, Image } from "@mantine/core";

function MainContent() {
  return (
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
          style={{ marginBottom: "10px", fontSize: "50px" }}
          c="white"
        >
          Vocal Remover and Isolation
        </Title>
        <Text
          style={{ marginBottom: "20px", color: "white", fontSize: "25px" }}
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
        >
          Browse my files
        </Button>
      </Group>
    </Center>
  );
}

export default MainContent;
