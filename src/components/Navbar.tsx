import React from "react";
import Expandable from "../common/Expandable/Menu";

const Navbar = (props: any) => {
  return (
    <div className="fixed w-full  top-0 right-0">
      <div className="float-right">
        <Expandable
          onExpand={(v: boolean): void => {
            throw new Error("Function not implemented.");
          }}
        >
          <Expandable.Icon style="" />
          <Expandable.Body style="bg-red-200 opacity-70 text-right">
            <p>
              Want to adopt a pet? Try on
              <a className="underline" href="https://www.petfinder.com/">
                {" "}
                petfinder
              </a>
            </p>
          </Expandable.Body>
        </Expandable>
      </div>
    </div>
  );
};

export default Navbar;
