import { PALETTE, URI } from "lib/constant";
import { Note } from "lib/types";
import Modal from "react-modal";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { FormEvent, useState } from "react";
import Notes from "lib/database";
import Palette from "components/Palette";
import { mutate } from "swr";
import cn from "classnames";
import type { Colors } from "lib/types";
import type { GetServerSideProps } from "next";

interface NoteProps {
  item: Note;
}

Modal.setAppElement("#__next");

const NOTE = ({ item }: NoteProps) => {
  const [data, setData] = useState(item);
  const { push } = useRouter();
  const { theme } = useTheme();

  const isDarkTheme = theme === "dark" ? true : false;

  const handleChange = (
    e: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.currentTarget;
    setData({ ...data, [name]: value });
  };

  const save = async () => {
    try {
      await Notes.update(item.id as string, data);
      mutate("/api/notes");
      push("/");
    } catch (error) {
      //
    }
  };

  return (
    <Modal
      isOpen={true}
      onRequestClose={save}
      style={{
        content: {
          backgroundColor: isDarkTheme ? "#202124" : "#fff",
        },
        overlay: {
          zIndex: 100,
          backgroundColor: isDarkTheme
            ? "rgba(0,0,0,0.7)"
            : "rgba(255,255,255,0.7)",
        },
      }}
    >
      <div
        className={cn(
          "flex flex-col justify-between h-full rounded-lg p-3",
          data.color && PALETTE[theme as "light" | "dark"][data.color as Colors]
        )}
      >
        <input
          name="title"
          type="text"
          value={data.title}
          onChange={handleChange}
          className="w-full p-2 text-xl font-medium text-shark dark:text-athens-gray placeholder-oslo-gray break-words"
        />

        <textarea
          name="content"
          value={data.content}
          className="w-full text-xl text-shark dark:text-athens-gray break-words p-2 h-[70%]"
          onChange={handleChange}
        />

        <div className="flex justify-between p-5 flex-wrap">
          <Palette state={data} setState={setData} />

          <button
            type="button"
            onClick={save}
            className="p-2 text-xl font-medium rounded hover:bg-alabaster dark:hover:bg-gray-chateau dark:hover:bg-opacity-10 dark:text-iron"
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as { id: string };
  const response = await fetch(URI + "/api/notes/" + id);
  const item = await response.json();

  return { props: { item } };
};

export default NOTE;
