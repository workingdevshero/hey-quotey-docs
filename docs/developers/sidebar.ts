import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "developers/generating-api-keys",
    },
    {
      type: "category",
      label: "Echo",
      items: [
        {
          type: "doc",
          id: "developers/echo",
          label: "Echo test",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "User",
      items: [
        {
          type: "doc",
          id: "developers/get-user-by-name",
          label: "Get user by user name",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "developers/update-user",
          label: "Updated user",
          className: "api-method put",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
