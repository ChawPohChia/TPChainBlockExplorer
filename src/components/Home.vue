<template>
  <div class="home">
    <img alt="tplogo" src="../assets/tplogo.png">   
     <h1>Latest Block and Transactions</h1>  
     <div class="form-group">
        <h4>Latest Block</h4> 
        <textarea
          class="form-control"
          rows="15"
          cols="100"
          id="latestBlock">
        </textarea>
        <h4>Transaction in the Latest Block</h4> 
        <textarea
          class="form-control"
          rows="15"
          cols="100"
          id="latestBlockTransactions">
        </textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: "ForHomeVue",
  data() {
    return {
      form: {
        from: null, // from opened wallet    
      },
      content: null
    };
  },

  methods: {   
    retrieveLatestBlock() {
      console.log("Requesting for latest block...");
      const axios = require("axios").default;
      axios
        .get("http://127.0.0.1:1234/block/latest")
        .then(function(response) {                
           document.getElementById("latestBlock").value = JSON.stringify(response.data);          
        });   
    },

    
     retrieveLatestBlockTxs() {
      console.log("Requesting for latest block transactions..");
      const axios = require("axios").default;
      axios
        .get("http://127.0.0.1:1234/block/latestBlockTransaction")
        .then(function(response) {                
           document.getElementById("latestBlockTransactions").value = JSON.stringify(response.data);          
        });   
    },

  },

  beforeMount(){
    this.retrieveLatestBlock();  
    this.retrieveLatestBlockTxs();
 },
};
</script>