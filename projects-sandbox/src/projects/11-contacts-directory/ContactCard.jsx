import React from "react";

export default function ContactCard({ contact, body_color = "bg-light", head_color = "bg-danger" }) {
  return (
    <div className={`card ${body_color} p-0`} style={{ minWidth: "16rem" }}>
      <div className={`card-header ${head_color} text-white`}>{contact.first_name}</div>
      <div className="card-body">
        <div className="">
          <span className="fw-bold me-2">Name:</span>
          {contact.last_name}
        </div>
        <div className="mt-1">
          <span className="fw-bold me-2">Email:</span>
          {contact.email}
        </div>
        <div className="mt-1">
          <span className="fw-bold me-2">Phone:</span>
          {contact.phone}
        </div>
        <div className="mt-1">
          <span className="fw-bold me-2">User Name:</span>
          {contact.user_name}
        </div>
      </div>
    </div>
  );
}
