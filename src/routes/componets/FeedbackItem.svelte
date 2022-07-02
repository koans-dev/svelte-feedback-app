<script>
 
import Card from "../componets/Card.svelte";
import {createEventDispatcher} from 'svelte'

  // your script goes here
  export /**
   * @type {{ rating: any; text:any; id:any }}
   */
  let item;
  const dispatch = createEventDispatcher()
  const handleDelete =(/** @type {any} */ itemID) =>{
    dispatch('delete-feedback',itemID)
  }
</script>

<Card>
  <div class="num-dispaly">
    {item.rating}
  </div>

  <!-- svelte-ignore missing-declaration -->
  <button class="close" on:click={()=>handleDelete
    (item.id)
  }> X </button>
  <div class="text-dispaly">
    {item.text}
  </div>
</Card>

<style>
  .num-dispaly {
    position: absolute;
    top: -10px;
    left: -10px;
    width: 20px;
    height: 20px;
    background: #ff3e00;
    color: #fff;
    border: 1px #eee solid;
    border-radius: 50%;
    padding: 10px;
    text-align: center;
    font-size: 19px;
  }

  .close {
    position: absolute;
    font-size: 9px;
    top: 10px;
    right: 10px;
    cursor: pointer;
    background: none;
    border: 1px #ff3e00 solid;
  }
</style>
