const btn = document.querySelector('.up')
const form = document.querySelector('.formbox')
const container = document.querySelector('.container4')
const container1 = document.querySelector('.container5')

btn.addEventListener('click',()=>{
form.classList.add('show')
if(form.classList.contains('show')){
container.style.display= 'none'
container1.style.display= 'none'
}
})