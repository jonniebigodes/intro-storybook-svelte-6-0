import PureTaskList from './PureTaskList.svelte';
import { render } from "@testing-library/svelte";
import { WithPinnedTasks } from "./PureTaskList.stories";

test("PureTaskList", () => {
  const { container } = render(PureTaskList, {
    props: WithPinnedTasks.args,
  });
  expect(
    container.firstChild.children[0].classList.contains("TASK_PINNED")
  ).toBe(true);
});
