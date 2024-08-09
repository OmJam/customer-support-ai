"use client";
import { Box } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [messages, setMessages] = useState({
    role: "assistant",
    content: `Hi I'm the Headstarter Support Agent, how can I assist you today?`,
  });

  const [message, setMessages] = useState("");

  return <Box> </Box>;
}
