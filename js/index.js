// Your code goes here

// 1. mouseover
document.querySelector('.logo-heading').addEventListener('mouseover', () => {
  event.target.style.color = 'dodgerblue';
});

// 2. keydown
window.addEventListener('keydown', () => {
  const keyName = event.key;
  if (keyName === 'Enter') {
    document.querySelector('.nav').style.backgroundColor = 'red';
  }
});

// 3. wheel
document.querySelector('.intro h2').addEventListener('wheel', () => {
  event.target.style.fontSize = "60px";
});

// 4. resize
window.addEventListener("resize", () => {
	const changeTitle = document.querySelector(".intro h2");
	changeTitle.textContent = "NO YELLING ON THE FUN BUS!!!!!";
});

// 5. click
document.querySelectorAll('img').forEach(item => {
  item.addEventListener('click', () => {
    item.src = 'https://images.unsplash.com/photo-1469938945416-24ed556bbaff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80';
    item.alt = 'Woof Woof';
  });
});

// 6. dblclick
document.querySelector("footer p").addEventListener('dblclick', () => {
  event.target.style.transform = 'scale(4)';
  event.target.style.transition = 'all 0.2s';
  event.target.textContent = 'WOOF! WOOF!';
});

// 7. mouseenter
document.querySelector('h1').addEventListener('mouseenter', () => {
  event.target.style.transform = 'scale(6)';
  event.target.style.transition = 'all 2s';
});

// 8. mouseleave
document.querySelector('h1').addEventListener('mouseleave', () => {
  event.target.style.transform = 'scale(0.3)';
  event.target.style.transistion = 'all 0.2s';
});

// 9. contextMenu
document.querySelector('.content-destination').addEventListener('contextmenu', e => {
  alert('No right clicky for you!');
  e.preventDefault();
});

// 10. mouseout
document.querySelectorAll('.btn').forEach(item => {
  item.addEventListener('mouseout', event => {
    event.target.style.backgroundColor = 'purple';
  });
});

// 11. stop propagation
document.querySelector('.nav-link').addEventListener('click', () => {
  event.preventDefault();
});