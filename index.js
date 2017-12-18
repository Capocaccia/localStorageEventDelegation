  const addItems = document.querySelector('.add-items');
  const itemsList = document.querySelector('.plates');
  const submit = document.querySelector('input[type=submit]');

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
  	itemsList.innerHTML = items.map((item, i) => {
  		return `
			<li>
				<input type="checkbox" data-index=${i} id="item${i}" ${item.done ? 'checked' : ''} />
				<label for="item${i}">${item.text}</label>
			</li>
  		`;
  	}).join('');

  }

  addItems.addEventListener('submit', addItem);

  const items = [];