import React from "react";
import { Button, Menu, rem, Text } from "@mantine/core";
import { IconMessageCircle, IconPhoto } from "@tabler/icons-react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={{ position: "absolute", right: "200px", top: "20px" }}>
        <Menu shadow="md" width={200}>
          <Menu.Target>
            <Button
              bg="#17171e"
              h="50px"
              w="130px"
              style={{
                borderColor: "#1e1e28",
                borderRadius: "30px",
                padding: "10px",
              }}
            >
              <Text size="lg">format</Text>
              <Text c="green" size="lg">
                :mp3
              </Text>
            </Button>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item
              leftSection={
                <IconMessageCircle
                  style={{ width: rem(14), height: rem(14) }}
                />
              }
            >
              mp3
            </Menu.Item>
            <Menu.Item
              leftSection={
                <IconPhoto style={{ width: rem(14), height: rem(14) }} />
              }
            >
              wav
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </div>
      <Button style={styles.saveButton} h="50px" w="130px">
        <Text size="xl">Save</Text>
      </Button>
    </footer>
  );
};

const styles = {
  footer: {
    padding: "10px 20px",
    borderTop: "1px solid #1e1e28",
    color: "#ffffff",
    position: "absolute" as const,
    bottom: "0px",
    width: "100%",
    height: "80px",
  },
  saveButton: {
    backgroundColor: "white",
    color: "black",
    borderRadius: "30px",
    padding: "10px 20px",
    position: "absolute" as const,
    right: "50px",
    height: "50px",
    width: "120px",
    top: "18px",
  },
};

export default Footer;
