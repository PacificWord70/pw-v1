document.querySelector('#cs180').addEventListener('click', cs180)

function cs180()
{
    const item = this.parentElement.querySelector('#cs180')
    if(item.innerHTML=='<a style="color: blue" id="cs180">><div style="color: black">CS180 : Problem Solving And Object-Oriented Programming</div></a>')
    {
        item.innerHTML = 
        `
            <li>CS180 : Problem Solving And Object-Oriented Programming</li>
            <h6>Intro Java class for incoming freshman. Learn about OOP and fundemental programming techniques.</h6>
        `
    } else {
        item.innerHTML='<a style="color: blue" id="cs180">><div style="color: black">CS180 : Problem Solving And Object-Oriented Programming</div></a>'
    }
        
}