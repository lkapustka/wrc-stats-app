import { set } from "@vue/composition-api";

export const TimeOfDay = {
  Dawn: "Dawn",
  Midday: "Midday",
  Evening: "Evening",
  Night: "Night",
};

export const Status = {
    Active: "Active",
    Discared: "Discarded",
    Accepted: "Accepted",
    Completed: "Completed",
};

export default function useDrawRally(store) {
  const getRandom = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
  }

  const getRandomTimeOfDay = () => {
    const keys = Object.keys(TimeOfDay);
    const index = getRandom(0, keys.length - 1);
    return TimeOfDay[ keys[index] ];
  }

  const getRandomRally = (store) => {
    const id = getRandom(1, store.getters.ralliesCount);
    return store.getters.getRally(id);
  }

  const createRally = (store) => {
    const rally = getRandomRally(store);
    set(rally, "time", getRandomTimeOfDay());
    set(rally, "date", new Date().toLocaleString("en-GB"));
    set(rally, "status", Status.Active);
    return rally;
  }

  const rally = createRally(store);

  return {
      rally
  };
}
