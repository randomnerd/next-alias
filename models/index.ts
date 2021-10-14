import { forward, createEvent, createStore, createEffect, PageContext } from "effector-next";

export const pageLoaded = createEvent<PageContext>();
export const buttonClicked = createEvent();

const effect = createEffect({
  handler(name: string) {
    return Promise.resolve({ name });
  },
});

export const $data = createStore(null);

$data.on(effect.done, (_, { result }) => void result);

forward({
  from: pageLoaded.map(() => "nameFromPageLoaded"),
  to: effect,
});

forward({
  from: buttonClicked.map(() => "nameFromButtonClicked"),
  to: effect,
});
