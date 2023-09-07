import React, { useEffect, useRef, useState } from "react";
import Layout from '../components/Layout/Layout'
import Messagelayout from '../components/Layout/Messagelayout'

const Messaging = () => {
  const chatContainerRef = useRef(null);
  const inputRef = useRef(null);
  const [messages, setMessages] = useState([
    {
      text:
        "Sorry, I have no answer for that. If you say so I can search for you. To search, type 'Search Your keyword' for example type: 'Search Sololearn'",
      sender: "bot",
      time: "11:38 pm",
    },
  ]);

  useEffect(() => {
    const addNewMessage = (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    };

    const intervalId = setInterval(() => {
      addNewMessage({
        text: `New message ${messages.length + 1}`,
        sender: "user",
        time: new Date().toLocaleTimeString(),
      });
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [messages]);

  const handleInputFocus = () => {
    scrollToBottom();
  };

  const scrollHandler = () => {
    const chatContainer = chatContainerRef.current;
    const isScrolledToBottom =
      chatContainer.scrollHeight - chatContainer.scrollTop ===
      chatContainer.clientHeight;
    chatContainer.classList.toggle("auto-scroll", isScrolledToBottom && inputRef.current === document.activeElement);
  };

  useEffect(() => {
    const chatContainer = chatContainerRef.current;
    chatContainer.addEventListener("scroll", scrollHandler);

    return () => {
      chatContainer.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  useEffect(() => {
    const chatContainer = chatContainerRef.current;
    const isScrolledToBottom =
      chatContainer.scrollHeight - chatContainer.scrollTop ===
      chatContainer.clientHeight;

    if (isScrolledToBottom && inputRef.current === document.activeElement) {
      chatContainer.classList.add("auto-scroll");
      chatContainer.scrollTop = chatContainer.scrollHeight;
    } else {
      chatContainer.classList.remove("auto-scroll");
    }
  }, [messages]);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  return (
    
    <Messagelayout>
        <br/>
       <div className="shareintotwo">
  <div className="share1">
    <div className="tpadm">
      <div className="profiendedit">
        <div className="profilepho">
          <img
            src="https://images.unsplash.com/photo-1664575262619-b28fef7a40a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=832&q=80"
            alt=""
          />
        </div>
        <br />
        <div className="nam"> VICTOR ODAH</div>
        <div className="rolee">Admin</div>
        <div className="state">Lagos, Nigeria</div>
        <div className="emai">Odahviktor@gmail.com</div>
        <div className="phon">0701373576</div>
      </div>
    </div>
    <div className="btadm">
      CV
      <div className="btnrl">
        <button
          className="btn accept"
          style={{ width: "100%", padding: 8, border: "none", borderRadius: 4 }}
        >
          Download
        </button>
      </div>
    </div>
  </div>
  <div className="share2">
    <div className="tpsds">
      <div className="chat">
        <div className="chat-container">
          <div className="conversation">
            <div className="conversation-container" id="stb" ref={chatContainerRef}>
              <div className="msms" style={{ width: "100%" }}>
                <span id="ap">
                  <div className="messages sent">
                    victor
                    <span className="metadata">
                      {" "}
                      <span className="time">11:38 pm</span>
                      <span className="tick">
                        <svg
                          style={{
                            position: "absolute",
                            transition: ".5s ease-in-out"
                          }}
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={15}
                          id="msg-dblcheck-ack"
                          x={2063}
                          y={2076}
                        >
                          <path
                            d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"
                            fill="#4fc3f7"
                          />
                        </svg>
                      </span>
                    </span>
                  </div>
                  <div className="messages received">
                    Sorry, I have no answer for that. If you say so I can search
                    for you. To search, <br /> type{" "}
                    <q>
                      <b> Search Your keyword </b>
                    </q>{" "}
                    for example type : <b>Search Sololearn</b>
                    <span className="metadata">
                      {" "}
                      <span className="time">11:38 pm</span>
                    </span>
                  </div>
                </span>
                <span id="ap">
                  <div className="messages sent">
                    victor
                    <span className="metadata">
                      {" "}
                      <span className="time">11:38 pm</span>
                      <span className="tick">
                        <svg
                          style={{
                            position: "absolute",
                            transition: ".5s ease-in-out"
                          }}
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={15}
                          id="msg-dblcheck-ack"
                          x={2063}
                          y={2076}
                        >
                          <path
                            d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"
                            fill="#4fc3f7"
                          />
                        </svg>
                      </span>
                    </span>
                  </div>
                  <div className="messages received">
                    Sorry, I have no answer for that. If you say so I can search
                    for you. To search, <br /> type{" "}
                    <q>
                      <b> Search Your keyword </b>
                    </q>{" "}
                    for example type : <b>Search Sololearn</b>
                    <span className="metadata">
                      {" "}
                      <span className="time">11:38 pm</span>
                    </span>
                  </div>
                </span>{" "}
                <span id="ap">
                  <div className="messages sent">
                    victor
                    <span className="metadata">
                      {" "}
                      <span className="time">11:38 pm</span>
                      <span className="tick">
                        <svg
                          style={{
                            position: "absolute",
                            transition: ".5s ease-in-out"
                          }}
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={15}
                          id="msg-dblcheck-ack"
                          x={2063}
                          y={2076}
                        >
                          <path
                            d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"
                            fill="#4fc3f7"
                          />
                        </svg>
                      </span>
                    </span>
                  </div>
                  <div className="messages received">
                    Sorry, I have no answer for that. If you say so I can search
                    for you. To search, <br /> type{" "}
                    <q>
                      <b> Search Your keyword </b>
                    </q>{" "}
                    for example type : <b>Search Sololearn</b>
                    <span className="metadata">
                      {" "}
                      <span className="time">11:38 pm</span>
                    </span>
                  </div>
                </span>{" "}
                <span id="ap">
                  <div className="messages sent">
                    victor
                    <span className="metadata">
                      {" "}
                      <span className="time">11:38 pm</span>
                      <span className="tick">
                        <svg
                          style={{
                            position: "absolute",
                            transition: ".5s ease-in-out"
                          }}
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={15}
                          id="msg-dblcheck-ack"
                          x={2063}
                          y={2076}
                        >
                          <path
                            d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"
                            fill="#4fc3f7"
                          />
                        </svg>
                      </span>
                    </span>
                  </div>
                  <div className="messages received">
                    Sorry, I have no answer for that. If you say so I can search
                    for you. To search, <br /> type{" "}
                    <q>
                      <b> Search Your keyword </b>
                    </q>{" "}
                    for example type : <b>Search Sololearn</b>
                    <span className="metadata">
                      {" "}
                      <span className="time">11:38 pm</span>
                    </span>
                  </div>
                </span>{" "}
                <span id="ap">
                  <div className="messages sent">
                    victor
                    <span className="metadata">
                      {" "}
                      <span className="time">11:38 pm</span>
                      <span className="tick">
                        <svg
                          style={{
                            position: "absolute",
                            transition: ".5s ease-in-out"
                          }}
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={15}
                          id="msg-dblcheck-ack"
                          x={2063}
                          y={2076}
                        >
                          <path
                            d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"
                            fill="#4fc3f7"
                          />
                        </svg>
                      </span>
                    </span>
                  </div>
                  <div className="messages received">
                    Sorry, I have no answer for that. If you say so I can search
                    for you. To search, <br /> type{" "}
                    <q>
                      <b> Search Your keyword </b>
                    </q>{" "}
                    for example type : <b>Search Sololearn</b>
                    <span className="metadata">
                      {" "}
                      <span className="time">11:38 pm</span>
                    </span>
                  </div>
                </span>{" "}
                <span id="ap">
                  <div className="messages sent">
                    victor
                    <span className="metadata">
                      {" "}
                      <span className="time">11:38 pm</span>
                      <span className="tick">
                        <svg
                          style={{
                            position: "absolute",
                            transition: ".5s ease-in-out"
                          }}
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={15}
                          id="msg-dblcheck-ack"
                          x={2063}
                          y={2076}
                        >
                          <path
                            d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"
                            fill="#4fc3f7"
                          />
                        </svg>
                      </span>
                    </span>
                  </div>
                  <div className="messages received">
                    Sorry, I have no answer for that. If you say so I can search
                    for you. To search, <br /> type{" "}
                    <q>
                      <b> Search Your keyword </b>
                    </q>{" "}
                    for example type : <b>Search Sololearn</b>
                    <span className="metadata">
                      {" "}
                      <span className="time">11:38 pm</span>
                    </span>
                  </div>
                </span>{" "}
                <span id="ap">
                  <div className="messages sent">
                    victor
                    <span className="metadata">
                      {" "}
                      <span className="time">11:38 pm</span>
                      <span className="tick">
                        <svg
                          style={{
                            position: "absolute",
                            transition: ".5s ease-in-out"
                          }}
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={15}
                          id="msg-dblcheck-ack"
                          x={2063}
                          y={2076}
                        >
                          <path
                            d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"
                            fill="#4fc3f7"
                          />
                        </svg>
                      </span>
                    </span>
                  </div>
                  <div className="messages received">
                    Sorry, I have no answer for that. If you say so I can search
                    for you. To search, <br /> type{" "}
                    <q>
                      <b> Search Your keyword </b>
                    </q>{" "}
                    for example type : <b>Search Sololearn</b>
                    <span className="metadata">
                      {" "}
                      <span className="time">11:38 pm</span>
                    </span>
                  </div>
                </span>{" "}
                <span id="ap">
                  <div className="messages sent">
                    victor
                    <span className="metadata">
                      {" "}
                      <span className="time">11:38 pm</span>
                      <span className="tick">
                        <svg
                          style={{
                            position: "absolute",
                            transition: ".5s ease-in-out"
                          }}
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={15}
                          id="msg-dblcheck-ack"
                          x={2063}
                          y={2076}
                        >
                          <path
                            d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"
                            fill="#4fc3f7"
                          />
                        </svg>
                      </span>
                    </span>
                  </div>
                  <div className="messages received">
                    Sorry, I have no answer for that. If you say so I can search
                    for you. To search, <br /> type{" "}
                    <q>
                      <b> Search Your keyword </b>
                    </q>{" "}
                    for example type : <b>Search Sololearn</b>
                    <span className="metadata">
                      {" "}
                      <span className="time">11:38 pm</span>
                    </span>
                  </div>
                </span>{" "}
                <span id="ap">
                  <div className="messages sent">
                    victor
                    <span className="metadata">
                      {" "}
                      <span className="time">11:38 pm</span>
                      <span className="tick">
                        <svg
                          style={{
                            position: "absolute",
                            transition: ".5s ease-in-out"
                          }}
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={15}
                          id="msg-dblcheck-ack"
                          x={2063}
                          y={2076}
                        >
                          <path
                            d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"
                            fill="#4fc3f7"
                          />
                        </svg>
                      </span>
                    </span>
                  </div>
                  <div className="messages received">
                    Sorry, I have no answer for that. If you say so I can search
                    for you. To search, <br /> type{" "}
                    <q>
                      <b> Search Your keyword </b>
                    </q>{" "}
                    for example type : <b>Search Sololearn</b>
                    <span className="metadata">
                      {" "}
                      <span className="time">11:38 pm</span>
                    </span>
                  </div>
                </span>{" "}
                <span id="ap">
                  <div className="messages sent">
                    victor
                    <span className="metadata">
                      {" "}
                      <span className="time">11:38 pm</span>
                      <span className="tick">
                        <svg
                          style={{
                            position: "absolute",
                            transition: ".5s ease-in-out"
                          }}
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={15}
                          id="msg-dblcheck-ack"
                          x={2063}
                          y={2076}
                        >
                          <path
                            d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"
                            fill="#4fc3f7"
                          />
                        </svg>
                      </span>
                    </span>
                  </div>
                  <div className="messages received">
                    Sorry, I have no answer for that. If you say so I can search
                    for you. To search, <br /> type{" "}
                    <q>
                      <b> Search Your keyword </b>
                    </q>{" "}
                    for example type : <b>Search Sololearn</b>
                    <span className="metadata">
                      {" "}
                      <span className="time">11:38 pm</span>
                    </span>
                  </div>



                  
                </span>{" "}
                <span id="ap">
                  <div className="messages sent">
                    victor
                    <span className="metadata">
                      {" "}
                      <span className="time">11:38 pm</span>
                      <span className="tick">
                        <svg
                          style={{
                            position: "absolute",
                            transition: ".5s ease-in-out"
                          }}
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={15}
                          id="msg-dblcheck-ack"
                          x={2063}
                          y={2076}
                        >
                          <path
                            d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"
                            fill="#4fc3f7"
                          />
                        </svg>
                      </span>
                    </span>
                  </div>
                  <div className="messages sent">
                    victor
                    <span className="metadata">
                      {" "}
                      <span className="time">11:38 pm</span>
                      <span className="tick">
                        <svg
                          style={{
                            position: "absolute",
                            transition: ".5s ease-in-out"
                          }}
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={15}
                          id="msg-dblcheck-ack"
                          x={2063}
                          y={2076}
                        >
                          <path
                            d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"
                            fill="#4fc3f7"
                          />
                        </svg>
                      </span>
                    </span>
                  </div>

                  <div className="messages received">
                    Sorry, I have no answer for that. If you say so I can search
                    for you. To search, <br /> type{" "}
                    <q>
                      <b> Search Your keyword </b>
                    </q>{" "}
                    for example type : <b>Search Sololearn</b>
                    <span className="metadata">
                      {" "}
                      <span className="time">11:38 pm</span>
                    </span>
                  </div>



                </span>
              </div>

              {messages.map((message, index) => (
        <div className={`message ${message.sender}`} key={index}>
          {message.text}
          <span className="metadata">
            <span className="time">{message.time}</span>
          </span>
        </div>
      ))}

            </div>
            <form
              id="form"
              className="conversation-compose"
              onsubmit="event.preventDefault();"
            >
              <div className="emoji"></div>
              <input
                id="val"
                className="input-msg"
                name="input"
                ref={inputRef}
                onBeforeInputCapture={handleInputFocus}
                placeholder="Type a message"
                autoComplete="off"
                autofocus=""
              />
              <div className="photo">
                <i className="zmdi zmdi-camera" />
              </div>
              <span id="speak" />
              <span className="send">
                <div className="circle">
                  <i id="msend" className="zmdi zmdi-mail-send" />
                </div>
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </Messagelayout>
  )
}

export default Messaging