// import React from "react";

const WebsiteOptionsWidget = (props: any) => {
  const { actionProvider } = props;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <button onClick={() => actionProvider.handleOption1()}>
        Static Website
      </button>
      <button onClick={() => actionProvider.handleOption2()}>
        Dynamic Website
      </button>
      <button onClick={() => actionProvider.handleOption3?.()}>
        E-commerce Website
      </button>
      <button onClick={() => actionProvider.handleOption4?.()}>
        Portfolio Website
      </button>
    </div>
  );
};

export default WebsiteOptionsWidget;
