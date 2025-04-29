import React, { useState } from 'react';

function Notification() {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Your appointment is confirmed.', seen: false },
    { id: 2, text: 'Your test results are ready.', seen: true },
    { id: 3, text: 'Your prescription has been updated.', seen: false },
    { id: 4, text: 'Your video consultation is scheduled.', seen: true },
    { id: 5, text: 'Your payment has been processed.', seen: false },
    { id: 6, text: 'Your doctor has sent you a message.', seen: true },
    { id: 7, text: 'Your health report is available for download.', seen: false },
    { id: 8, text: 'Your follow-up appointment is scheduled.', seen: true },
    { id: 9, text: 'Your insurance claim has been approved.', seen: false },
    { id: 10, text: 'Your lab test has been completed.', seen: true },
    { id: 11, text: 'Your prescription refill is ready for pickup.', seen: false },
    { id: 12, text: 'Your doctor has updated your treatment plan.', seen: true },
    { id: 13, text: 'Your next appointment is due soon.', seen: false },
    { id: 14, text: 'Your health insurance policy has been renewed.', seen: true },
    { id: 15, text: 'Your lab test results are now available.', seen: false },
  ]);

  const markAsSeen = (id) => {
    setMessages((prevMessages) =>
      prevMessages.map((message) =>
        message.id === id ? { ...message, seen: true } : message
      )
    );
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Notifications</h2>
      <div className="row">
        <div className="col-md-6">
          <h4 className="text-primary">Unread Messages</h4> {/* Added topic above unread messages */}
          <ul className="list-group shadow">
            {messages.filter((message) => !message.seen).length > 0 ? (
              messages
                .filter((message) => !message.seen)
                .map((message) => (
                  <li
                    key={message.id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    {message.text}
                    <button
                      className="btn btn-sm btn-success"
                      onClick={() => markAsSeen(message.id)}
                    >
                      Mark as Seen
                    </button>
                  </li>
                ))
            ) : (
              <li className="list-group-item">No unread messages.</li>
            )}
          </ul>
        </div>
        <div className="col-md-6">
          <h4 className="text-secondary">Seen Messages</h4>
          <ul className="list-group shadow">
            {messages.filter((message) => message.seen).length > 0 ? (
              messages
                .filter((message) => message.seen)
                .map((message) => (
                  <li key={message.id} className="list-group-item">
                    {message.text}
                  </li>
                ))
            ) : (
              <li className="list-group-item">No seen messages.</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Notification;
