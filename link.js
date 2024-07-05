var tablinks=document.getElementsByClassName("linking");

var tabcontents = document.getElementsByClassName("contents");
function showTab(tabname) {
    for (link of tablinks) {
        link.classList.remove("active-link");
    }
    for (content of tabcontents) {
        content.classList.remove("active-content");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-content");
}

document.addEventListener("DOMContentLoaded", () => {
    var textElement = document.getElementById('my_desc');
    const text = textElement.innerText;
    textElement.innerHTML = '';
    text.split(' ').forEach((word, index) => {
      const span = document.createElement('span');
      span.innerText = word;
      span.style.animationDelay = `${index * 0.1}s`;
      span.classList.add('fade-in');
        textElement.appendChild(span);
        textElement.appendChild(document.createTextNode(' '));
    });
});
  
const scriptURL = 'https://script.google.com/macros/s/AKfycbwaNTFt_LrvtTCG92ErZweYFuAhHbDO3gPb3BQNgPmjCWkUYQOwkK_oYhlbsewXU31B/exec'
const form = document.forms['submit-to-google-sheet']
const message = document.getElementById("msg")
const input1 = document.getElementById("inp1");
const textar = document.getElementById("txt");
  form.addEventListener('submit', e => {
      e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            message.innerHTML = "Message sent successfully";
            
            form.addEventListener('input', e => {
                message.innerHTML = "";
            })
            form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })
