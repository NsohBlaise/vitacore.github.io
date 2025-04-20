const counterEl = document.querySelector('.affiliate');
let counterNumber = 0;
const updateCounter = setInterval(function() {
    counterNumber++;
    counterEl.textContent = counterNumber;

    if (counterNumber >= 2000) {
        clearInterval(updateCounter);
        counterEl.style.color = 'blue';
    }
},10)
document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const textInput = document.getElementById('textInput').value;
    const imageInput = document.getElementById('imageInput').files[0];
  
    const postsContainer = document.getElementById('postsContainer');
  
    const postElement = document.createElement('div');
    postElement.style.border = "1px solid #ddd";
    postElement.style.margin = "10px 0";
    postElement.style.padding = "10px";
    postElement.style.borderRadius = "8px";
  
    if (textInput) {
      const textParagraph = document.createElement('p');
      textParagraph.textContent = textInput;
      textParagraph.style.color = "#333";
      postElement.appendChild(textParagraph);
    }
  
    if (imageInput) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const imgElement = document.createElement('img');
        imgElement.src = e.target.result;
        imgElement.style.maxWidth = "100%";
        imgElement.style.borderRadius = "8px";
        postElement.appendChild(imgElement);
      };
      reader.readAsDataURL(imageInput);
    }
  
    postsContainer.appendChild(postElement);
    document.getElementById('postForm').reset();
  });
  