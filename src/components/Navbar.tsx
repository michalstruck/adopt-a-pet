import React from "react";
import Expandable from "../common/Expandable/Menu";

const Navbar = (props: any) => {
  return (
    <div className="fixed w-full h-1/6 top-10 right-5">
      <div className="h-1/6 grid grid-cols-1 grid-rows-2 place-items-end">
        <Expandable
          onExpand={(v: boolean): void => {
            throw new Error("Function not implemented.");
          }}
        >
          <Expandable.Icon style="" />
          <Expandable.Body style="bg-red-200 opacity-70 text-right mt-28">
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
