  function GetValue() {
    var myarray = new Array("I'm a social vegan... I'm avoiding meets.", "To the guy who invented 0. Thanks for nothing.", "I accidentally sprayed deodorant in my mouth. Now when I talk, I have this weird axe scent.", "When I moved into my igloo, my friends threw me a house warming party. Now I’m homeless.", "My girlfriend borrowed $100 from me. After 3 years, when we separated, she returned exactly $100. I lost Interest in that relationship.", "My grandma is 80% Irish. People call her Iris.", "Not sure if my sister knows any geography. But Alaska.", "I went to the local video shop and asked if I could borrow Batman Forever. They said no, you’ll have to bring it back tomorrow.", "People call me self centred. But that’s enough about them.");
    var random = myarray[Math.floor(Math.random() * myarray.length)];
    //alert(random);
    document.getElementById("message").innerHTML = random;
    var img = document.createElement("img");
    img.src="https://media.makeameme.org/created/hahahaha-hahahah-a30a2e0f9e.jpg";
    var src = document.getElementById("x");
    src.appendChild(img);
  }
