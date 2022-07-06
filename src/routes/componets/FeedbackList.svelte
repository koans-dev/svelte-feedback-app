<script>
    import {fade ,scale} from 'svelte/transition'
    import FeedbackItem from "../componets/FeedbackItem.svelte";
    export /**
* @type {any[]}
*/
     let feedback = [];
</script>

{#each feedback as item (item.id)}
   <div transition:fade>
    <FeedbackItem  item={item} on:delete-feedback/>
   </div>
 
   <!-- <p>{item.text}</p> -->
{/each}