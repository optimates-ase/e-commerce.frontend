<script>
    /**
	 * @type {string}
	 */
    export let title;
    /**
	 * @type {string}
	 */
    export let subtitle;

    const items = [
		{
			title: 'Card 1',
			location: 'Belize City',
			img: 'https://imageio.forbes.com/specials-images/imageserve//629fac5c0ef3ef49a86e2169/0x0.jpg?format=jpg&width=1200',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            price: 400
		},
		{
			title: 'Card 2',
			location: 'Belize City',
			img: 'https://strapi-imaginary.weroad.it/resource/medium/32608/ankunft-silk-caye-belize-placencia-1170x680.jpg',
			text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            price: 600
		},
		{
			title: 'Card 3',
			location: 'Belize City',
			img: 'https://www.bestereistijd.nl/uploads/2017/10/beste-reistijd-belize-2400x1350.jpg',
			text: 'Sed id semper risus in hendrerit. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Vestibulum mattis ullamcorper velit sed ullamcorper morbi. Cursus turpis massa tincidunt dui ut ornare lectus. Tortor condimentum lacinia quis vel.',
            price: 500
		}
	]

</script>

<div class="mb-10">
    <div class="flex justify-center">
        <div class="w-3/4">
            <h1 class="mb-2 flex justify-start">{title}</h1>
            <div class="flex justify-start">{subtitle}
            </div>
        </div>
    </div>
    <div class=" m-10">
        { #each items as item }

            <div class=" m-5 ">

                <div class="card card-hover p-3 variant-soft-surface bg-white shadow-xl">
                    <img src={item.img} alt="" class="rounded-xl ">
                    
                    <h2 class="flex justify-start my-3 text-gray-600">{item.title}</h2>
                    
                    <div class="flex justify-start text-gray-600">
                        {item.location}
                    </div>
            
                    <div class="flex justify-start  text-sm mt-5 items-baseline">
                        CHF {item.price}./
                        <div class="text-xs">person avg.</div>
                        
                    </div>
                </div>
            </div>

        { /each }
    </div>
</div>