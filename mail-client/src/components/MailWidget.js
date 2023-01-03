import React, { useEffect, useState } from "react";

function MailWidget({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [mailList, sendMailList] = useState([]);
  const [to, setTo] = useState();
  const [subject, setSubject] = useState();

  const sendMail = async () => {
    if (currentMessage !== "") {
      const messageData = {
        from: username,
        subject: subject,
        body: currentMessage,
        to: to
      };

      await socket.emit("mail", messageData);
      // sendMailList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("mail", (data) => {
      console.log(data);
      sendMailList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <p>WHAT!?</p>
  );
}

export default MailWidget;
