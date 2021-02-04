<template>
  <div class="Faucet">
    <h1>Faucet</h1>  
    <h3>Request for Free TP Coin</h3> 
  
   <form v-on:submit.prevent="RequestForCoin()">      
      <p class="lead">Account To Send Coin To: </p>
      <textarea class="form-control" rows="1" cols="100" id="value" v-model="request.addressSendTo"></textarea>
      <br />
      <br />
      <button type="submit" class="btn btn-primary">Send Request</button>
      <br />
      <br />
      <textarea
          class="form-control"
          rows="5"
          cols="100"         
          id="requestresult"          
        ></textarea>     
    </form>
  </div>
</template>


<script>
export default {
  name: "AccountInformation",
  data() {
    return {
      request: {
        addressSendTo: ""          
      }
    };
  },

  methods: {    
    RequestForCoin() {
      console.log("Retrieving request information now..");
      const axios = require("axios").default;  
      var requestData = {
        from: "",
        to: this.request.addressSendTo,
        value: "",
        fee: "",
        dateCreated: ""
      };
   
      const formData = new FormData();
      formData.append("data", JSON.stringify(requestData));
      formData.append("senderPubKey", ""); 
      formData.append("transactionDataHash", ""); 
      formData.append("senderSignature",""); 

      axios
        .post("http://127.0.0.1:1234/faucet/request", formData, {})
        .then(function(response) {
          if(response.data["accepted"]==1){
              document.getElementById("requestresult").value = "Successful:"+response.data["message"];
          }
          else {
            document.getElementById("requestresult").value = "Error:"+response.data["message"];
          }
         })
     }
  }
}
</script>
