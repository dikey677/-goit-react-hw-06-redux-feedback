import * as types from "./feedback-types";

export const IncrGood = (value) => ({
  type: types.GOOD,
  payload: value,
});

export const IncrNeutral = (value) => ({
  type: types.NEUTRAL,
  payload: value,
});

export const IncrBad = (value) => ({
  type: types.BAD,
  payload: value,
});
