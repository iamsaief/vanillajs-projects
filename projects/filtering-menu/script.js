// Fake data for card items
const filteringData = [
	{
		title: "Healthy Meal Plan",
		desc: "How we dream about our future",
		longDesc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet aspernatur ex odio numquam minus at",
		price: 23.99,
		id: "lunch1",
		category: "lunch",
		imgUrl: "https://i.ibb.co/LpX53B6/lunch1.png",
	},
	{
		title: "Fried Chicken Bento",
		desc: "How we dream about our future",
		longDesc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet aspernatur ex odio numquam minus at",
		price: 9.99,
		id: "lunch2",
		category: "lunch",
		imgUrl: "https://i.ibb.co/nB8GVVb/lunch2.png",
	},
	{
		title: "Tarragon-Rubbged Salmon",
		desc: "How we dream about our future",
		longDesc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet aspernatur ex odio numquam minus at",
		price: 6.99,
		id: "lunch3",
		category: "lunch",
		imgUrl: "https://i.ibb.co/dK6mjf7/lunch3.png",
	},
	{
		title: "Indian Lunch",
		desc: "How we dream about our future",
		longDesc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet aspernatur ex odio numquam minus at",
		price: 8.99,
		id: "lunch4",
		category: "lunch",
		imgUrl: "https://i.ibb.co/mJHFXxJ/lunch4.png",
	},
	// {
	// 	title: "Beef Steak",
	// 	desc: "How we dream about our future",
	// 	longDesc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet aspernatur ex odio numquam minus at",
	// 	price: 15.99,
	// 	id: "lunch5",
	// 	category: "lunch",
	// 	imgUrl: "https://i.ibb.co/rmm7rpy/lunch5.png",
	// },
	// {
	// 	title: "Honey-Soy-Glazed with Peppers",
	// 	desc: "How we dream about our future",
	// 	longDesc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet aspernatur ex odio numquam minus at",
	// 	price: 7.99,
	// 	id: "lunch6",
	// 	category: "lunch",
	// 	imgUrl: "https://i.ibb.co/jyj7PhV/lunch6.png",
	// },

	{
		title: "Bagel and cream cheese",
		desc: "How we dream about our future",
		longDesc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet aspernatur ex odio numquam minus at",
		price: 6.99,
		id: "breakfast1",
		category: "breakfast",
		imgUrl: "https://i.ibb.co/nzXG7tP/breakfast1.png",
	},
	{
		title: "Breakfast sandwich",
		desc: "How we dream about our future",
		longDesc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet aspernatur ex odio numquam minus at",
		price: 9.99,
		id: "breakfast2",
		category: "breakfast",
		imgUrl: "https://i.ibb.co/303snWZ/breakfast2.png",
	},
	{
		title: "Baked Chicken",
		desc: "How we dream about our future",
		longDesc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet aspernatur ex odio numquam minus at",
		price: 10.99,
		id: "breakfast3",
		category: "breakfast",
		imgUrl: "https://i.ibb.co/XLdm65K/breakfast3.png",
	},
	{
		title: "Eggs Benedict",
		desc: "How we dream about our future",
		longDesc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet aspernatur ex odio numquam minus at",
		price: 8.99,
		id: "breakfast4",
		category: "breakfast",
		imgUrl: "https://i.ibb.co/F0VXfKF/breakfast4.png",
	},
	{
		title: "Toast Croissant Fried egg",
		desc: "How we dream about our future",
		longDesc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet aspernatur ex odio numquam minus at",
		price: 19.99,
		id: "breakfast5",
		category: "breakfast",
		imgUrl: "https://i.ibb.co/KrBZv0v/breakfast5.png",
	},
	// {
	// 	title: "Full Breakfast Fried Egg Toast Brunch",
	// 	desc: "How we dream about our future",
	// 	longDesc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet aspernatur ex odio numquam minus at",
	// 	price: 3.99,
	// 	id: "breakfast6",
	// 	category: "breakfast",
	// 	imgUrl: "https://i.ibb.co/HDvYygc/breakfast6.png",
	// },

	{
		title: "Salmon with Grapefruit and Lentil Salad",
		desc: "How we dream about our future",
		longDesc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet aspernatur ex odio numquam minus at",
		price: 9.99,
		id: "dinner1",
		category: "dinner",
		imgUrl: "https://i.ibb.co/R9P5dkP/dinner1.png",
	},
	{
		title: "Lemon Salmon Piccata",
		desc: "How we dream about our future",
		longDesc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet aspernatur ex odio numquam minus at",
		price: 10.99,
		id: "dinner2",
		category: "dinner",
		imgUrl: "https://i.ibb.co/0XBW4c8/dinner2.png",
	},
	{
		title: "Prok Tenderloin with Quinoa Pilaf",
		desc: "How we dream about our future",
		longDesc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet aspernatur ex odio numquam minus at",
		price: 12.99,
		id: "dinner3",
		category: "dinner",
		imgUrl: "https://i.ibb.co/M2ZX4XT/dinner3.png",
	},
	// {
	// 	title: "French fries with cheese",
	// 	desc: "How we dream about our future",
	// 	longDesc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet aspernatur ex odio numquam minus at",
	// 	price: 8.99,
	// 	id: "dinner4",
	// 	category: "dinner",
	// 	imgUrl: "https://i.ibb.co/yRC7qRS/dinner4.png",
	// },
	// {
	// 	title: "Garlic fries with cheese",
	// 	desc: "How we dream about our future",
	// 	longDesc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet aspernatur ex odio numquam minus at",
	// 	price: 6.99,
	// 	id: "dinner5",
	// 	category: "dinner",
	// 	imgUrl: "https://i.ibb.co/9nrrTjn/dinner5.png",
	// },
	// {
	// 	title: "baked chiken",
	// 	desc: "How we dream about our future",
	// 	longDesc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet aspernatur ex odio numquam minus at",
	// 	price: 9.99,
	// 	id: "dinner6",
	// 	category: "dinner",
	// 	imgUrl: "https://i.ibb.co/GCLRdzH/dinner6.png",
	// },
];

// Selectors
const filteringCategories = document.querySelector(".filtering-categories");
const filteringContent = document.querySelector(".filtering-content");

// Loading filter items (card)
window.addEventListener("DOMContentLoaded", () => {
	displayFilterCards(filteringData);
	displayFilterBtns();
});

// Displaying cards
const displayFilterCards = (filteringItems) => {
	const displayCards = filteringItems
		.map((data) => {
			return `
                <div class="product-card">
                    <div class="card-thumb">
                        <img src=${data.imgUrl} alt="breakfast 1" />
                    </div>
                    <div class="card-body">	
                        <h4 class="title">${data.title}</h4>
                        <p class="desc">${data.longDesc}</p>
                        <h3 class="price">$${data.price}</h3>
                    </div>
                </div>
            `;
		})
		.join("");
	filteringContent.innerHTML = displayCards;
};

// Displaying the category buttons
const displayFilterBtns = () => {
	const categories = filteringData.reduce(
		(values, item) => {
			if (!values.includes(item.category)) {
				values.push(item.category);
			}
			return values;
		},
		["all"]
	);

	const categoryBtns = categories
		.map((category) => {
			return `
				<button class="filter-btn" data-category=${category}>${category}</button>
			`;
		})
		.join("");
	filteringCategories.innerHTML = categoryBtns;

	const filterBtns = document.querySelectorAll(".filter-btn");
	// Filter btn event handler
	filterBtns.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			const category = e.currentTarget.dataset.category;
			const filteredCategory = filteringData.filter((item) => {
				if (item.category === category) {
					return item;
				}
			});
			if (category === "all") {
				displayFilterCards(filteringData);
			} else {
				displayFilterCards(filteredCategory);
			}
		});
	});
};
