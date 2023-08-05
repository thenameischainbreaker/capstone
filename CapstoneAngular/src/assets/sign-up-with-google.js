function signUpWithGoogle(response) {
     // var id_token = response.credential;
     const id_token = response.credential; 
     // Get the element by its ID
     const signUpSuccessElement = document.getElementById("signUpSuccess");  
     console.log("ID Token: " + id_token);
    
        // You can now send the ID token to your server
        // ...
     
      function setCookie(name, value, days) {
          const expires = new Date();
          expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
          document.cookie = name + '=' + encodeURIComponent(value) + ';expires=' + expires.toUTCString() + ';path=/';
        }
        

  // Make the fetch POST request
  fetch('http://localhost:8080/user/createUser', {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain'
    },
    body: id_token
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); 
  })
  .then(data => {
    // Handle the response from the server here
    console.log('Response from server:', data);
    // You can perform further actions based on the response if needed
  
    signUpSuccessElement.innerHTML = data.message;
    setCookie('capstoneGoogleBearerToken', id_token,1);
    setCookie('userMetaData', data,1);
})
  .catch(error => {
    console.error('Error:', error);
    // Handle any error that occurred during the fetch call
  alert(error);
});

      }