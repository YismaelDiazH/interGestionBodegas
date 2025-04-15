// src/components/ColorPicker.jsx
import React from "react";
import { useColor } from "../context/ColorContext";
import { indigo } from "../context/ColorContext";

const ColorPicker = () => {
  const { color, changeColor } = useColor();

  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn custom-bg m-1">
        Tema
        <svg
          width="12px"
          height="12px"
          className="inline-block h-2 w-2 fill-current opacity-60"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>

      <ul
        tabIndex={0}
        className="dropdown-content bg-base-300 rounded-box z-1 w-52 p-2 shadow-2xl"
      >
        <li>
          <label className="btn btn-sm btn-block btn-ghost justify-start gap-2 cursor-pointer">
            <input
              type="radio"
              name="theme-dropdown"
              value="green"
              checked={color === "green"}
              onChange={() => changeColor("green")}
              className="hidden"
            />
            <span
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: "#ec4899" }}
            ></span>
            Pink
          </label>
        </li>

        <li>
          <label className="btn btn-sm btn-block btn-ghost justify-start gap-2 cursor-pointer">
            <input
              type="radio"
              name="theme-dropdown"
              value="red"
              checked={color === "red"}
              onChange={() => changeColor("red")}
              className="hidden"
            />
            <span
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: "#06b6d4" }}
            ></span>
            Cyan
          </label>
        </li>

        <li>
          <label className="btn btn-sm btn-block btn-ghost justify-start gap-2 cursor-pointer">
            <input
              type="radio"
              name="theme-dropdown"
              value="purple"
              checked={color === "purple"}
              onChange={() => changeColor("purple")}
              className="hidden"
            />
            <span
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: "#22c55e" }}
            ></span>
            Green
          </label>
        </li>

        <li>
          <label className="btn btn-sm btn-block btn-ghost justify-start gap-2 cursor-pointer">
            <input
              type="radio"
              name="theme-dropdown"
              value="pink"
              checked={color === "pink"}
              onChange={() => changeColor("pink")}
              className="hidden"
            />
            <span
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: "#22c55e" }}
            ></span>
            Ligth Green
          </label>
        </li>

        <li>
          <label className="btn btn-sm btn-block btn-ghost justify-start gap-2 cursor-pointer">
            <input
              type="radio"
              name="theme-dropdown"
              value="yellow"
              checked={color === "yellow"}
              onChange={() => changeColor("yellow")}
              className="hidden"
            />
            <span
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: "#3b82f6" }}
            ></span>
            Blue
          </label>
        </li>

        <li>
          <label className="btn btn-sm btn-block btn-ghost justify-start gap-2 cursor-pointer">
            <input
              type="radio"
              name="theme-dropdown"
              value="teal"
              checked={color === "teal"}
              onChange={() => changeColor("teal")}
              className="hidden"
            />
            <span
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: "#ef4444" }}
            ></span>
            Red
          </label>
        </li>

        <li>
          <label className="btn btn-sm btn-block btn-ghost justify-start gap-2 cursor-pointer">
            <input
              type="radio"
              name="theme-dropdown"
              value="indigo"
              checked={color === "indigo"}
              onChange={() => changeColor("indigo")}
              className="hidden"
            />
            <span
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: "#22c55e" }}
            ></span>
            Verde2
          </label>
        </li>

        <li>
          <label className="btn btn-sm btn-block btn-ghost justify-start gap-2 cursor-pointer">
            <input
              type="radio"
              name="theme-dropdown"
              value="gray"
              checked={color === "gray"}
              onChange={() => changeColor("gray")}
              className="hidden"
            />
            <span
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: "#808080" }}
            ></span>
            Gray
          </label>
        </li>

        <li>
          <label className="btn btn-sm btn-block btn-ghost justify-start gap-2 cursor-pointer">
            <input
              type="radio"
              name="theme-dropdown"
              value="cyan"
              checked={color === "cyan"}
              onChange={() => changeColor("cyan")}
              className="hidden"
            />
            <span
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: "#f97316" }}
            ></span>
            Orange
          </label>
        </li>

        <li>
          <label className="btn btn-sm btn-block btn-ghost justify-start gap-2 cursor-pointer">
            <input
              type="radio"
              name="theme-dropdown"
              value="lime"
              checked={color === "lime"}
              onChange={() => changeColor("lime")}
              className="hidden"
            />
            <span
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: "#8b5cf6" }}
            ></span>
            Purple
          </label>
        </li>

        <li>
          <label className="btn btn-sm btn-block btn-ghost justify-start gap-2 cursor-pointer">
            <input
              type="radio"
              name="theme-dropdown"
              value="amber"
              checked={color === "amber"}
              onChange={() => changeColor("amber")}
              className="hidden"
            />
            <span
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: "#3b82f6" }}
            ></span>
            Blue2
          </label>
        </li>

        <li>
          <label className="btn btn-sm btn-block btn-ghost justify-start gap-2 cursor-pointer">
            <input
              type="radio"
              name="theme-dropdown"
              value="emerald"
              checked={color === "emerald"}
              onChange={() => changeColor("emerald")}
              className="hidden"
            />
            <span
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: "#ec4899" }}
            ></span>
            Pink2
          </label>
        </li>

        <li>
          <label className="btn btn-sm btn-block btn-ghost justify-start gap-2 cursor-pointer">
            <input
              type="radio"
              name="theme-dropdown"
              value="fuchsia"
              checked={color === "fuchsia"}
              onChange={() => changeColor("fuchsia")}
              className="hidden"
            />
            <span
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: "#22c55e" }}
            ></span>
            green3
          </label>
        </li>

        <li>
          <label className="btn btn-sm btn-block btn-ghost justify-start gap-2 cursor-pointer">
            <input
              type="radio"
              name="theme-dropdown"
              value="blue"
              checked={color === "blue"}
              onChange={() => changeColor("blue")}
              className="hidden"
            />
            <span
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: "#f59e0b" }}
            ></span>
            Brown
          </label>
        </li>

        <li>
          <label className="btn btn-sm btn-block btn-ghost justify-start gap-2 cursor-pointer">
            <input
              type="radio"
              name="theme-dropdown"
              value="#008080"
              checked={color === "#008080"}
              onChange={() => changeColor("#008080")}
              className="hidden"
            />
            <span
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: indigo }}
            ></span>
            Teal
          </label>
        </li>
      </ul>
    </div>
  );
};

export default ColorPicker;
