<script>
    import {createEventDispatcher} from 'svelte'
    // your script goes here
    let selected = 5 
    
     const dispatch  =createEventDispatcher()

    const onChange =(/** @type {{ currentTarget: { value: any; }; }} */ e)=>{
       selected = (e.currentTarget.value)
       dispatch('rating-select', selected)
    }
</script>

<ul class="rating">
    <li>
        <input type="radio" id="num1" name="rating" value="1" on:change={onChange} checked={selected===1}
        />
        <label for="num1">1</label>    
    </li>
    <li>
        <input type="radio" id="num2" name="rating" value="2" on:change={onChange} checked={selected===2}
        />
        <label for="num2">2</label>    
    </li>
    <li>
        <input type="radio" id="num3" name="rating" value="3" on:change={onChange} checked={selected===3}
        />
        <label for="num2">3</label>    
    </li>
    <li>
        <input type="radio" id="num4" name="rating" value="4" on:change={onChange} checked={selected===4}
        />
        <label for="num4">4</label>    
    </li>
    <li>
        <input type="radio" id="num5" name="rating" value="5" on:change={onChange} checked={selected===5}
        />
        <label for="num5">5</label>    
    </li>


</ul>

<style>
    .rating {
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin: 30px 0;

        
    }
    .rating li {
        position: relative;
        list-style-type: none;
        background: #f4f4f4;
        width: 20px;
        height: 20px;
       
        text-align: center;
        border-radius: 50%;
        font-size: 20px;
        border: 1px #eee solid;
        transition: 0.3s;
    }

    .rating li label {
        position: absolute;
        margin-top: -12px;
        left: 50%;
        width:25px;
        height: 25px;
   
        border-radius: 50%;
        transform: translate(-50%,-50%);
        cursor: pointer;
    }
    .rating li:hover {
        background: #ff4000c6 ;
        color: #fff;
    }
    [type="radio"]{
        opacity: 0;
    }
    [type="radio"]:checked ~ label {
        background: #ff3e00 ;
        color: #fff;
    }
</style>