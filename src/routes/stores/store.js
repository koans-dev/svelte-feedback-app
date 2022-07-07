import { writable } from "svelte/store";

export const FeedbackStore = writable ([
    {
        id: 1,
        rating: 0,
        text: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro dolor minus, repellat distinctio eligendi temporibus libero molestias! Quis rem illo vero autem, aliquam maiores iusto, optio aperiam aliquid vel nisi. ",
      },
      {
        id: 2,
        rating: 5,
        text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
      },
      {
        id: 3,
        rating: 2,
        text: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro dolor minus, repellat distinctio eligendi temporibus libero molestias! Quis rem illo vero autem, aliquam maiores iusto, optio aperiam aliquid vel nisi. ",
      },   
])