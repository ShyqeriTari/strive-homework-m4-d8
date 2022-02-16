import { Dropdown, DropdownButton, Image } from "react-bootstrap";
const SecondNavbar = function () {
  return (
    <div className="d-flex justify-content-between align-items-center pr-3 pl-4">
      <div className="d-flex align-items-center">
        <h2 className="toWhite text-white">TV SHOWS</h2>
        <DropdownButton
          id="dropdown-basic-button"
          title="Genres"
          variant="outline-light"
          className="ml-2 borderNone"
        >
          <Dropdown.Item href="#/action-1">Documentary</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Manga</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Comedy</Dropdown.Item>
          <Dropdown.Item href="#/action-4">Action</Dropdown.Item>
        </DropdownButton>
      </div>
      <Image
        id="iconsRight"
        src="../assets/media/icons.png"
        alt="icons"
        height={30}
      />
    </div>
  );
};
export default SecondNavbar;
