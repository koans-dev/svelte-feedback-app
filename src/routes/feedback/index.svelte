<script>
  // your script goes here
  import FeedbackList from "../componets/FeedbackList.svelte";

  let feedback = [
    {
      id: 1,
      rating: 4,
      text: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro dolor minus, repellat distinctio eligendi temporibus libero molestias! Quis rem illo vero autem, aliquam maiores iusto, optio aperiam aliquid vel nisi. ",
    },
    {
      id: 2,
      rating: 5,
      text: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro dolor minus, repellat distinctio eligendi temporibus libero molestias! Quis rem illo vero autem, aliquam maiores iusto, optio aperiam aliquid vel nisi. ",
    },
    {
      id: 3,
      rating: 2,
      text: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro dolor minus, repellat distinctio eligendi temporibus libero molestias! Quis rem illo vero autem, aliquam maiores iusto, optio aperiam aliquid vel nisi. ",
    },
  ];

  const deleteFeedback = (/** @type {{ detail: any; }} */ e)=>{
     const itemID = e.detail
     
     feedback =feedback.filter((item)=>item.id !=itemID)
  }
</script>
<main class="container">   
<FeedbackList {feedback} on:delete-feedback={deleteFeedback} />
</main>