import React, { useState } from 'react';

function Notification() {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Your appointment is confirmed.', seen: false, timestamp: '2023-10-01 10:30 AM' },
    { id: 2, text: 'Your test results are ready.', seen: true, timestamp: '2023-09-30 02:15 PM' },
    { id: 3, text: 'Your prescription has been updated.', seen: false, timestamp: '2023-10-01 09:00 AM' },
    { id: 4, text: 'Your video consultation is scheduled.', seen: true, timestamp: '2023-09-29 11:45 AM' },
    { id: 5, text: 'Your payment has been processed.', seen: false, timestamp: '2023-10-01 08:20 AM' },
    { id: 6, text: 'Your doctor has sent you a message.', seen: true, timestamp: '2023-09-28 03:10 PM' },
    { id: 7, text: 'Your health report is available for download.', seen: false, timestamp: '2023-10-01 07:45 AM' },
    { id: 8, text: 'Your follow-up appointment is scheduled.', seen: true, timestamp: '2023-09-27 01:30 PM' },
    { id: 9, text: 'Your insurance claim has been approved.', seen: false, timestamp: '2023-10-01 06:50 AM' },
    { id: 10, text: 'Your lab test has been completed.', seen: true, timestamp: '2023-09-26 10:00 AM' },
    { id: 11, text: 'Your prescription refill is ready for pickup.', seen: false, timestamp: '2023-10-01 05:30 AM' },
    { id: 12, text: 'Your doctor has updated your treatment plan.', seen: true, timestamp: '2023-09-25 04:20 PM' },
    { id: 13, text: 'Your next appointment is due soon.', seen: false, timestamp: '2023-10-01 04:00 AM' },
    { id: 14, text: 'Your health insurance policy has been renewed.', seen: true, timestamp: '2023-09-24 02:00 PM' },
    { id: 15, text: 'Your lab test results are now available.', seen: false, timestamp: '2023-10-01 03:30 AM' },
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
          <h4 className="text-primary">Unread Messages</h4>
          <ul className="list-group shadow">
            {messages.filter((message) => !message.seen).length > 0 ? (
              messages
                .filter((message) => !message.seen)
                .map((message) => (
                  <li
                    key={message.id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <p className="mb-1">{message.text}</p>
                      <small className="text-muted">{message.timestamp}</small>
                    </div>
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
                    <p className="mb-1">{message.text}</p>
                    <small className="text-muted">{message.timestamp}</small>
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
