import { useState, FormEvent } from "react";
import Button from "./Button";
import Notes from "lib/database";
import { useSWRConfig } from "swr";
import { useTheme } from "next-themes";
import { Colors } from "lib/types";
import cn from "classnames";
import Palette from "components/Palette";
import { PALETTE } from "lib/constant";

const initialValues = {
  title: "",
  content: "",
  color: "",
  pinned: false,
  status: true,
  archived: false,
};

const Command = () => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState(initialValues);
  const { theme } = useTheme();
  const { mutate } = useSWRConfig();

  const handleChange = (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.currentTarget;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (data.title || data.content) {
      try {
        await Notes.create(data);
        setToggle(false);
        setData(initialValues);
        mutate("/api/notes");
      } catch (error) {
        //
      }
    }

    setToggle(false);
  };

  return (
    <div
      className={cn(
        "w-1/2 sm:w-full mx-auto my-10 rounded-lg shadow-md",
        data.color
          ? PALETTE[theme as "light" | "dark"][data.color as Colors]
          : "bg-white dark:bg-shark",
        (data.color === "default" || !data.color) &&
          "dark:border dark:border-shuttle-gray"
      )}
    >
      <form
        noValidate
        onFocus={() => setToggle(true)}
        autoComplete="off"
        onSubmit={handleSubmit}
        className="p-2"
      >
        {toggle && (
          <div className="flex items-center">
            <input
              value={data.title}
              name="title"
              onChange={handleChange}
              type="text"
              placeholder="Title"
              className="w-full p-2 font-medium text-shark dark:text-athens-gray placeholder-oslo-gray break-words"
            />
            <Button
              onClick={() => setData({ ...data, pinned: !data.pinned })}
              filled={data.pinned}
              icon="push_pin"
            />
          </div>
        )}

        <textarea
          className="p-2 w-full text-shark dark:text-athens-gray text-sm placeholder:text-shark dark:placeholder:text-athens-gray"
          value={data.content}
          name="content"
          placeholder="Take a note..."
          onChange={handleChange}
        />

        {toggle && (
          <div className="flex items-center justify-between ">
            <Palette state={data} setState={setData} />

            <button
              type="submit"
              className="p-2 text-sm font-medium rounded hover:bg-alabaster dark:hover:bg-gray-chateau dark:hover:bg-opacity-10 dark:text-iron"
            >
              Close
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Command;
