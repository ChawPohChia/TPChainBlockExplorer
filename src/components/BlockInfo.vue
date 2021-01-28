<template>
  <div class="blockinfo">  
     <h1>Block Information</h1>  
     <div class="form-group">
        <h4>All Blocks</h4> 
        <textarea
          class="form-control"
          rows="15"
          cols="100"
          id="AllBlocks">
        </textarea>        
    </div>
  </div>
</template>

<script>
export default {
  name: "ForBlockInfo",
  methods: {   
    retrieveAllBlocks() {
      console.log("Requesting for all blocks information...");
      const axios = require("axios").default;
      axios
        .get("http://127.0.0.1:1234/block/all")
        .then(function(response) {                
           document.getElementById("AllBlocks").value = JSON.stringify(response.data);          
        });   
    },
  },

  beforeMount(){
    this.retrieveAllBlocks();  
 },
};
</script>
