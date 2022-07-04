<script>
    import {v4 as uuidv4} from 'uuid'
    import Card from "./Card.svelte";
    import Button from "./Button.svelte"
    import RatingSelect from "./RatingSelect.svelte"
    
    let text =''
    let rating = 5
    let btnDisabled =true
    let min  = 10 
    /**
* @type {string | null}
*/
    let message 

    const handleInput =()=>{
        if(text.trim().length <= min){
            message = `Text must be at least ${min} characters`
            btnDisabled =true
        } else {
            message =null
            btnDisabled = false
        }
    }

    const handleSelect = (/** @type {{ detail: number; }} */ e)=>{
         rating = e.detail
    }

    const handleSubmit =()=>{
        if(text.trim().length >min){
            const newFeedback = {
                id: uuidv4(),
                text,
                rating : + rating
            }
            console.log(newFeedback)
        }
        
    }
</script>

<Card>
    <header>
        <h2>How would you rate your service with us ?</h2>
    </header>
    <form on:submit|preventDefault={handleSubmit}>
       <RatingSelect on:rating-select={handleSelect}/>
        <div class="input-group">
            <input type="text"  on:input={handleInput} bind:value ={text} placeholder="Tell us something that keeps you coming back">
            <!-- svelte-ignore missing-declaration -->
            <Button disabled={btnDisabled} type="submit" >
                Send
            </Button>
        </div> 
        {#if message}
             <!-- content here -->
             <div class="message">
                 {message}
             </div>
        {/if}
    </form>
</Card>


<style>
   .input-group {
    display: flex;
    flex-direction: row;
    border: 1px solid #ccc;
    padding: 8px 10px;
    border-radius: 8px;
    margin-top: 15px;
  }
  input {
    flex-grow: 2;
    border: none;
    font-size: 16px;
  }
  input:focus {
    outline: none;
  }


</style>