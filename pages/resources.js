import React from "react";
import AccordionItem from "../components/AccordionItem/";
import Resource from "../components/Resource/";
import { Accordion } from "react-bootstrap";

import resourceData from "../data/resources.json";

const resources = () => {
  return (
    <>
      <Accordion lg={10} className="max-auto" id="resources">
        {resourceData.map((category) => {
          let content = category.content;
          return (
            <AccordionItem {...category}>
              {content.map((resource) => {
                return <Resource {...resource}></Resource>;
              })}
            </AccordionItem>
          );
        })}
      </Accordion>
    </>
  );
};

export default resources;
