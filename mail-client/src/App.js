import React, { useEffect, useState, Suspense, useCallback } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import io from "socket.io-client";
import MailWidget from "./components/MailWidget";
import "./App.css";

function App() {
  const [username, setUsername] = useState("anagmar98@gmail.com")
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [socket, setSocket] = useState(false);

  const login = () => {
    if (username !== "") {
      setUsername(username);
      setShowChat(true);
    }
  };

  useEffect(() => {
    if (!socket)
      setSocket(io.connect("http://localhost:3001/chat"));
  }, [socket])

  return (
    <MailWidget socket={socket} username={username}/>
  );
}

export default App;
