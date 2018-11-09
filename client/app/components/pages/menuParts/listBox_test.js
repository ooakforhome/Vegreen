import React from 'react'

const ListBox = ({category, dishId, name, nameCH, price, description, spicy, garlic, nuts}) => (
	<div>
	<div className="flip-container">
		<div className="flipper listInner col-12">
			<p>dish</p>
			<div className="col-12">
				<p className="listFix">{dishId}</p>
				<img className="sgn listFix" src={{spicy} === true? spicy.jpg:""} />
				<img className="sgn listFix" src={{garlic} === true? garlic.jpg:""}/>
				<img className="sgn listFix" src={{nuts} === true? nuts.jpg:""}/>
				<p className="listFix">{price}</p>
			</div>
			<div className="front col-12">
				<p className="listEng">{name}</p>
				<p className="listCh">{nameCH}</p>
			</div>

			<div className="back col-12">
				<p className="listDescription">{description}</p>
			</div>

		</div>
	</div>
	</div>
);

export default ListBox;
