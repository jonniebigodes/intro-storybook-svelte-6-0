import App from "./App.svelte";
import { render } from "@testing-library/svelte";

test("App", () => {
  const { getByText } = render(App, {
    props: {
      name: "World",
    },
  });
  //const { getByText } = render(Comp, { name: 'World' })

  expect(getByText("Hello World!")).toBeInTheDocument();
});
