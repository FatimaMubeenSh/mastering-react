import React, { useEffect, useState } from "react";
import Title from "./../components/Title";
import Button from "./../components/Button";
import { BsFilePostFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { FaComments } from "react-icons/fa6";

export default function TestimonialsApp() {
  const [testimonials, setTestimonials] = useState();
  const [items, setItems] = useState();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${testimonials}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [testimonials]);

  return (
    <div className="container m-auto">
      <Title text={"Testimonials App"} />
      <Title text={"Select an Option to Continue"} custom_class={"secondary-title mt-4 text-info"} />
      <hr />
      <div className="d-flex justify-content-between align-items-center">
        <Button text="Posts" btn_class={"btn-info"} icon={<BsFilePostFill />} onClick={() => setTestimonials("Posts")} />
        <Button text="Users" btn_class={"btn-info"} icon={<FaUsers />} onClick={() => setTestimonials("Users")} />
        <Button text="Comments" btn_class={"btn-info"} icon={<FaComments />} onClick={() => setTestimonials("Comments")} />
      </div>

      <div className="card p-0 mt-4">
        <div className="card-body">
          <h5 className="card-title">{!testimonials ? "No Option Selected" : testimonials}</h5>
          <p className="card-text">{!Array.isArray(items) ? "Nothing to Display. Please select an option from above to get the results." : `The fetched ${testimonials} are as below`}</p>
          {!Array.isArray(items)
            ? null
            : items.map((item) => {
                return (
                  <div>
                    {
                      {
                        Users: <p>{item.name}</p>,
                        Posts: <p>{`Post Id: ${item.id}, Post Title: ${item.title}`}</p>,
                        Comments: <p>{item.body}</p>,
                      }[testimonials]
                    }
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
}
