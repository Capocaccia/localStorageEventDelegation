  const addItems = document.querySelector('.add-items');
  const itemsList = document.querySelector('.plates');
  const items = JSON.parse(localStorage.getItem('items')) || [];
  const toggleAll = document.querySelector('.toggleAll');

  function toggleCheck(e){
  	console.log(e.target)
  }

  function addItem(e){
  	e.preventDefault();
  	const text = (this.querySelector('[name=item]')).value;
  	const item = {
  		text,
  		done: false
  	};
  	items.push(item);
  	populateList(items, itemsList);
  	this.reset();
  }

  function populateList(items = [], itemsList){
  	localStorage.setItem('items', JSON.stringify(items));
  	itemsList.innerHTML = items.map((item, i) => {
  		return `
			<li>
				<input type="checkbox" data-index=${i} id="item${i}" ${item.done ? 'checked' : ''} />
				<label for="item${i}">${item.text}</label>
			</li>
  		`;
  	}).join('');

  }

  function toggleDone(e){
  	if(!e.target.matches('input')) return;
  	const el = e.target;
  	const index = el.dataset.index;
  	items[index].done = !items[index].done;
	populateList(items, itemsList);
  }

  function toggleAllDone(e){
  	e.preventDefault();
  	items.checked == undefined ? items.checked = true : items.checked = !items.checked;
  	items.forEach((item, i) => items.checked ? item.done = 'checked' : item.done = '');
  	populateList(items, itemsList); 
  }

  toggleAll.addEventListener('click', toggleAllDone);

  itemsList.addEventListener('click', toggleDone);

  populateList(items, itemsList);

  addItems.addEventListener('submit', addItem);