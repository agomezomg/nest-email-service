import React, { useEffect, useState } from "react";
import io from "socket.io-client";

function MailWidget({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState("");
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
      setCurrentMessage("");
    }
  };

/*   useEffect(() => {
    io.on('connection',function(socket) {
      console.log('made socket connection');
      socket.on('newMail', function(data){
        console.log(data);
      });
    });
  }, [socket]); */

  return (
    <div className="h-2/3 lg:w-2/4 sm:w-2/4 mx-auto my-auto bg-white rounded-xl shadow-lg">
      <div className="h-12 px-10 rounded-md bg-black relative cursor-pointer">
        <p className="block  py-2 text-white leading-10">Composing Mail</p>
      </div>
      <div className="p-4 flex flex-col ">
        <label className="text-xl mt-3">to: </label>
        <input
          type="text"
          placeholder="anything@example.com"
          onChange={(event) => {
            setTo(event.target.value);
          }}
          className="p-2 mt-3 border border-indigo-600"
        />
        <label className="text-xl mt-3">Room ID</label>
        <input
          type="text"
          placeholder="Hello World!"
          onChange={(event) => {
            setSubject(event.target.value);
          }}
          className="p-2 mt-3 border border-indigo-600"
        />
      </div>
      <div className="p-4 flex flex-col ">
        <input
          type="text"
          value={currentMessage}
          placeholder="Type a message"
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMail();
          }}
          className="h-full flex basis-4/5 outline-none px-3"
        />

        <button
          onClick={sendMail}
          className="h-full flex basis-1/5 justify-center outline-none bg-indigo-600 text-white font-bold text-xl"
        >
          send
        </button>
      </div>
    </div>
  );
}

export default MailWidget;
