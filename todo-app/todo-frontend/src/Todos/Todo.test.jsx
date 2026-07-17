// @vitest-environment jsdom

import { test } from "vitest";
import { render, screen } from "@testing-library/react";

import Todo from "./Todo";

test("renders the todo text", () => {
  const todo = {
    _id: "1",
    text: "Learn about containers",
    done: false,
  };

  render(<Todo todo={todo} deleteTodo={() => {}} completeTodo={() => {}} />);

  screen.getByText(todo.text);
});
