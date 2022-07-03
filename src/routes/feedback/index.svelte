<script>
  // your script goes here
  import FeedbackForm from "../componets/FeedbackForm.svelte";
  import FeedbackList from "../componets/FeedbackList.svelte";
  import FeedbackStatus from "../componets/FeedbackStatus.svelte";
 

  let feedback = [
    {
      id: 1,
      rating: 4,
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
  ];

  $: count =feedback.length
  $: average = feedback.reduce((a,{rating})=>a+rating,0) / feedback.length

  const deleteFeedback = (/** @type {{ detail: any; }} */ e)=>{
     const itemID = e.detail
     
     feedback =feedback.filter((item)=>item.id !=itemID)
  }
</script>
<main class="container">
  <FeedbackStatus  {count} {average} />  
  <FeedbackForm />
<FeedbackList {feedback} on:delete-feedback={deleteFeedback} />
</main>