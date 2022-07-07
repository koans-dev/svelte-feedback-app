<script>
 
    import { FeedbackStore } from '../stores/store'; 
    import {fade ,scale} from 'svelte/transition'
    import FeedbackItem from "../componets/FeedbackItem.svelte";
 
//     export /**
// * @type {any[]}
// */
//      let feedback = [];

//       FeedbackStore.subscribe((data)=> feedback = data) 
      
      

</script>

{#each $FeedbackStore as item (item.id)}
   <div transition:fade>
    <FeedbackItem  item={item} />
   </div>
 
   <!-- <p>{item.text}</p> -->
{/each}