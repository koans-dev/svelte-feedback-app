<script>
    // your script goes here
    import FeedbackItem from "../componets/FeedbackItem.svelte";
    export /**
* @type {any[]}
*/
     let feedback = [];
</script>

{#each feedback as item (item.id)}
   <FeedbackItem  item={item} on:delete-feedback/>
   <!-- <p>{item.text}</p> -->
{/each}