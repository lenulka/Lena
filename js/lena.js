const box = document.getElementsByClassName('map_wripper');
const size = 10;
const ships = {
    '4': 1, 
    '3': 2,
    '2': 3,
    '1': 4
};
[].forEach.call(box,function(item) {
  for (let i=1; i<size; i++) {
		const row = document.createElement('div');
	row.classList.add('row');
	item.appendChild(row);
	for (let j=1; j<size; j++) {
			const col = document.createElement('div');
			col.classList.add('col');
			row.appendChild(col);
}
}
});