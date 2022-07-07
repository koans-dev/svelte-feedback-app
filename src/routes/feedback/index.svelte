<script>
  // your script goes here
  import FeedbackForm from "../componets/FeedbackForm.svelte";
  import FeedbackList from "../componets/FeedbackList.svelte";
  import FeedbackStatus from "../componets/FeedbackStatus.svelte";
 

   

   // Removed because of using store

  // const addFeedback = (/** @type {{ detail: any; }} */ e) =>{
  //      const newFeedback =e.detail
  //      feedback = [newFeedback,...feedback]
  //      console.log(e.detail)
  // }

  // const deleteFeedback = (/** @type {{ detail: any; }} */ e)=>{
  //    const itemID = e.detail
     
  //    feedback =feedback.filter((item)=>item.id !=itemID)
  // }
</script>
<main class="container">
  <FeedbackStatus />  
  <FeedbackForm   />
<FeedbackList   />
</main>