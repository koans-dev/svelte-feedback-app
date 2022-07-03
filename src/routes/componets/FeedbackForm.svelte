<script>
    import Card from "./Card.svelte";
    import Button from "./Button.svelte"
    
    let text =''
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
   
</script>

<Card>
    <header>
        <h2>How would you rate your service with us ?</h2>
    </header>
    <form>
        <!-- Rating Select  -->
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
   

</style>