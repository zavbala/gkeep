import { useState, useMemo } from "react";
import Button from "./Button";
import { PALETTE } from "lib/constant";
import Notes from "lib/database";
import { Note } from "lib/types";
import cn from "classnames";
import { useSWRConfig } from "swr";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import Link from "next/link";
import type { Colors } from "lib/types";

interface CardProps {
  note: Note;
  editable?: boolean;
}

const Card = ({ note, editable }: CardProps) => {
  const [toggle, setToggle] = useState(false);
  const { mutate } = useSWRConfig();
  const { theme } = useTheme();
  const { push } = useRouter();

  const { id, pinned, content, title, color, status, archived } = note;

  const BUTTONS = [
    {
      title: "Archive",
      icon: archived ? "unarchive" : "archive",
      onClick: async () => {
        try {
          await Notes.update(id as string, { ...note, archived: !archived });
          mutate("/api/notes");
        } catch (error) {
          //
        }
      },
    },
    {
      title: "Delete",
      icon: "delete",
      onClick: async () => {
        try {
          await Notes.update(id as string, { ...note, status: !status });
          mutate("/api/notes");
        } catch (error) {
          //
        }
      },
    },
  ];

  const TRASH_BUTTONS = [
    {
      title: "Delete Forever",
      icon: "delete_forever",
      onClick: async () => {
        try {
          await Notes.delete(id as string);
          mutate("/api/notes");
        } catch (error) {
          //
        }
      },
    },
    {
      title: "Restore",
      icon: "restore_from_trash",
      onClick: async () => {
        try {
          await Notes.update(id as string, { ...note, status: !status });
          mutate("/api/notes");
        } catch (error) {
          //
        }
      },
    },
  ];

  return (
    <Link href={`/NOTE/${id}`} passHref>
      <div
        className={cn(
          "col-span-1 rounded-lg hover:shadow-md p-3 relative flex flex-col justify-between",
          color && PALETTE[theme as "light" | "dark"][color as Colors],
          !color && " border dark:border-shuttle-gray"
        )}
        onMouseOver={() => setToggle(true)}
        onMouseOut={() => setToggle(false)}
      >
        <div
          className={cn(
            "absolute right-1.5 top-1.5 transition-all duration-300 opacity-0",
            toggle && "opacity-100"
          )}
        >
          <Button
            title={`${pinned ? "Unpin" : "Pin"} Note`}
            onClick={async () => {
              await Notes.update(id as string, { ...note, pinned: !pinned });
              mutate("/api/notes");
            }}
            filled={pinned}
            icon="push_pin"
          />
        </div>

        {title && (
          <h1 className="font-medium text-shark dark:text-athens-gray break-words w-3/4 mb-2">
            {title}
          </h1>
        )}

        {content && (
          <p className="text-sm text-shark dark:text-athens-gray break-words">
            {content.length <= 80 ? content : content.slice(0, 77) + "..."}
          </p>
        )}

        <div
          className={cn(
            "flex items-center justify-between opacity-0 transition-all duration-300",
            toggle && "opacity-100"
          )}
        >
          {note.status
            ? BUTTONS.map((button, index) => (
                <Button key={index} {...button} size="md" />
              ))
            : TRASH_BUTTONS.map((button, index) => (
                <Button key={index} {...button} size="md" />
              ))}
        </div>
      </div>
    </Link>
  );
};

export default Card;
