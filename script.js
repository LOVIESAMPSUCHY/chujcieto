* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: Arial, sans-serif;
    background-color: #333;
    color: #f5f5f5;
  }
  
  .header {
    text-align: center;
    padding: 2em;
    background-color: #444;
  }
  
  header h1 {
    font-size: 2em;
    color: #ffc107;
  }
  
  header p {
    font-size: 1.2em;
    color: #e0e0e0;
  }
  
  .crystals, .why-us, .contact {
    padding: 2em;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .crystals h2, .why-us h2, .contact h2 {
    color: #ffc107;
    margin-bottom: 1em;
  }
  
  .grid {
    display: flex;
    gap: 1em;
    flex-wrap: wrap;
  }
  
  .item {
    background-color: #444;
    padding: 1em;
    border-radius: 5px;
    text-align: center;
    flex: 1 1 45%;
  }
  
  .item img {
    max-width: 100%;
    border-radius: 5px;
  }
  
  .item h3 {
    color: #ffc107;
    margin: 0.5em 0;
  }
  
  .contact form {
    display: flex;
    flex-direction: column;
  }
  
  .contact label {
    margin-top: 0.5em;
  }
  
  .contact input, .contact textarea {
    margin-top: 0.3em;
    padding: 0.5em;
    background-color: #555;
    color: #f5f5f5;
    border: 1px solid #666;
    border-radius: 5px;
  }
  
  .contact button {
    margin-top: 1em;
    padding: 0.7em;
    background-color: #ffc107;
    color: #333;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .contact button:hover {
    background-color: #e0a800;
  }
  document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Dziękujemy za wiadomość! Skontaktujemy się wkrótce.");
  });
  