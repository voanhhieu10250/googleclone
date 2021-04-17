import CPHeaderOption from "./CPHeaderOption";
import {
  DotsVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
} from "@heroicons/react/outline";

function CPHeaderOptions() {
  return (
    <div
      className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base
    lg:justify-start lg:space-x-36 lg:pl-52 border-b"
    >
      {/* Left */}

      <div className="flex space-x-6">
        <CPHeaderOption Icon={SearchIcon} title="All" selected />
        <CPHeaderOption Icon={PhotographIcon} title="Images" />
        <CPHeaderOption Icon={PlayIcon} title="Videos" />
        <CPHeaderOption Icon={NewspaperIcon} title="News" />
        <CPHeaderOption Icon={MapIcon} title="Maps" />
        <CPHeaderOption Icon={DotsVerticalIcon} title="More" />
      </div>

      {/* Right */}
      <div className="flex space-x-4">
        <p className="link">Settings</p>
        <p className="link">Tools</p>
      </div>
    </div>
  );
}

export default CPHeaderOptions;
