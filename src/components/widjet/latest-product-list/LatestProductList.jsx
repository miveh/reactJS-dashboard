import React from "react";
import { CaptionList } from "../..";

export function LatestProductList() {
  //api call latest product list
  return (
    <CaptionList
      actionName="View all"
      action={() => alert("zahra")}
      caption="Latest Products"
      listItems={[
        {
          id: 1,
          title: "DropBox",
          subtitle: "Updated 2 hours ago",
          avatar: "",
        },
        {
          id: 2,
          title: "Slack",
          subtitle: "Updated 2 hours ago",
          avatar: "",
        },
        {
          id: 3,
          title: "Github",
          subtitle: "Updated 2 hours ago",
          avatar: "",
        },
        {
          id: 4,
          title: "DropBox",
          subtitle: "Updated 2 hours ago",
          avatar: "",
        },
        {
          id: 5,
          title: "zahra",
          subtitle: "Updated 2 hours ago",
          avatar: "",
        },
      ]}
    ></CaptionList>
  );
}
