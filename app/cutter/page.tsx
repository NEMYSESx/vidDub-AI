"use client";

import React, { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import { AppShell, Group, Text, Button, Center, Title } from "@mantine/core";
import {
  IconX,
  IconLock,
  IconPlayerPlay,
  IconPlayerPause,
  IconScissors,
  IconTrash,
  IconArrowLeft,
  IconArrowRight,
} from "@tabler/icons-react";
import Footer from "@/components/footer";

const MusicPlayerWithWaveform = ({
  audioUrl,
  onClose,
}: {
  audioUrl: string;
  onClose: () => void;
}) => {
  const waveformRef = useRef(null);
  const wavesurferRef = useRef<WaveSurfer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!waveformRef.current) return;

    wavesurferRef.current = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: "#00ff8e",
      progressColor: "#4CAF50",
      barWidth: 2,

      height: 128,
    });

    wavesurferRef.current.load(audioUrl);

    const handlePlayPause = () => {
      setIsPlaying((prev) => !prev);
    };

    wavesurferRef.current.on("play", handlePlayPause);
    wavesurferRef.current.on("pause", handlePlayPause);

    return () => {
      wavesurferRef.current?.destroy();
    };
  }, [audioUrl]);

  const handlePlayPause = () => {
    if (wavesurferRef.current) {
      wavesurferRef.current.playPause();
    }
  };

  return (
    <div style={styles.playerContainer}>
      <div style={styles.closeButtonContainer}>
        <Button bg="#17171e" onClick={onClose}>
          <IconX size="xl" />
        </Button>
      </div>

      <div ref={waveformRef} style={styles.waveform} />

      <Group
        style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}
      >
        <div style={styles.playButtonContainer}>
          <Button
            onClick={handlePlayPause}
            size="md"
            radius="xl"
            style={{
              color: "white",
              backgroundColor: "#262633",
              zIndex: 3435355,
            }}
            bg="#262633"
            w="140px"
            h="50px"
          >
            {isPlaying ? (
              <IconPlayerPause size={20} />
            ) : (
              <IconPlayerPlay size={20} />
            )}
          </Button>
        </div>
      </Group>
    </div>
  );
};

const KeyBpmFinder = () => {
  const [scrollY, setScrollY] = useState(0);
  const [audioUrl, setAudioUrl] = useState("");
  const [isPlayerVisible, setIsPlayerVisible] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };
  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const titleTop = Math.max(0, 90 - scrollY);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setAudioUrl(reader.result as string);
        setIsPlayerVisible(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClosePlayer = () => {
    setIsPlayerVisible(false);
    setAudioUrl("");
  };

  return (
    <AppShell padding="md" bg="#17171e">
      {isPlayerVisible && audioUrl ? (
        <div
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "1400px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <MusicPlayerWithWaveform
              audioUrl={audioUrl}
              onClose={handleClosePlayer}
            />

            <div
              style={{
                display: "flex",
                justifyContent: "right",
                marginTop: "20px",
              }}
            >
              <Button m="6px" bg="#262633" h="50px" w="120px">
                <IconScissors />
                Cut
              </Button>
              <Button m="6px" bg="#262633" h="50px" w="120px">
                <IconTrash />
                Remove
              </Button>
              <Button m="6px" bg="#1c1c26" h="50px">
                <IconArrowLeft />
              </Button>
              <Button m="6px" bg="#1c1c26" h="50px">
                <IconArrowRight />
              </Button>
            </div>
          </div>
          <Footer />
        </div>
      ) : (
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
                  JOINER
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
                Audio Cutter
              </Title>
              <Text
                style={{
                  marginBottom: "20px",
                  color: "white",
                  fontSize: "25px",
                }}
              >
                Free editor to trim and cut any audio file online
              </Text>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: "none" }}
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
                onClick={handleButtonClick}
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
              How to cut audio
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
                This app can be used to trim and/or cut audio tracks, remove an
                audio fragment. Fade in and fade out your music easily to make
                the audio harmoniously.
              </p>
              <p style={{ marginBottom: "20px", textAlign: "left" }}>
                It is fast and easy to use. You can save the audio file in any
                format (codec parameters are configured).
              </p>
              <p style={{ marginBottom: "20px", textAlign: "left" }}>
                It works directly in the browser, no need to install any
                software, and it is available for mobile devices.
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
                This is a serverless app. Your files do not leave your device.
              </p>
            </div>
          </Group>
        </AppShell.Main>
      )}
    </AppShell>
  );
};

import { CSSProperties } from "react";

const styles: { [key: string]: CSSProperties } = {
  playerContainer: {
    backgroundColor: "#1f1f28",
    padding: "20px",
    borderRadius: "10px",
    position: "relative",
    width: "1400px",
    margin: "0 auto",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  },
  waveform: {
    width: "100%",
    margin: "10px",
  },
  closeButtonContainer: {
    position: "absolute",
    top: "-250px",
    right: "-150px",
  },
  playButtonContainer: {
    position: "absolute",
    bottom: "-350px",
    left: "-5px",
  },
};

export default KeyBpmFinder;
