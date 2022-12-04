import React, { ReactNode } from "react";
import Socials from "../Socials";
import SubNavigation from "../SubNavigation";

interface SubLayoutProps {
  title: string;
  children: ReactNode;
}

function SubLayout(props: SubLayoutProps) {
  return (
    <article className="container">
      <SubNavigation title={props.title} />
      {props.children}
      <Socials isFooter={true} />
    </article>
  );
}

export default SubLayout;
